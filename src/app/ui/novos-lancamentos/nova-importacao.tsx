
export default function NovaImportacao({
    fechar
}: {
    fechar: React.ReactEventHandler;
}) {
    return (
        <div className="relative bg-light w-full md:w-1/2 max-w-screen-sm h-auto p-8 flex flex-col gap-2 rounded-xl">
            <p>importação</p>
            <button onClick={fechar}>X</button>
        </div>
    )
}