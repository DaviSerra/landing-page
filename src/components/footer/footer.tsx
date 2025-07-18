
import Link from "next/link"
import { Logo } from "../logo"

export const Footer = () => {
    return (
        <footer className=" bg-gray-500 py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between md:flex-row gap-8">
                    <Logo />
                    <nav className="flex flex-col md:flex-row items-center gap-4 text-sm text-blue-100">
                        <Link href={"/termos-de-uso"} className="hover:text-blue-200">Termos de uso</Link>
                        <Link href={"/politica-de-privacidade"} className="hover:text-blue-200">Política de privacidade</Link>
                        <Link href={"/enviar-feedback"} className="hover:text-blue-200">Enviar feedback</Link>
                    </nav>
                </div>
            </div>
        </footer>
    )
}