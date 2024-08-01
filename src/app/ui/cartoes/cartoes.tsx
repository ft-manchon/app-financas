import ValoresTotais from "../inicio/mini-card-valor-total";
import { cartoes } from "@/app/lib/placeholder_data";

export default function Cartoes() {
    let listaDeCartoes = cartoes.map((cartao) => {
        return (
            <div className="flex flex-col gap-1 py-4 rounded-lg">
                <div className="flex justify-between">
                    <p>{cartao.nome}</p>
                    <button>Ver fatura</button>
                </div>
                <div className="flex justify-between bg-dark text-light py-4 px-6 rounded-lg flex-col sm:flex-row gap-2">
                    <ValoresTotais nome="Limite Disponível" valor="1.968,45" span="font-bold" />
                    <ValoresTotais nome="Fatura atual (Venc. 10/08)" valor="1.008,45" span="font-bold" />
                </div>
            </div>
        )
    })

    return (
        <>
            {listaDeCartoes}
        </>
    )
}