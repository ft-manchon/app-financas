'use client'

import MenuNavegacao from "../menu/menu-navegacao";
import MenuConfig from "../menu/menu-config";
import MenuUsuario from "../menu/menu-usuario";
import { FaGear } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";

import { useState } from "react";

export default function Header() {
    const [menuConfigAberto, setMenuConfigAberto] = useState(false);
    const [notificacoesAberto, setNotificacoesAberto] = useState(false);
    const [configUsuarioAberto, setConfigUsuarioAberto] = useState(false);
    const [menuNavegacaoAberto, setMenuNavegacaoAberto] = useState(false);

    const alternarMenuNavegacao = () => {
        setMenuNavegacaoAberto(!menuNavegacaoAberto);
    };
    const fecharMenuNavegacao = () => {
        setMenuNavegacaoAberto(false);
    };
    const alternarMenuConfig = () => {
        setMenuConfigAberto(!menuConfigAberto);
    };
    const fecharMenuConfig = () => {
        setMenuConfigAberto(false);
    };
    const alternarNotificacoesAberto = () => {
        setNotificacoesAberto(!notificacoesAberto);
    };
    const fecharNotificacoes = () => {
        setNotificacoesAberto(false);
    };
    const alternarConfigUsuarioAberto = () => {
        setConfigUsuarioAberto(!configUsuarioAberto);
    };
    const fecharConfigUsuario = () => {
        setConfigUsuarioAberto(false);
    };

    const iconSize = 25;

    return (
        <header className="flex items-center justify-between py-5 w-4/5 m-auto text-sm max-w-screen-lg bg-light dark:bg-dark">
            <div>
                LOGO
            </div>
            <div className="hidden sm:block">
                <MenuNavegacao />
            </div>
            <ul className="flex items-center justify-between gap-2">
                <li className="relative">
                    <button
                        onClick={alternarMenuNavegacao}
                        onMouseLeave={fecharMenuNavegacao}
                        className="block sm:hidden"
                    >
                        <AiOutlineMenu size={iconSize} />
                        {menuNavegacaoAberto && (
                            <div className="absolute w-52 h-fit top-6 right-2 bg-light p-6 rounded-lg">
                                <MenuNavegacao />
                                <div className="border-t py-2">
                                    <MenuConfig />
                                </div>
                            </div>
                        )}
                    </button>
                </li>
                <li className="relative flex">
                    <button
                        onClick={alternarMenuConfig}
                        onMouseLeave={fecharMenuConfig}
                        className="text-left"
                    >
                        <FaGear size={iconSize} />
                        {menuConfigAberto && (
                            <div className="absolute w-52 h-fit top-6 right-2 bg-light p-6 rounded-lg">
                                <MenuConfig />

                            </div>)
                        }
                    </button>
                </li>

                <li className="relative flex bg-ligth">
                    <button
                        onClick={alternarNotificacoesAberto}
                        onMouseLeave={fecharNotificacoes}
                    >
                        <FaBell size={iconSize} />
                        {notificacoesAberto && (
                            <div className="absolute w-52 h-fit top-6 right-2 bg-light p-6 rounded-lg">
                                <p>notificações</p>
                            </div>
                        )}
                    </button>
                </li>
                <li className="relative flex bg-font-main">
                    <button
                        onClick={alternarConfigUsuarioAberto}
                        onMouseLeave={fecharConfigUsuario}
                    >
                        <FaUser size={iconSize} />
                        {configUsuarioAberto && (
                            <div className="absolute w-52 h-fit top-6 right-2 bg-light p-6 rounded-lg">
                                <MenuUsuario />
                            </div>
                        )}
                    </button>
                </li>
            </ul>

        </header>
    )
}