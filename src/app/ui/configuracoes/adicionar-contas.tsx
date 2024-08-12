import BotaoFechar from "@/app/ui/botoes/botao-fechar";
import BotaoConfirmar from "../botoes/botao-confirmar";

export default function AdicionarContas({
    fechar
}: {
    fechar: React.ReactEventHandler;
}) {
    return (
        <div className="fixed top-0 left-0 bottom-0 right-0 w-full bg-dark bg-opacity-35 p-4 ">
            <div className="flex items-center justify-center h-svh">
                <div className="relative bg-light w-full md:w-1/2 max-w-lg h-auto p-8 flex flex-col gap-2 rounded-xl">
                    <h1>Nova conta</h1>
                    <div className="flex flex-col items-center justify-start gap-4 w-full">
                        <div className="flex flex-col items-center justify-start gap-4 w-full text-xs">
                            <div className="bg-placeholder rounded-full w-14 h-14 flex items-center justify-center">
                                I
                            </div>
                            <p>escolha um ícone</p>
                        </div>
                        <div className="flex flex-col w-full text-xs">
                            <label htmlFor="nome-categoria" className="text-placeholder">Nome da conta</label>
                            <input type="text" id="nome-categoria" className="outline-none border border-emphasis rounded-md p-2" />
                            <p className="text-xs">Dê um nome para identificar esta conta</p>
                        </div>
                        <div className="flex items-center w-full">
                            <div className="flex items-center">
                                <input type="checkbox" name="somar-ao-saldo-geral" id="somar-ao-saldo-geral" />
                                <label htmlFor="somar-ao-saldo-geral" className="pl-1 pr-2">Não somar ao saldo geral</label>
                            </div>
                            <button className="text-xs">saiba mais</button>
                        </div>
                        <BotaoConfirmar />
                    </div>

                    <BotaoFechar onClick={fechar} />

                </div>
            </div>
        </div>
    )
}