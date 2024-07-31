import React from "react";
import MenuConfig from "@/app/ui/menu/menu-config";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <section className="flex flex-col sm:flex-row w-full gap-10 justify-center">
            <div className="text-light sm:w-fit">
                <MenuConfig />

            </div>
            <div className="bg-light text-dark w-full max-w-screen-sm p-4 rounded-lg">
                {children}
            </div>
        </section>
    )
}