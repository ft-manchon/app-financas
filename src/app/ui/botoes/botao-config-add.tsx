import { CiCirclePlus } from "react-icons/ci";

export default function BotaoAdicionar({
    titulo,
    onclick
}: {
    titulo: string;
    onclick: React.ReactEventHandler;
}) {
    return (
        <button className="flex items-center justify-between p-2 border border-dark rounded-lg bg-dark text-light" onClick={onclick}>
            <CiCirclePlus size={22} />
            <p className="text-xs pl-1">{titulo}</p>
        </button>
    )
}