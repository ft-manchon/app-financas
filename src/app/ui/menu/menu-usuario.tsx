import Image from "next/image";
import Link from "next/link";

export default function MenuUsuario() {
    return (
        <>
            <div className=" w-full flex flex-col items-center justify-between gap-2 border-b py-4">
                <div className=" border border-base-main rounded-full w-fit p-2">
                    <Image
                        src={"/forma-do-usuario.png"}
                        alt="Conta do usuário"
                        width={50}
                        height={50}
                    />
                </div>
                <p className="py-2">Usuario</p>
            </div>
            <div className="flex flex-col items-center py-4">
                <Link
                    key={'minha-conta'}
                    href={'/pages/configuracoes/minha-conta'} 
                >
                    <p>Minha conta</p>
                </Link>
                <Link
                    key={'minha-conta'}
                    href={'/pages/configuracoes/minha-conta'} 
                    className="py-1"
                >
                    <p className="py-2">Sair</p>
                </Link>
            </div>
        </>
    )
}