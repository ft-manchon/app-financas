'use client'

import ExibirValor from "../botoes/exibir-valor";
import { FaRegEye } from "react-icons/fa";
import { useState } from "react";

export default function ValoresTotais({
    nome,
    valor,
    span
}: {
    nome: string;
    valor: number;
    span?: string;
}) {

    const [valorMostradoNaTela, setValorMostradoNaTela] = useState(true)


    const alternarValorMostrado = () => {
        setValorMostradoNaTela(!valorMostradoNaTela);
    }

    const valorStr = valor.toString().replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    return (
        <div className="flex flex-col gap-1">
            <p>{nome}</p>
            <div className="flex items-center  gap-2">
                {valorMostradoNaTela && (
                    <p>R$ <span className={`${span} font-bold`}>{valorStr}</span></p>
                )}
                <FaRegEye onClick={alternarValorMostrado} />
            </div>
        </div>
    )
}