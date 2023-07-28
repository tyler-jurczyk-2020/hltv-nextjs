import Image from "next/image"
import Link from "next/link"
export default function HomeLayout({
    children
}) {
    const nav_bar = "p-4 border border-transparent hover:border-white"
    return(
        <main className="flex flex-col min-h-screen bg-amber-800">
            <menu className="flex flex-row bg-orange-900">
                    <Link className={nav_bar} href="/home">Home</Link>
                    <Link className={nav_bar} href="/home/teams">Teams</Link>
                    <Link className={nav_bar} href="/home/players">Players</Link>
                    <Link className={nav_bar} href="/home/leaderboard">Leaderboard</Link>
                    <Image src="/csgo.png" alt="CSGO Logo" width={60} height={60} className="ml-auto mr-4"/>
            </menu>
            {children}
        </main>
)}
