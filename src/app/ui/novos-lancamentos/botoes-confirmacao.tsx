import { FiCheck } from "react-icons/fi";

export default function BotoesConfirmacao() {
    return (
        <div className="flex items-center justify-center gap-4 hover:">
            <button className="hidden">Cancelar</button>
            <button className="bg-emphasis w-12 h-12 rounded-full flex items-center justify-center ">
            <FiCheck size={20} />
            </button>
            <button>Salvar e criar outra</button>
        </div>
    )
}