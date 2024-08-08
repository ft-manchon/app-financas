import ConfigCartoes from "@/app/ui/configuracoes/config-cartoes";
import BotaoAdicionar from "@/app/ui/botoes/botao-config-add";

export default function CartoesDeCredito() {
    return (
        <div>
            <div className="w-full flex items-center justify-between mb-2">
                <p>Cartões de Crédito</p>
                <BotaoAdicionar titulo="Adicionar cartão" />
            </div>
            <ConfigCartoes />
        </div>
    )
}