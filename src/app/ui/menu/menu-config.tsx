'use client'
import Link from "next/link";
import MenuConfigApp from "./menu-config-app";

import { usePathname } from "next/navigation";

const links = [
    {
        name: 'Categorias',
        href: '/pages/configuracoes/categorias',
        modal: 'categorias'
    }, {
        name: 'Contas',
        href: '/pages/configuracoes/contas',
        modal: 'contas'
    }, {
        name: 'Cartões de Crédito',
        href: '/pages/configuracoes/cartoes-de-credito',
        modal: 'cartoes'
    }
]

export default function MenuConfig() {
    const pathname = usePathname();
    return (
        <div className="flex justify-start gap-10 sm:block">
            <nav className="pb-2 text-sm w-1/2 sm:w-full">
                {links.map((link) => {

                    return (
                        <Link
                            key={link.name}
                            href={link.href}

                            className={`${link.href === pathname ? 'text-emphasis' : ''} `}>
                            <p className="py-2">{link.name}</p>
                        </Link>
                    )
                })}
            </nav>
            <div className="w-1/2 sm:w-full sm:border-t sm:py-2 ">
                <MenuConfigApp />
            </div>
        </div>
    );
}