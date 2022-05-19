interface InputProps {
    tipo?: 'text' | 'number'
    texto: string,
    valor: any
    leitura?: boolean
    className?: string
    valorMudou?: (valor: any) => void
}


export default function Input(props: InputProps) {
    return (
        <div className={`flex flex-col ${props.className}`}>
            <label className="mb-4">
            {props.texto}
            </label>
            <input className={` border border-purple-500 rounded-lg focus:outline-none bg-gray-100 px-4 py-2 ${props.leitura ? '' : 'focus:bg-white'}`} type={props.tipo ?? 'text' }  value={props.valor} readOnly={props.leitura} onChange={e => props.valorMudou?.(e.target.value)} />
            
        </div>
    )
    
    
}