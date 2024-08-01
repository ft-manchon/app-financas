export default function Select(
    {
        label,
        nome,
        placeholder
    }: {
        label: string;
        nome: string;
        placeholder?: string;
    }
) {
    return (
        <div className="text-xs w-full">
            <label className="text-xs" htmlFor="descricao">{label}</label>
            <select className="w-full h-8 rounded-md" name={nome} id="">
                <option value="Santander">{placeholder}</option>
            </select>
        </div>
    )
}