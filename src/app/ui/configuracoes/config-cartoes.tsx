import { cartoes } from "@/app/lib/placeholder_data"
import Icone from "../icones/icone";

export default function ConfigCartoes() {

    let listaDeCartoes = cartoes.map((cartao) => {
        return (
            <div className="flex items-center justify-between p-2 border-b border-base-main">
                <div className="flex items-center gap-4">
                    <Icone cor={cartao.cor} icone={cartao.icone} />

                    <div>
                        <p>{cartao.nome}</p>
                    </div>
                </div>
            </div>
        )
    }
    )
    return (
        <div>
            {listaDeCartoes}
        </div>
    )
}