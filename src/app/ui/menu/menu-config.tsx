'use client'
import Link from "next/link";
import MenuConfigApp from "./menu-config-app";
import { linksMenuConfig } from "@/app/lib/placeholder_data";
import { usePathname } from "next/navigation";

export default function MenuConfig() {
    const pathname = usePathname();
    return (
        <div className="flex justify-start gap-10 sm:block">
            <nav className="pb-2 text-sm w-1/2 sm:w-full">
                {linksMenuConfig.map((link) => {

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
            <div className="w-1/2 sm:w-full sm:border-t sm:py-2 ">
                <MenuConfigApp />
            </div>
        </div>
    );
}