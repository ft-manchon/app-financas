import { FaArrowTrendUp } from "react-icons/fa6";
import { BsFillMoonStarsFill } from "react-icons/bs";

import Link from "next/link";
import { RiSunFoggyFill } from "react-icons/ri";
import { IoPartlySunnySharp } from "react-icons/io5";
import ValoresTotais from "./mini-card-valor-total";
import AcessoRapido from "./acesso-rapido";

export default function BannerPrincipal() {
    const nomeDoUsuario = "Fernanda";
    var dataAtual = new Date();
    var hora = dataAtual.getHours();
    var mensagem = "";
    var icon;

    if (hora < 12) {
        mensagem = "Bom dia"
        icon = <RiSunFoggyFill />
    } else if (hora > 12 && hora < 18) {
        mensagem = "Boa tarde"
        icon = <IoPartlySunnySharp />
    } else {
        mensagem = "Boa noite"
        icon = <BsFillMoonStarsFill />
    }

    const totais = [
        {
            nome: "receita mensal",
            valor: 1500.25
        },
        {
            nome: "despesa mensal",
            valor: 1254.72,
        },
    ]

    return (
        <div className="bg-light p-5 sm:p-10 flex flex-col md:flex-row items-center justify-between rounded-lg gap-4 md:gap-16">
            <div className="w-full md:w-3/5 h-fit flex flex-col gap-4">
                <div className="text-lg">
                    <div className="flex justify-start items-center gap-4">
                        <h1 className="">{`${mensagem},`}
                        </h1>
                        {icon}
                    </div>
                    <h2 className="font-bold">{`${nomeDoUsuario}!`}</h2>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex flex-row gap-4">
                        {
                            totais.map((total) => {
                                return (
                                    <div className="shadow-lg p-3 sm:p-4 rounded-lg">
                                        <ValoresTotais nome={total.nome} valor={total.valor} />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div>
                        <Link
                            href={'/pages/relatorios'}
                            className="flex items-center gap-2 shadow-xl p-3 sm:p-4 w-fit rounded-lg">
                            <FaArrowTrendUp />
                            <p>ver relatórios</p>
                        </Link>
                    </div>
                </div>
            </div>
            <AcessoRapido />
        </div>
    )
}