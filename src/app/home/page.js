import Image from "next/image";

export default function Home() {
    return (
        <main className="h-[200vh]">
            <div className="flex flex-col bg-[url('../../public/me_crop.jpg')] min-h-screen bg-cover bg-no-repeat bg-center bg-fixed place-content-center text-center">
                <h2 className="text-6xl font-semibold">Dare to Live</h2>
                <h2 className="text-3xl">Tyler Jurczyk</h2>
            </div>
            <div className="border grid grid-cols-2">
                <h2 className="border col-span-2 text-center italic text-3xl mt-8">"I am a software engineer creating the future of today"</h2>
                <Image src={"/js_logo.png"} width={190} height={190} className="border"/>
                <Image src={"/reactjs_logo.png"} width={160} height={160} className="border" />
            </div>
        </main>
)}
