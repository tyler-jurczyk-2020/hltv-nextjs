import Link from "next/link";
import Image from "next/image";
import SlidingTxt from "./SlidingTxt";
import TypingTxt from "./TypingTxt";

export default async function Home() {
    const nav_bar = "p-nav-e border border-transparent hover:border-white"

    const resumeReq = await fetch("http://localhost:3000/home/api", {cache: 'no-store'})
    const resume = await resumeReq.json();

    return (
        <main>
            <menu className="fixed flex flex-row justify-center items-center bg-neutral-900 border-b-2 border-black w-screen h-nav-b]">
                <Link className={nav_bar} href="#home">Home</Link>
                <Link className={nav_bar} href="#about">About</Link>
                <Link className={nav_bar} href={"#portfolio"}>Portfolio</Link>
                <Link className={nav_bar} href="#contact">Contact</Link>
            </menu>
            <div className="flex flex-col bg-[url('../../public/me_crop.jpg')] h-screen bg-cover bg-no-repeat bg-center bg-fixed place-content-center text-center">
                <TypingTxt className="text-6xl font-semibold" text='Tyler Jurczyk' delay={0} spacing={200}/>
                <TypingTxt className="text-3xl" text="Building What's Next" delay={2500} spacing={200}/>
            </div>
            <div className="h-screen grid grid-cols-3 w-5/6 mx-auto -mt-nav-b pt-nav-b" id="about">
                <h2 className="text-center italic text-3xl self-center col-span-3 -my-5">"I am a software engineer creating the future of today"</h2>
                <div className="grid grid-cols-3 col-span-3">
                    <div className="grid grid-cols-2 col-span-2 row-span-2 border border-blue-500 rounded  place-items-center">
                        <Image src={"/js_logo.png"} width={190} height={190} />
                        <Image src={"/reactjs_logo.png"} width={160} height={160} />
                        <Image src={"/nextjs-icon.svg"} width={160} height={160}/>
                        <Image src={"/tailwindcss_1.png"} width={200} height={200}/>
                    </div>
                    <Image className="place-self-center" src={"/python.png"} width={160} height={160}/>
                    <Image className="place-self-center" src={"/cpp.png"} width={160} height={160}/>
                </div>
                <SlidingTxt className='col-span-3 text-2xl text-center self-center' text='"I am a Computer Engineer from the University of Illinois Urbana-Champaign, and I am in the business of building products oriented towards the future. This website that are you are currently looking at was built using the frameworks/language highlighted above. Scroll furthur to see to learn a little more about me.'/>
            </div>
            <div className="h-screen" id="portfolio">
            {resume.Name}
            </div>
        </main>
)}
