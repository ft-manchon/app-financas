import { contas } from "@/app/lib/placeholder_data"
import Icone from "../icones/icone";

export default function Contas() {
    let listaDeContas = contas.map((conta) => {
        const valorStr = conta.saldo.toString().replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        return (
            <div className="w-full flex justify-between items-center mt-2">
                <div className="flex justify-between gap-2 my-2">
                    <Icone cor={conta.cor} icone={conta.icone} />
                    <h2 className="text-base m-auto pl-2">{conta.nome}</h2>
                </div>
                <p>R$ <span className="font-bold">{valorStr}</span></p>
            </div>
        )
    })
    return (
        <>
            {listaDeContas}
        </>
    )
}