'use client'

import ConfigContas from "@/app/ui/configuracoes/config-contas";
import BotaoAdicionar from "@/app/ui/botoes/botao-config-add";
import AdicionarContas from "@/app/ui/configuracoes/adicionar-contas";

import { useState } from "react";

export default function Contas() {
    const [adicionarAberto, setAdicionarAberto] = useState(false);

    const alternarAdicionar = () => {
        return (
            setAdicionarAberto(!adicionarAberto)
        )
    }

    const fecharAdicionar = () => {
        return (
            setAdicionarAberto(false)
        )
    }
    return (
        <div>
            <div className="w-full flex items-center justify-between mb-2">
                <p>Contas</p>
                <BotaoAdicionar titulo="Nova conta" onclick={alternarAdicionar} />
                {adicionarAberto && (
                    <AdicionarContas fechar={fecharAdicionar} />
                )}
            </div>
            <ConfigContas />
        </div>
    )
}