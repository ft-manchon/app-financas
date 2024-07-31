'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: 'Preferências',
        href: '/pages/configuracoes/preferencias',
        modal: 'preferencias'
    }, {
        name: 'Plano',
        href: '/pages/configuracoes/plano',
        modal: 'plano'
    }, {
        name: 'Tags',
        href: '/pages/configuracoes/tags',
        modal: 'tags'
    }, {
        name: 'Alertas',
        href: '/pages/configuracoes/alertas',
        modal: 'alertas'
    }, {
        name: 'Atividades',
        href: '/pages/configuracoes/atividades',
        modal: 'atividades'
    }
]

export default function MenuConfigApp() {
    const pathname = usePathname();
    return (
        <nav className="pb-2 text-sm ">
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
    );
}