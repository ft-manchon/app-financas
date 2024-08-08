import ValoresTotais from "../inicio/mini-card-valor-total";
import { cartoes } from "@/app/lib/placeholder_data";

export default function Cartoes() {
    let listaDeCartoes = cartoes.map((cartao) => {
        var limiteStr = cartao.limite.toFixed(2);
        var limite = parseFloat(limiteStr);
        return (
            <div className="flex flex-col gap-1 py-4 rounded-lg">
                <div className="flex justify-between">
                    <p>{cartao.nome}</p>
                    <button>Ver fatura</button>
                </div>
                <div className="flex justify-between bg-dark text-light py-4 px-6 rounded-lg flex-col sm:flex-row gap-2">
                    <ValoresTotais nome="Limite Disponível" valor={limite} span="font-bold" />
                    <ValoresTotais nome={`Fatura atual (Venc. ${cartao.vencimento}/08)`} valor={cartao.limite} span="font-bold" />
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