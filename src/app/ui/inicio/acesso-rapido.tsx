import BotaoDeAcao from "../botoes/botao-acao";

export default function AcessoRapido() {
    return (
        <div className="w-full md:w-2/5 h-fit flex flex-col justify-between gap-5">
            <h1 className="font-bold text-sm">Acesso rápido</h1>
            <div className="flex items-end justify-between flex-wrap ">
                <BotaoDeAcao nome="despesa" tipo="despesa" />
                <BotaoDeAcao nome="receita" tipo="receita" />
                <BotaoDeAcao nome="transf." tipo="transferencia" />
                <BotaoDeAcao nome="importar" tipo="importar" />
            </div>
        </div>
    )
}