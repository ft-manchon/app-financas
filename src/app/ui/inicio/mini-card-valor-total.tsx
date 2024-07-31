export default function ValoresTotais({
    nome,
    valor,
    span
}: {
    nome: string;
    valor: string;
    span?: string;
}) {


    return (
        <div className="flex flex-col gap-1">
            <p>{nome}</p>
            <p>R$ <span className={`${span} font-bold`}>{valor}</span></p>
        </div>
    )
}