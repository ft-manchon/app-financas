import Link from "next/link";
import ValoresTotais from "./mini-card-valor-total";
import Contas from "../contas/contas";


const tipo = [
    {
        nome: "Minhas contas",
        href: "/pages/configuracoes/contas",
        key: "contas",
        botao: 'Gerenciar contas'
    },
    {
        nome: "Meus cartões",
        href: "/pages/configuracoes/cartoes-de-credito",
        key: "cartoes",
        botao: 'Gerenciar cartões'
    }
]

export default function Card() {
    return (
        <div className="bg-light p-5 sm:p-10 w-full h-fit flex flex-col items-start justify-between gap-10 rounded-lg">
            <div className="pl-2 border-l-4">
            <ValoresTotais nome="Saldo geral" valor="20890.54" />
            </div>
            <div className="w-full border-t">
                <h1 className="text-base pt-4">Minhas contas</h1>
                <Contas />
            </div>
            <div className="w-full font-bold p-2 my-4 border-t border-b text-center">
                    <Link
                        href={'/pages/configuracoes/contas'}
                        key={'contas'}
                    >
                        <p>Gerenciar contas</p>
                    </Link>
                </div>
        </div>
    )
}