'use client'

import { FaRegEye } from "react-icons/fa";
import { useState } from "react";

export default function ExibirValor() {
    
    const [valorMostradoNaTela, setValorMostradoNaTela] = useState(true)

    const alternarValorMostrado = () => {
        setValorMostradoNaTela(!valorMostradoNaTela);
    }
    return (
        <FaRegEye onClick={alternarValorMostrado} />

    )
}