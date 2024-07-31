'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: 'Início',
        href: '/',
        modal: 'categorias'
    }, {
        name: 'Lançamentos',
        href: '/pages/lancamentos',
        modal: 'contas'
    }, {
        name: 'Relatórios',
        href: '',
        modal: 'cartoes'
    }, {
        name: 'Limites de Gastos',
        href: '',
        modal: 'cartoes'
    }
]

export default function MenuNavegacao() {
    const pathname = usePathname();

    return (
            <nav className="block sm:flex sm:items-center sm:justify-between sm:gap-4 pb-2 sm:pb-0">
                {links.map((link) => {
                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`${link.href === pathname ? 'text-emphasis' : ''}`}
                        >
                            <p className="py-2">{link.name}</p>
                        </Link>
                    )
                })}
            </nav>
    )
}