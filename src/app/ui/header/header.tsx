'use client'

import Image from "next/image";
import MenuNavegacao from "../menu/menu-navegacao";
import MenuConfig from "../menu/menu-config";
import MenuUsuario from "../menu/menu-usuario";

import { useState } from "react";

export default function Header() {
    const [menuConfigAberto, setMenuConfigAberto] = useState(false);
    const [notificacoesAberto, setNotificacoesAberto] = useState(false);
    const [configUsuarioAberto, setConfigUsuarioAberto] = useState(false);
    const [menuNavegacaoAberto, setMenuNavegacaoAberto] = useState(false);

    const alternarMenuNavegacao = () => {
        setMenuNavegacaoAberto(!menuNavegacaoAberto);
    };

    const alternarMenuConfig = () => {
        setMenuConfigAberto(!menuConfigAberto);
    };

    const alternarNotificacoesAberto = () => {
        setNotificacoesAberto(!notificacoesAberto);
    };

    const alternarConfigUsuarioAberto = () => {
        setConfigUsuarioAberto(!configUsuarioAberto);
    };

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
                        className="block sm:hidden"
                    >
                        <Image
                            src={"/menu-aberto.png"}
                            alt="icone de menu com três barras horizontais"
                            width={20}
                            height={20}
                            className=""
                        />
                    </button>
                    {menuNavegacaoAberto && (
                        <div className="absolute w-52 h-fit top-6 right-2 bg-light p-6 rounded-lg">
                            <MenuNavegacao />
                            <div className="border-t border-base-main py-2 ">
                                <MenuConfig />
                            </div>
                        </div>
                    )}
                </li>
                <li className="relative flex">
                    <button
                        onClick={alternarMenuConfig}
                    >
                        <Image
                            src={"/engrenagem.png"}
                            alt="Configurações"
                            width={20}
                            height={20}
                            className=""
                        />
                    </button>
                    {menuConfigAberto && (
                        <div className="block absolute w-52 h-fit top-6 right-2 bg-light p-6 rounded-lg">
                            <MenuConfig />

                        </div>)}
                </li>

                <li className="relative flex bg-ligth">
                    <button
                        onClick={alternarNotificacoesAberto}
                    >
                        <Image
                            src={"/sino.png"}
                            alt="Notificações"
                            width={20}
                            height={20}
                        />
                    </button>
                    {notificacoesAberto && (
                        <div className="absolute w-52 h-fit top-6 right-2 bg-light p-6 rounded-lg">
                            <p>notificações</p>
                        </div>
                    )}
                </li>
                <li className="relative flex bg-font-main">
                    <button
                        onClick={alternarConfigUsuarioAberto}
                    >
                        <Image
                            src={"/forma-do-usuario.png"}
                            alt="Conta do usuário"
                            width={20}
                            height={20}
                        />
                    </button>
                    {configUsuarioAberto && (
                        <div className="absolute w-52 h-fit top-6 right-2 bg-font-main p-6 rounded-lg">
                            <MenuUsuario />
                        </div>
                    )}
                </li>
            </ul>

        </header>
    )
}