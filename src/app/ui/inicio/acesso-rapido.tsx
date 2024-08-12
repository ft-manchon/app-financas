'use client'

import { useState } from "react";
import BotaoDeAcao from "../botoes/botao-acao-banner-principal";
import NovaDespesa from "../novos-lancamentos/nova-despesa";
import NovaTransferecia from "../novos-lancamentos/nova-transferencia";
import NovaImportacao from "../novos-lancamentos/nova-importacao";

export default function AcessoRapido() {

    const [novaDespesa, setNovaDespesa] = useState(false);
    const [novaReceita, setNovaReceita] = useState(false);
    const [novaTransferencia, setNovaTransferencia] = useState(false);
    const [novaImportacao, setNovaImportacao] = useState(false);

    const alternarNovaDespesa = () => {
        setNovaDespesa(!novaDespesa);
    }

    const alternarNovaReceita = () => {
        setNovaReceita(!novaReceita);
    }

    const alternarNovaTransferencia = () => {
        setNovaTransferencia(!novaTransferencia);
    }

    const alternarNovaImportacao = () => {
        setNovaImportacao(!novaImportacao);
    }

    return (
        <div className="w-full md:w-2/5 h-fit flex flex-col justify-between gap-5">
            <h1 className="font-bold text-sm">Acesso rápido</h1>
            <div className="flex items-end justify-between flex-wrap ">
                <BotaoDeAcao nome="despesa" tipo="despesa" onClick={alternarNovaDespesa} />
                {novaDespesa && (
                    <div className="fixed top-0 left-0 bottom-0 right-0 w-full bg-dark bg-opacity-35 p-4 ">
                        <div className="flex items-center justify-center h-svh">
                            <NovaDespesa fechar={alternarNovaDespesa} />
                        </div>
                    </div>
                )}
                <BotaoDeAcao nome="receita" tipo="receita" onClick={alternarNovaReceita} />
                {novaReceita && (
                    <div className="fixed top-0 left-0 bottom-0 right-0 w-full bg-dark bg-opacity-35 p-4">
                        <div className="flex items-center justify-center h-svh">
                            <NovaDespesa fechar={alternarNovaReceita} />
                        </div>
                    </div>

                )}
                <BotaoDeAcao nome="transf." tipo="transferencia" onClick={alternarNovaTransferencia} />
                {novaTransferencia && (
                    <div className="fixed top-0 left-0 bottom-0 right-0 w-full bg-dark bg-opacity-35 p-4">
                        <div className="flex items-center justify-center h-svh">
                            <NovaTransferecia fechar={alternarNovaTransferencia} />
                        </div>
                    </div>
                )}
                <BotaoDeAcao nome="importar" tipo="importar" onClick={alternarNovaImportacao} />
                {novaImportacao && (
                    <div className="fixed top-0 left-0 bottom-0 right-0 w-full bg-dark bg-opacity-35 p-4">
                        <div className="flex items-center justify-center h-svh ">
                            <NovaImportacao fechar={alternarNovaImportacao} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}