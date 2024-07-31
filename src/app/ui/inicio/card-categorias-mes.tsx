
export default function CardCategorias() {
    return (
        <div className="bg-light p-5 sm:p-10 w-full lg:max-w-5/12 h-fit flex flex-col items-start justify-between gap-10 rounded-lg">
            <div className="w-full">
                <h1 className="text-base pb-2">Maiores gastos do mês atual</h1>
                <div className="w-full flex flex-col items-center justify-between sm:flex-row">
                    <div className="w-1/2">
                    <p>teste</p>
                    <p>teste</p>
                    <p>teste</p>
                    <p>teste</p>
                    <p>teste</p>
                    <p>teste</p>
                        {/* <ContaBanco nome="Casa"/> */}
                        {/* <ContaBanco nome="Mercado" /> */}
                        {/* <ContaBanco nome="Lazer" /> */}
                        {/* <ContaBanco nome="Alimentação" /> */}
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="bg-emphasis w-32 h-32 rounded-full">

                        </div>
                        <button className="w-fit my-4 py-2 px-4 border rounded-lg">Ver relatório</button>
                    </div>
                </div>
            </div>
        </div>
    )
}