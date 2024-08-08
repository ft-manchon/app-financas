import ConfigCategorias from "@/app/ui/configuracoes/config-categorias";
import BotaoAdicionar from "@/app/ui/botoes/botao-config-add";

export default function Categorias() {
    return (
        <div>
            <div className="w-full flex items-center justify-between mb-2">
                <p>Categorias</p>
                <BotaoAdicionar titulo="Categoria de despesa" />
            </div>
            <ConfigCategorias />
        </div>
    )
}