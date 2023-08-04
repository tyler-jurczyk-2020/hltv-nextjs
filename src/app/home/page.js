import Link from "next/link";
import Image from "next/image";
import SlidingTxt from "./SlidingTxt";
import TypingTxt from "./TypingTxt";

export default function Home() {
    const nav_bar = "p-4 border border-transparent hover:border-white"
    return (
        <main className="h-[200vh]">
            <menu className="fixed flex flex-row justify-center items-center bg-neutral-900 min-w-full h-[58px]">
                <Link className={nav_bar} href="#home">Home</Link>
                <Link className={nav_bar} href={"#portfolio"}>Portfolio</Link>
                <Link className={nav_bar} href="/home/twosense">My Two Sense</Link>
                <Link className={nav_bar} href="/home/about">About Me</Link>
            </menu>
            <div className="flex flex-col bg-[url('../../public/me_crop.jpg')] min-h-screen bg-cover bg-no-repeat bg-center bg-fixed place-content-center text-center">
                <TypingTxt className="text-6xl font-semibold" text='Tyler Jurczyk' delay={0} spacing={200}/>
                <TypingTxt className="text-3xl" text="Building What's Next" delay={2500} spacing={200}/>
            </div>
            <div className="grid gap-y-20 grid-cols-2 justify-items-center -mt-[58px] pt-[58px]" id="portfolio">
                <h2 className="col-span-2 text-center italic text-3xl mt-8">"I am a software engineer creating the future of today"</h2>
                <Image src={"/js_logo.png"} width={190} height={190} />
                <Image src={"/reactjs_logo.png"} width={160} height={160} />
            </div>
            <SlidingTxt className='text-2xl text-center self-end' text='"Sometimes in life we are so caught up with fearing for the worst that we can forget what it means to live. To live does not simply mean to indulge in the pleasures that life offers, but to embrace all the hardship that come with realizing our own potential" -Me'/>
        </main>
)}
