import React from "react";
import Header from "../ui/header/header";


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Header />
                <main className="flex flex-col min-h-screen items-center justify-between p-8 sm:p-16 bg-dark gap-4 text-base">
                    {children}
                </main>
            </body>
        </html>
    )
}