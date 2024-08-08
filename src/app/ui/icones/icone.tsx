export default function Icone({
    cor,
    icone
}: {
    cor: string;
    icone: string;
}) {

    let bgCor = "bg-" + cor;
    
    return (
            <div className={`${bgCor} text-light rounded-full w-8 h-8 flex items-center justify-between`}>
            <p className="m-auto">{icone}</p>
        </div>
    )
}