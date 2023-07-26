import Image from "next/image"
export default function Home() {
    return (
        <main className="flex flex-col">
            <Image src="/csgo.png" alt="CSGO Logo" width={150} height={150} className="self-center"/>
            <h2 className="text-black text-center">All Your Favorite CSGO Stats in One Place</h2>)
        </main>
)}
