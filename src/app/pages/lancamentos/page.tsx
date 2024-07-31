import Image from "next/image";
import Lancamento from "@/app/ui/lancamentos/lancamento";
import Comandos from "@/app/ui/lancamentos/comandos";

export default function Lancamentos() {

    return (
        <div className=" bg-light w-full max-w-screen-md p-4 rounded-lg flex flex-col">
            {/* <Comandos /> */}
            <div className="w-full flex items-center justify-between rounded-3xl bg-dark text-light mt-2 py-2 px-5 text-xs">
                <div className="flex items-center justify-start gap-4">
                    <p>F</p>
                    <p>Filtrar por...</p>
                </div>
                <p>P</p>
            </div>
            <Lancamento descricao="teste" conta_cartao="Santander" valor={120} />
            {/* <Lancamento /> */}
            {/* <Lancamento /> */}
            <div className="w-full max-w-screen-md p-2 mt-2 rounded-lg grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-2">
                <p>Entenda seu saldo</p>
                <div className="flex gap-4 sm:justify-end">
                    <div className="grid grid-cols-2">
                        <p>saldo</p>
                        <p>R$ 22.321,36</p>
                        <p>previsto</p>
                        <p>R$ 22.321,36</p>
                    </div>
                    <button>
                        <Image
                            src={"/sinal-de-mais.png"}
                            alt="Sinal de Mais"
                            width={15}
                            height={15}
                        />
                    </button>
                </div>

            </div>
            {/* <div>
                <p>Quanitdade de likes: {likes}</p>
                <button onClick={darLike}>Like</button>

                <p>O que você digitou no input: {input}</p>
                <input type="text" onChange={event => setInput(event.target.value)}/>
            </div> */}
        </div>
    )
}