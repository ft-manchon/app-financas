import { contas } from "@/app/lib/placeholder_data"

export default function ConfigContas() {

    let listaDeContas = contas.map((conta) => {
        return (
            <div className="flex items-center justify-between p-2 border-b border-base-main">
                <div className="flex items-center gap-4">
                    <div className="bg-emphasis w-6 h-6 rounded-full"></div>
                    <div>
                        <p>{conta.nome}</p>
                    </div>
                </div>

                <div className="flex items-center justify-between w-2/5 text-xs">
                    <button>arquivar</button>
                    <button>+ sub-categoria</button>
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