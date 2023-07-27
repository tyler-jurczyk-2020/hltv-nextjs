import Link from "next/link"
export default function HomeLayout({
    children
}) {
    const nav_bar = "p-4 border border-black hover:border-white"
    return(
        <main className="flex flex-col min-h-screen bg-white">
            <div className="flex flex-row text-black bg-gray-700">
                <div className={nav_bar}>
                <Link href="/home">
                    Home 
                </Link>
                </div>
                <div className={nav_bar}>
                <Link href="/home/teams">
                    Teams 
                </Link>
                </div>
                <div className={nav_bar}>
                <Link href="/home/players">
                    Players 
                </Link>
                </div>
                <div className={nav_bar}>
                <Link href="/home/leaderboard">
                    Leaderboard    
                </Link>
                </div>
            </div>
            {children}
        </main>
)}
