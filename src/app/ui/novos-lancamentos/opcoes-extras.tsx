'use client'

import Input from "./input";
import Select from "./select";
import Image from "next/image";

import { useState } from "react";

export default function OpcoesExtras() {
    const opcoesExtras = () => {
        const [menuRepetirAberto, setMenuRepetirAberto] = useState(false);
        const [menuObservacaoAberto, setMenuObservacaoAberto] = useState(false);
        const [menuAnexoAberto, setMenuAnexoAberto] = useState(false);
        const [menuTagsAberto, setMenuTagsAberto] = useState(false);

        const alternarMenuRepetir = () => {
            setMenuRepetirAberto(!menuRepetirAberto);
        }
        const alternarMenuObservacao = () => {
            setMenuObservacaoAberto(!menuObservacaoAberto);
        }
        const alternarMenuAnexo = () => {
            setMenuAnexoAberto(!menuAnexoAberto);
        }
        const alternarMenuTags = () => {
            setMenuTagsAberto(!menuTagsAberto);
        }

        return (
            <div>
                <div>
                    {menuRepetirAberto && (
                        <div className="my-3 text-xs flex flex-col gap-2">
                            <h2 className="my-2">Repetir</h2>
                            <Input label="é uma despesa fixa" tipo="checkbox" />
                            <Input label="é um lançamento parcelado em" tipo="checkbox" />
                        </div>
                    )}
                    {menuObservacaoAberto && (
                        <div className="my-5 text-xs flex flex-col gap-2">
                            <Input label="Observação" tipo="textarea"/>
                        </div>
                    )}
                    {menuAnexoAberto && (
                        <div className="my-5 text-xs flex flex-col gap-2">
                            <Input label="Anexo" tipo="textarea" />
                        </div>
                    )}
                    {menuTagsAberto && (
                        <div className="my-5 text-xs flex flex-col gap-2">
                            <Select label="Tags" nome="tags" />
                        </div>
                    )}
                </div>
                <div className="flex items-center justify-between text-xs w-4/5 m-auto py-4">
                    <button className="flex flex-col items-center gap-2 text-xs" onClick={alternarMenuRepetir}>
                        <Image
                            src={"/duas-flechas.png"}
                            alt="Duas flechas"
                            width={30}
                            height={30}
                        />
                        <p>Repetir</p>
                    </button>
                    <button className="flex flex-col items-center gap-2 text-xs" onClick={alternarMenuObservacao}>
                        <Image
                            src={"/duas-flechas.png"}
                            alt="Duas flechas"
                            width={30}
                            height={30}
                        />
                        <p>Observação</p>
                    </button>

                    <button className="flex flex-col items-center gap-2 text-xs" onClick={alternarMenuAnexo}>
                        <Image
                            src={"/duas-flechas.png"}
                            alt="Duas flechas"
                            width={30}
                            height={30}
                        />
                        <p>Anexo</p>
                    </button>
                    <div>
                        <button className="flex flex-col items-center gap-2 text-xs" onClick={alternarMenuTags}>
                            <Image
                                src={"/duas-flechas.png"}
                                alt="Duas flechas"
                                width={30}
                                height={30}
                            />
                            <p>Tags</p>
                        </button>
                    </div>
                </div>

            </div>

        )
    }

    const opcoesExtrasAtivas = opcoesExtras();

    return (
        <div>
            {opcoesExtrasAtivas}


            {/* <div>
                <BtnOpcoesExtras nome="Repetir" src="/duas-flechas.png" />
                <BtnOpcoesExtras nome="Observação" src="/link.png" />
                <BtnOpcoesExtras nome="Anexo" src="/sinal-de-mais.png" />
                <BtnOpcoesExtras nome="Tags" src="/sinal-de-menos.png" />
            </div> */}

        </div>
    )
}