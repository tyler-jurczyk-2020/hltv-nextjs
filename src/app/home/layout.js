import Link from "next/link"
export default function HomeLayout({
    children
}) {
    const nav_bar = "p-4 border border-transparent hover:border-white"
    return(
        <main className="bg-neutral-900">
            <menu className="flex flex-row justify-center">
                <Link className={nav_bar} href="/home">Home</Link>
                <Link className={nav_bar} href="/home/portfolio">Portfolio</Link>
                <Link className={nav_bar} href="/home/twosense">My Two Sense</Link>
                <Link className={nav_bar} href="/home/about">About Me</Link>
            </menu>
            {children}
        </main>
)}
