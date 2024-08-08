import { contas } from "@/app/lib/placeholder_data"
import Icone from "../icones/icone";

export default function ConfigContas() {

    let listaDeContas = contas.map((conta) => {
        return (
            <div className="flex items-center justify-between p-2 border-b border-base-main">
                <div className="flex items-center gap-4">
                    <Icone cor={conta.cor} icone={conta.icone} />
                    <div>
                        <p>{conta.nome}</p>
                    </div>
                </div>
            </div>
        )
    }
    )
    return (
        <div>
            {listaDeContas}
        </div>
    )
}