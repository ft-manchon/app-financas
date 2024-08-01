import BotaoFechar from "../botoes/botao-fechar";
import OpcoesExtras from "./opcoes-extras";
import InfosLancamento from "./infos-lancamentos";
import BotoesConfirmacao from "./botoes-confirmacao";

export default function NovaTransferecia({
    fechar
}: {
    fechar: React.ReactEventHandler;
}) {
    return (
        <div className="relative bg-light w-full md:w-1/2 max-w-screen-sm h-auto p-8 flex flex-col gap-2 rounded-xl">
            <BotaoFechar onClick={fechar} />
            <InfosLancamento title="Transferência entre contas" tipo="transferencia" />
            <OpcoesExtras />
            <BotoesConfirmacao />
        </div>
    )
}