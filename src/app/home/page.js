import Link from "next/link";
import Image from "next/image";
import SlidingTxt from "./SlidingTxt";
import TypingTxt from "./TypingTxt";

export default async function Home() {
    // classNames
    const nav_bar = "p-nav-e border border-transparent hover:border-white"
    // Get JSON Data
    const resumeReq = await fetch("http://localhost:3000/home/api", {cache: 'no-store'});
    const resume = await resumeReq.json(); 
    return (
        <main>
            <menu className="z-50 fixed flex flex-row justify-center items-center bg-neutral-900 border-b-2 border-black w-screen h-nav-b]">
                <Link className={nav_bar} href="#home">Home</Link>
                <Link className={nav_bar} href="#about">About</Link>
                <Link className={nav_bar} href={"#portfolio"}>Portfolio</Link>
                <Link className={nav_bar} href="#contact">Contact</Link>
            </menu>
            <div className="h-screen overflow-y-auto overflow-x-hidden" style={{perspective: '1px'}}>
                <div className="flex flex-col bg-[url('../../public/me_crop.jpg')] h-[140vh] bg-cover bg-no-repeat bg-center bg-fixed place-content-center text-center" style={{transform: 'translateZ(-1px) scale(2)'}}>
                </div>

                    <TypingTxt className="text-6xl font-semibold absolute top-[50vh] w-screen text-center border" style={{transform: 'translateZ(0)'}} text='Tyler Jurczyk' delay={0} spacing={200}/>

                    <TypingTxt className="text-3xl absolute top-[60vh] w-screen text-center border" style={{transform: 'translateZ(0)'}} text="Building What's Next" delay={2500} spacing={200}/>
            </div>
            <div className="min-h-screen grid grid-cols-3 w-5/6 mx-auto -mt-nav-b pt-nav-b" id="about">
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
                <p className='col-span-3 text-2xl text-center self-center'>"I am a Computer Engineer from the University of Illinois Urbana-Champaign, and I am in the business of building products oriented towards the future. This website that are you are currently looking at was built using the frameworks/language highlighted above. Scroll furthur to see to learn a little more about me."</p>
            </div>
            <div className="grid min-h-screen content-start -mt-nav-b pt-nav-b" id="portfolio">
    {/*<RotatingTxt className="z-0 text-5xl border w-min" text="Courses" content={["test1","test2", "test3"]} contentStyle="p-2 sticky top-[100px]" />*/}
                <SlidingTxt className="text-5xl text-center p-12 pb-8" text="Recent Courses" direction="translate-x-[100vw]" duration="duration-1000"/>
                {resume.courses.map((item, index) => (<SlidingTxt className="text-2xl p-8 text-center" text={item} direction="-translate-x-[100vw]" duration="duration-1000"/>))} 
            </div>
        </main>
)}
