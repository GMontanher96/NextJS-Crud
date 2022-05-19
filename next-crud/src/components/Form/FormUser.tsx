import { useState } from "react";
import Input from "../Input/Input";
import Client from "../../core/client"
import Botao from "../Botao/botao";

interface FormUserProps {
    client: Client
    clientMudou?: (client: Client) => void
    cancel?: () => void
}


export default function FormUser(props: FormUserProps) {
    const id = props.client?.id ?? null 
    const [ name, setName ] = useState(props.client?.name ?? '')
    const [ age, setAge ] = useState(props.client?.age ?? 0)

    return (
        <div>
            {id ? (
                <Input leitura texto="Código" valor={id} className="mb-4"  />
            ) : false }

            <Input texto="Nome" valor={name} valorMudou={setName} className="mb-4"  />
            <Input texto="Idade" tipo="number" valor={age} valorMudou={setAge} />
                    <div className="flex justify-end mt-7">
                        <Botao cor="blue" className="mr-2" onClick={() => props.clientMudou?.(new Client(name, age, id))}>
                            {id ? 'Alterar' : 'Salvar' }
                        </Botao>
                        <Botao onClick={props.cancel}>
                            Cancelar
                      </Botao>
                    </div>
        </div>
    )
    
    
}