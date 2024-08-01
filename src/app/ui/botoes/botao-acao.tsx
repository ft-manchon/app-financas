
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { GoArrowSwitch } from "react-icons/go";
import { IoLinkOutline } from "react-icons/io5";
import React from "react";


export default function BotaoDeAcao({
    nome,
    tipo,
    onClick
}: {
    nome: string;
    tipo: 'despesa' | 'receita' | 'transferencia' | 'importar';
    onClick: React.ReactEventHandler;
}) {
    let icon;

    if (tipo === 'despesa') icon = <GoPlus size={25} />
    if (tipo === 'receita') icon = <FiMinus size={25} />
    if (tipo === 'transferencia') icon = <GoArrowSwitch size={25} />
    if (tipo === 'importar') icon = <IoLinkOutline size={25} />

    return (
        <div className="flex flex-col items-center gap-2">
            <button className="border-2 rounded-full w-10 h-10 flex items-center justify-center" onClick={onClick}>
                {icon}
            </button>
            <p className="text-xs">{nome}</p>
        </div>
    )
}