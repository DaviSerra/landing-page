import Link from "next/link"
import { Button } from "../ui/button"
import { ActiveLink } from "../active-link";
import Image from "next/image";

export const Header = () => {
    return (
        <header className="fixed top-0 z-50 w-full border-b border-white/15 text-white backdrop-blur supports-[backdrop-filters]:bg-background/60">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex justify-center items-center gap-3">
                        <Link href="/">
                            <Image
                                src={"/Logo.svg"}
                                alt="Logo"
                                width={24}
                                height={24}
                            />
                        </Link>
                        <h2 className="text-xl">Site.Set</h2>
                    </div>
                    <nav className="flex items-center gap-6">
                        <ActiveLink href={"/"} >Início</ActiveLink>
                        <ActiveLink href={"/blog"} >Blog</ActiveLink>
                        <Button className="rounded-full" variant="secondary" asChild >
                            <Link href={"/comecar"}>
                                Começar
                            </Link>
                        </Button>
                    </nav>
                </div>
            </div>
        </header>
    )
} 