import { Header } from "../header/header"

type LayoutProps = {
    children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 flex flex-col mb-12">
               {children}
            </main>
        </div>
    )
}