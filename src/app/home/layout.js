import Link from "next/link"
export default function HomeLayout({
    children
}) {
    const nav_bar = "p-4 hover:bg-blue-400"
    return(
        <main className="flex flex-col min-h-screen bg-gradient-to-b from-gray-600 to-black-300">
            <div className="flex flex-row border border-blue-600 text-black bg-orange-400">
                <Link href="/home" className={nav_bar}>
                    Home 
                </Link>
                <Link href="/home/teams" className={nav_bar}>
                    Teams 
                </Link>
                <button className={nav_bar}>
                    Players 
                </button>
                <button className={nav_bar}>
                    Leaderboard    
                </button>
            </div>
            {children}
        </main>
)}
