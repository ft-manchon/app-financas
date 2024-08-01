export default function Input(
    {
        label, tipo, placeholder
    }: {
        label: string; tipo: string; placeholder?: string; 
    }
) {
    let input;

    if (tipo === 'checkbox') {
        input =
            <div className="w-full flex items-center gap-1">
                <input type={tipo} name="despesa-fixa" id="despesa-fixa" value="é uma despesa fixa" />
                <label className="text-base-main bg-transparent" htmlFor="despesa-fixa">{label}</label>
            </div>

    } else {
        input =
            <div className="w-full">
                <label className="w-full" htmlFor="descricao">{label}</label>
                <input className="text-xs p-1 w-full h-8 rounded-md outline-none" type={tipo} placeholder={placeholder} />
            </div>
    }
    return (
        <div className="w-full">
            {input}
        </div>
    )
}