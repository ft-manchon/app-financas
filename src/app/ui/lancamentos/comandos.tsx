'use client'

import Image from "next/image";
import NovaDespesa from "../novos-lancamentos/nova-despesa";
import { useState } from "react";
import NovaReceita from "../novos-lancamentos/nova-receita";
import NovaTransferencia from "../novos-lancamentos/nova-transferencia";

export default function Comandos() {
    const novoLancamento = () => {
        const [novoLancamentoAberto, setNovoLancamentoAberto] = useState(false);

        const alternarLancamentoAberto = () => {
            setNovoLancamentoAberto(!novoLancamentoAberto);
        }

        const fecharLancamentoAberto = () => {
            setNovoLancamentoAberto(false);
        }

        var tipoDeLancamento;
                        

        return (
            <div className="flex items-center gap-2">
                <p className="font-bold">Lançamentos</p>
                <button onClick={alternarLancamentoAberto}>
                    <Image
                        src={"/sinal-de-mais.png"}
                        alt="Sinal de mais"
                        width={20}
                        height={20}
                    />
                </button>
                {novoLancamentoAberto && (
                    <div className="fixed top-0 bottom-0 left-0 right-0 bg-base-main bg-opacity-40 z-40 flex items-center justify-center py-8 text-xs">
                        <div className=" m-auto flex flex-col items-center justify-start">
                        {tipoDeLancamento}

                            {/* <div className=" w-full flex items-center justify-between">
                                <h1 className="text-lg font-bold">Novo lançamento</h1>
                                <button onClick={fecharLancamentoAberto} className="bg-base-main text-font-main rounded-full w-6 h-6 text-xs z-50">X</button>
                            </div> */}
                        </div>
                        <div className="relative">
                            <button onClick={fecharLancamentoAberto} className="bg-base-main text-font-main rounded-full w-6 h-6 text-xs z-50 absolute -top-0 right-0">X</button>
                        </div>

                    </div>
                )}
            </div>

        )
    }

    const novoLancamentoAtivo = novoLancamento();

    return (
        <div className="py-2 grid grid-cols-3 items-center justify-between">
            <div className="flex items-center gap-2">
                {/* <p className="font-bold">Lançamentos</p>
                <button>
                    <Image
                        src={"/sinal-de-mais.png"}
                        alt="Sinal de mais"
                        width={20}
                        height={20}
                    />
                </button> */}
                {novoLancamentoAtivo}
            </div>
            <div className="flex items-center gap-4 justify-center">
                <button>
                    <Image
                        src={"/seta-direita.png"}
                        alt="Seta"
                        width={10}
                        height={10}
                        className="rotate-180"
                    />
                </button>
                <p className="text-center">Julho 2024</p>
                <button>
                    <Image
                        src={"/seta-direita.png"}
                        alt="Seta"
                        width={10}
                        height={10}
                    />
                </button>
            </div>
            <div className="flex items-center gap-4 justify-end">
                <button>
                    <Image
                        src={"/fluxo.png"}
                        alt="Duas setas"
                        width={20}
                        height={20}
                    />
                </button>
                <button>
                    <Image
                        src={"/pontos.png"}
                        alt="Três pontos"
                        width={20}
                        height={20}
                    />
                </button>
            </div>
        </div>
    )
}