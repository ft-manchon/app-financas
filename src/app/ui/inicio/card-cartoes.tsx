import Link from "next/link";
import ValoresTotais from "./mini-card-valor-total";
import Cartoes from "../cartoes/cartoes";

export default function CardCartoes() {
    return (
        <div className="bg-light p-5 sm:p-10 w-full h-fit flex flex-col items-start justify-between gap-5 rounded-lg">
            <div className="pl-2 border-l-4">
                <ValoresTotais nome="Faturas do mês" valor="-3425.24" span="text-base" />
            </div>
            <div className="w-full border-t">
                <h1 className="text-base pt-4">Meus cartões</h1>
                <Cartoes />
            </div>
            <div className="w-full font-bold p-2 my-4 border-t border-b text-center">
                <Link
                    href={'/pages/configuracoes/cartoes-de-credito'}
                    key={'cartoes'}
                >
                    <p>Gerenciar cartões</p>
                </Link>
            </div>
        </div>
    )
}