'use client'

import Link from "next/link";
import ValoresTotais from "./mini-card-valor-total";
import Cartoes from "../cartoes/cartoes";
import { IoMdArrowDropdownCircle } from "react-icons/io";

import { useState } from "react";

export default function CardCartoes() {
    const iniciarComInfosCartoesAberto = true;

    const [botaoMostrarInfosAberto, setBotaoMostrarInfosAberto] = useState(false);
    const [infosCartoesoAberto, setInfoCartoesAberto] = useState(iniciarComInfosCartoesAberto);
    const [setaParaBaixo, setSetaParaBaixo] = useState(iniciarComInfosCartoesAberto);

    const alternarBotaoMostrarInfos = () => {
        setBotaoMostrarInfosAberto(!botaoMostrarInfosAberto);
    }
    const alternarInfosCartoes = () => {
        setInfoCartoesAberto(!infosCartoesoAberto);
        setSetaParaBaixo(!setaParaBaixo);
    }

    const total =
    {
        nome: "Faturas do mês",
        valor: 3425.24
    }

    return (
        <div className="bg-light p-5 sm:p-10 w-full h-fit flex flex-col items-start justify-between gap-5 rounded-lg" onMouseEnter={alternarBotaoMostrarInfos}>
            <div className="flex items-start justify-between w-full">
                <div className="pl-2 border-l-4">
                    <ValoresTotais nome={total.nome} valor={(total.valor) * -1} span="text-base" />
                </div>
                <button onClick={alternarInfosCartoes}>
                    {setaParaBaixo && (
                        <IoMdArrowDropdownCircle size={25} className="rotate-180" />
                    )}
                    {!setaParaBaixo && (
                        <IoMdArrowDropdownCircle size={25} />
                    )}
                </button>
            </div>
            {infosCartoesoAberto && (
                <div className="w-full border-t">
                    <div className="">
                        <h1 className="text-base pt-4">Meus cartões</h1>
                        <Cartoes />
                    </div>
                    <div className="w-full font-bold p-2 my-4 border-t border-b text-center">
                        <Link
                            href={'/pages/configuracoes/cartoes-de-credito'}
                            key={'cartoes'}
                        >
                            <p>Gerenciar cartões</p>
                        </Link>
                    </div>
                </div>
            )}

        </div>
    )
}