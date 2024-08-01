'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { linksMenuConfigApp } from "@/app/lib/placeholder_data";

export default function MenuConfigApp() {
    const pathname = usePathname();
    return (
        <nav className="pb-2 text-sm ">
            {linksMenuConfigApp.map((link) => {
                
                return (
                    <Link
                        key={link.nome}
                        href={link.href}
                        
                        className={`${link.href === pathname ? 'text-emphasis' : ''} `}>
                        <p className="py-2">{link.nome}</p>
                    </Link>
                )
            })}
        </nav>
    );
}