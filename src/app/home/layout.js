import Image from "next/image"
import Link from "next/link"
export default function HomeLayout({
    children
}) {
    const nav_bar = "p-4 border border-transparent hover:border-white"
    return(
        <main className="flex flex-col min-h-screen bg-amber-800">
            <menu className="flex flex-row bg-orange-900">
                <li className={nav_bar}>
                    <Link href="/home">Home</Link>
                </li>
                <li className={nav_bar}>
                    <Link href="/home/teams">Teams</Link>
                </li>
                <li className={nav_bar}>
                    <Link href="/home/players">Players</Link>
                </li>
                <li className={nav_bar}>
                    <Link href="/home/leaderboard">Leaderboard</Link>
                </li>
                <li className="absolute right-4">
                    <Image src="/csgo.png" alt="CSGO Logo" width={60} height={60}/>
                </li>
            </menu>
            {children}
        </main>
)}
