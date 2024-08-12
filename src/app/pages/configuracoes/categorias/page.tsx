'use client'

import ConfigCategorias from "@/app/ui/configuracoes/config-categorias";
import BotaoAdicionar from "@/app/ui/botoes/botao-config-add";
import AdicionarCategorias from "@/app/ui/configuracoes/adicionar-categorias";

import { useState } from "react";

export default function Categorias() {
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
                <p>Categorias</p>
                <BotaoAdicionar titulo="Categoria de despesa" onclick={alternarAdicionar} />
                {adicionarAberto && (
                    <AdicionarCategorias fechar={fecharAdicionar} />
                )}
            </div>
            <ConfigCategorias />
        </div>
    )
}