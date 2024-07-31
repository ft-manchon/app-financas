import ValoresTotais from "../inicio/mini-card-valor-total";

const cartoes = [
    {
        nome: "Cartão 1",
        limite: 1500.00,
        fechamento: 3,
        vencimento: 10,
        conta_pagamento: "Santander",
        icone: ''
    },
    {
        nome: "Cartão 2",
        limite: 5000.00,
        fechamento: 24,
        vencimento: 5,
        conta_pagamento: "Itaú",
        icone: ''
    },
    {
        nome: "Cartão 3",
        limite: 2000.00,
        fechamento: 12,
        vencimento: 18,
        conta_pagamento: "Caixa",
        icone: ''
    },
]

export default function Cartoes() {
    let listaDeCartoes = cartoes.map((cartao) => {
        return (
            <div className="flex flex-col gap-1 p-4 rounded-lg">
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