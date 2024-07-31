import Image from "next/image";

export default function Lancamento(
    {
        descricao,
        conta_cartao,
        valor
    }: {
        descricao: string;
        conta_cartao: string;
        valor: number;
    }) {

    return (
        <div className="w-full flex justify-between items-center border-b ">
            <div className="flex justify-start items-center gap-2 my-3 w-1/2">
                <div className="bg-emphasis w-8 h-8 rounded-full flex items-center justify-center" >T</div>
                <h2 className="pl-2">{descricao}</h2>
            </div>
            <div>
                {conta_cartao}
            </div>

            <div className="w-16 flex items-center justify-between">
                <p>{valor}</p>
                <Image
                    src={"/pagamento.png"}
                    alt="Icone para confirmar pagamento"
                    width={12}
                    height={12}
                />
            </div>

        </div>
    )
}