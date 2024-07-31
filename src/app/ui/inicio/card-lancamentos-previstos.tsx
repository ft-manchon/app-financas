import Image from "next/image";

export default function CardLancamentosPrevistos({
    tipo
}: {
    tipo: string;
}) {
    return (
        <div className="bg-light p-5 sm:p-10 w-full h-fit flex flex-col items-start justify-between gap-5 rounded-lg">
            <h1 className="text-base pb-2">{`Contas a ${tipo}`}</h1>
            <div className="w-full">
                <p className="w-full text-center my-1 py-2 bg-emphasis rounded-lg text-base-main font-bold">Atrasadas</p>
                {/* <LancamentoPrevisto /> */}
                {/* <LancamentoPrevisto /> */}

            </div>
            <div className="w-full">
                <p className="w-full text-center my-1 py-2 bg-emphasis rounded-lg text-base-main font-bold">Próximas</p>
                {/* <LancamentoPrevisto /> */}
                {/* <LancamentoPrevisto /> */}
                {/* <LancamentoPrevisto /> */}
            </div>
            <button className="w-full text-center flex items-center justify-center gap-2">
                <p>ver mais</p>
                <Image 
                    src={'/seta-direita.png'}
                    alt="Seta para baixo"
                    width={8}
                    height={8}
                    className="rotate-90"
                />
            </button>
        </div>
    )
}