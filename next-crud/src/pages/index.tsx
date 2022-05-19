import { useState } from "react";
import Botao from "../components/Botao/botao";
import FormUser from "../components/Form/FormUser";
import Layout from "../components/Layout/layout";
import Table from "../components/Table/table";
import client from "../core/client";
import Client from "../core/client";

export default function Home() {

  const [client, setClient] = useState<Client>(Client.empty())
  const [visible, setVisible] = useState<"tabela" | "form">("tabela");


  const clients = [
    new Client("Montanher", 34, "1"),
    new Client("teste0", 34, "2"),
    new Client("teste1", 34, "3"),
    new Client("teste2", 34, "4"),
    new Client("teste3", 34, "5"),
    new Client("teste4", 34, "6"),
  ];

  function clientSelect(client: client) {
    setClient(client)
    setVisible('form')
  }

  function clientSave(client: Client) {
    console.log(client);
    setVisible('tabela')
  }

  function clientNew() {
    setClient(Client.empty())
    setVisible('form')
  }

  function clientDelet(client: client) {
    console.log(`excluir o cliente com o nome ${client.name}`);
  }


  return (
    <div
      className={`flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white`}
    >
      <Layout title="Cadastro Simples Next">
      {visible === 'tabela' ? (
        <>
          <div className="flex justify-end">
            <Botao cor="green" className="mb-4" onClick={clientNew}>
              Novo Cliente
            </Botao>
          </div>
          <Table
            clients={clients}
            clientSelect={clientSelect}
            clientDelet={clientDelet}
          />
        </>
  ) : (
        <FormUser client={client} clientMudou={clientSave} cancel={() => setVisible('tabela')}></FormUser>
  )}
      </Layout>
    </div>
  );
}
