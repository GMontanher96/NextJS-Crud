import client from "../../core/client";
import { IconDelet, IconEdit } from "../Icons";

interface TableProps {
  clients: client[]
  clientSelect?: (client: client) => void
  clientDelet?: (client: client) => void
}

export default function Table(props: TableProps) {

  const exibirActions = props.clientSelect || props.clientDelet

  function renderHeader() {
    return (
        <tr>
          <th  className="text-left -p4">Código</th>
          <th  className="text-left -p4">Name</th>
          <th  className="text-left -p4">Age</th>
          {exibirActions ? <th  className="-p4">Action</th> : false }
        </tr>
    );
  }

  function renderDados() {
    return props.clients?.map((client, i) => {
      return (
        <tr key={client.id} className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
          <td  className="text-left -p4">{client.id}</td>
          <td  className="text-left -p4">{client.name}</td>
          <td  className="text-left -p4">{client.age}</td>
          {exibirActions ? renderAction(client) : false }
        </tr>
      );
    });
  }

  function renderAction(client: client ) {
    return (
      <td className="flex justify-center">
        {props.clientSelect ? (
        <button onClick={() => props.clientSelect?.(client)} className="{`flex justify-center items-center text-green-600 rounded-full p-2 m-1 hover:bg-purple-50`}">
        {IconEdit}
        </button>
        ) : false}
        {props.clientDelet ? (
        <button onClick={() => props.clientDelet?.(client)} className="{`flex justify-center items-center text-red-600 rounded-full p-2 m-1 hover:bg-purple-50`}">
        {IconDelet}</button>
        ) : false }

      </td>
    )
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
    <thead className={`
      text-gray-100
      bg-gradient-to-r from-purple-500 to-purple-600
    `}>
    {renderHeader()}
    </thead>
    <tbody>
    {renderDados()}
    </tbody>
</table>
  )
}
