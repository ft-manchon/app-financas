import { contas } from "@/app/lib/placeholder_data"

export default function Contas() {
    let listaDeContas = contas.map((conta) => {
        return (
            <div className="w-full flex justify-between items-center mt-2">
                <div className="flex justify-between gap-2 my-2">
                    <div className="bg-emphasis w-8 h-8 rounded-full m-auto flex items-center justify-center" >T</div>
                    <h2 className="text-base m-auto pl-2">{conta.nome}</h2>
                </div>
                {conta.saldo}
            </div>
        )
    })
    return (
        <>
            {listaDeContas}
        </>
    )
}