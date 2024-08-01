'use client'

import Link from "next/link";
import { linksMenuNavegacao } from "@/app/lib/placeholder_data";
import { usePathname } from "next/navigation";


export default function MenuNavegacao() {
    const pathname = usePathname();

    return (
            <nav className="block sm:flex sm:items-center sm:justify-between sm:gap-4 pb-2 sm:pb-0">
                {linksMenuNavegacao.map((link) => {
                    return (
                        <Link
                            key={link.nome}
                            href={link.href}
                            className={`${link.href === pathname ? 'text-emphasis' : ''}`}
                        >
                            <p className="py-2">{link.nome}</p>
                        </Link>
                    )
                })}
            </nav>
    )
}