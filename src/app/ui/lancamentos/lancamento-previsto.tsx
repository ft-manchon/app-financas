import Icone from "../icones/icone";

export default function LancamentoPrevisto() {
    return (

        <div className="flex items-center justify-between py-2 mb-2 border-b">
            <div className="flex items-center justify-between gap-3">
                <Icone cor="dark" icone="f"/>
                <div className="">
                    <h1>Fatura de Agosto 2024</h1>
                    <p>cartão/data</p>
                </div>
            </div>
            <p>R$ 200,00</p>
        </div>
    )
}