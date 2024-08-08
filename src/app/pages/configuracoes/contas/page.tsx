import ConfigContas from "@/app/ui/configuracoes/config-contas";
import BotaoAdicionar from "@/app/ui/botoes/botao-config-add";

export default function Contas() {
    return (
        <div>
            <div className="w-full flex items-center justify-between mb-2">
                <p>Contas</p>
                <BotaoAdicionar titulo="Nova conta" />
            </div>
            <ConfigContas />
        </div>
    )
}