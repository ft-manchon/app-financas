import Input from "./input";
import Select from "./select";
import { BsFillHandThumbsUpFill } from "react-icons/bs";

export default function InfosLancamento({
    title,
    tipo
}: {
    title: string;
    tipo: string;
}) {
    let card;
    if (tipo === 'transferencia') {
        card =
            <div className="flex flex-col gap-4">
                <h1 className="text-base">{title}</h1>
                <Select label="Saiu da conta" nome="saida" />
                <Select label="Entrou na conta" nome="entrada" />
                <Input label="Descrição" tipo="text" placeholder="Transferência" />
                <div className="relative flex items-center justify-between gap-3">
                    <Input label="Valor" tipo="text" placeholder="R$ " />
                    <Input label="Data" tipo="date" />
                    <button className=" text-font-main rounded-full w-5 h-5 text-xs absolute -right-6 top-6">
                        <BsFillHandThumbsUpFill />
                    </button>
                </div>
            </div>
    }
    else {
        card = <div>
            <h1 className="text-base ">{title}</h1>
            <div className="flex flex-col gap-4 my-2">
                <Input label="Descrição" tipo="text" />
                <div className="relative flex items-center justify-between gap-3">
                    <Input label="Valor" tipo="text" placeholder="R$ " />
                    <Input label="Data" tipo="date" />
                    <button className=" text-base-main rounded-full w-5 h-5 text-xs absolute -right-6 top-7">                                       <BsFillHandThumbsUpFill size={16} color="green" />
                    </button>
                </div>
                <div className="flex gap-3 w-full">
                    <Select label="Conta/Cartão" nome="conta-cartao" placeholder="Santander" />
                    <Select label="Categoria" nome="categoria" placeholder="Buscar a categoria" />
                </div>
            </div>
        </div>
    }
    return (
        <div>
            {card}
        </div>
    )
}