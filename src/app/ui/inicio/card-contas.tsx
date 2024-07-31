import Link from "next/link";
import ValoresTotais from "./mini-card-valor-total";

export default function CardContas() {
    return (
        <div className="bg-light p-5 sm:p-10 w-full h-fit flex flex-col items-start justify-between gap-10 rounded-lg">
            <div className="pl-2 border-l-4">
            <ValoresTotais nome="Saldo geral" valor="20890.54" />
            </div>
            <div className="w-full border-t">
                <h1 className="text-base pt-4">Minhas contas</h1>
                {/* <ContaBanco nome="Conta 1" valorInicial={1200} /> */}
                {/* <ContaBanco nome="Conta 2" valorInicial={10} /> */}
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