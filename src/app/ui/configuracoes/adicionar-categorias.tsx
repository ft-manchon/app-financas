import BotaoFechar from "@/app/ui/botoes/botao-fechar";

export default function AdicionarCategorias({
    fechar
}: {
    fechar: React.ReactEventHandler;
}) {
    return (
        <div className="fixed top-0 left-0 bottom-0 right-0 w-full bg-dark bg-opacity-35 p-4 ">
            <div className="flex items-center justify-center h-svh">
                <div className="relative bg-light w-full md:w-1/2 max-w-lg h-auto p-8 flex flex-col gap-2 rounded-xl">
                    <h1>Criando categoria de despesa</h1>
                    <div className="flex items-center justify-start gap-4 w-full">
                        <div className="bg-placeholder rounded-full w-14 h-14 flex items-center justify-center">
                            I
                        </div>
                        <div className="flex flex-col w-full text-xs">
                            <label htmlFor="nome-categoria" className="text-placeholder">Nome da categoria</label>
                            <input type="text" id="nome-categoria" className="outline-none border border-emphasis rounded-md p-2" />
                        </div>
                    </div>
                    <div>
                        <h1>Escolha uma cor</h1>
                        <div className="flex flex-wrap gap-2 justify-center">
                            <div className="bg-blue rounded-full w-8 h-8 flex items-center justify-center"></div>
                            <div className="bg-yellow rounded-full w-8 h-8 flex items-center justify-center"></div>
                            <div className="bg-pink rounded-full w-8 h-8 flex items-center justify-center"></div>
                            <div className="bg-red rounded-full w-8 h-8 flex items-center justify-center"></div>
                            <div className="bg-orange rounded-full w-8 h-8 flex items-center justify-center"></div>
                            <div className="bg-green rounded-full w-8 h-8 flex items-center justify-center"></div>
                        </div>
                    </div>
                    <div>
                        <h1>Escolha um ícone</h1>
                        <div className="flex flex-wrap gap-2 justify-center">
                            <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center"></div>
                            <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center"></div>
                            <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center"></div>
                            <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center"></div>
                            <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center"></div>
                            <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center"></div>
                            <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center"></div>
                            <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center"></div>
                            <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center"></div>
                            <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center"></div>
                            <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center"></div>
                            <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center"></div>
                        </div>
                    </div>

                    <BotaoFechar onClick={fechar} />

                </div>
            </div>
        </div>
    )
}