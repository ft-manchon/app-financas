import BannerPrincipal from "./banner-principal";
import CardCartoes from "./card-cartoes";
import CardContas from "./card-contas";
import CardLancamentosPrevistos from "./card-lancamentos-previstos";
import CardCategorias from "./card-categorias-mes";

export default function ContainerInfos() {
    return (
        <div className="flex flex-col gap-10 w-full max-w-screen-md">
            <BannerPrincipal />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <CardCartoes />
                <CardContas />
                <CardLancamentosPrevistos tipo="A pagar"/>
                <CardCategorias />
            </div>
        </div>
    )
}