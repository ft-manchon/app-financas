export default function BotaoFechar({
    onClick
}: {
    onClick: React.ReactEventHandler;
}) {
    return (
        <div>
            <button className="border border-dark text-dark rounded-full w-6 h-6 absolute right-5 top-5" onClick={onClick}>X</button>
        </div>
    )
}