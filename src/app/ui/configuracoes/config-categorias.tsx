import { categorias } from "@/app/lib/placeholder_data";
import Icone from "../icones/icone";

export default function ConfigCategorias() {

    let listaDeCategorias = categorias.map((categoria) => {
        return (
            <div className="flex items-center justify-between p-2 border-b border-base-main">
                <div className="flex items-center gap-4">
                    <Icone cor={categoria.cor} icone={categoria.icone} />
                    <div>
                        <p>{categoria.nome}</p>
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
            {listaDeCategorias}
        </div>
    )
}