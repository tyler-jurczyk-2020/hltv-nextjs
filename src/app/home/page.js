import Link from "next/link";
import Image from "next/image";
import SlidingTxt from "./SlidingTxt";
import TypingTxt from "./TypingTxt";
import Popout from "./Popout";
import FadeTxt from "./FadeTxt";

export default async function Home() {
    // classNames
    const nav_bar = "p-nav-e border border-transparent hover:border-white"
    const menu_items = [
        ["Recent Courses", "#portfolio"],
        ["Projects", "#projects"]
    ];
    // Get JSON Data
    const resumeReq = await fetch("http://localhost:3000/home/api", {cache: 'no-store'});
    const resume = await resumeReq.json(); 
    return (
    <main>
        <menu className="z-50 fixed flex flex-row justify-center items-center bg-neutral-900 border-b-2 border-black w-screen h-nav-b]">
            <Link className={nav_bar} href="#home">Home</Link>
            <Link className={nav_bar} href="#about">About</Link>
            <Popout main={'#portfolio'} className={nav_bar} text="Portfolio" elements={menu_items}/>
            <Link className={nav_bar} href="#contact">Contact</Link>
        </menu>
        <div className="grid place-content-center scroll-smooth h-screen overflow-y-auto overflow-x-hidden" style={{perspective: '1px'}}>
            <div className="absolute top-0"id="home"></div>
            <div className="absolute top-0 bottom-0 right-0 left-0 flex flex-col bg-[url('../../public/me_crop.jpg')] h-[150vh] bg-cover bg-no-repeat bg-center bg-fixed place-content-center text-center" style={{transform: 'translateZ(-1px) scale(2)'}} >
            </div>
            <TypingTxt className="text-6xl font-semibold w-screen text-center" style={{transform: 'translateZ(0)'}} text='Tyler Jurczyk' delay={0} spacing={200}/>
            <TypingTxt className="text-3xl w-screen text-center" style={{transform: 'translateZ(0)'}} text="Building What's Next" delay={2500} spacing={200}/>
            <div className="absolute top-[150vh] bg-neutral-900">
                <div className="mb-28 h-screen grid grid-cols-3 w-5/6 mx-auto -mt-nav-b pt-nav-b" id="about">
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
                    {resume.courses.map((item, index) => (<SlidingTxt key={index} className="text-2xl p-8 text-center" text={item} direction="-translate-x-[100vw]" duration="duration-1000"/>))} 
                </div>
                <div id='projects' className="min-h-screen">
                {/* Placeholder for projects*/}     
                </div>
                <div className="relative h-[calc(100vh-58px)]">
                    <FadeTxt className="text-5xl text-center p-12" text="Contact Info & Social" duration="duration-[3s]"/>
                    <div className="absolute top-0 bottom-0 right-0 left-0 flex flex-col justify-center -translate-y-[58px]">
                        <FadeTxt type="a" className="text-4xl m-12 w-min whitespace-nowrap self-center underline" color="text-blue-300" href="https://github.com/tyler-jurczyk-2020/" target="_blank" text="GitHub Profile" duration="duration-[3s]"/>
                        <FadeTxt type="a" className="text-4xl m-12 w-min whitespace-nowrap self-center underline" color="text-blue-300" href="https://www.linkedin.com/in/tylerjurczyk/" target="_blank" text="LinkedIn Profile" duration="duration-[3s]"/>
                        <div className="flex flex-row ml-auto mr-auto">
                            <FadeTxt type="p" className="text-4xl text-center py-12 whitespace-pre" text="Email: " color="text-white" duration="duration-[3s]"/>
                            <FadeTxt href="mailto:tylerjurczyk2020@gmail.com" type="a" className="text-4xl text-center py-12 underline" text="tylerjurczyk2020@gmail.com" color="text-blue-300" duration="duration-[3s]"/>
                        </div>
                        <div className="flex flex-row ml-auto mr-auto">
                            <FadeTxt type="p" className="text-4xl text-center py-12 whitespace-pre" text="Phone: " color="text-white" duration="duration-[3s]"/>
                            <FadeTxt href="tel:8478945739" type="a" className="text-4xl text-center py-12 underline" text="(847)-894-5739" color="text-blue-300" duration="duration-[3s]"/>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </main>
)}
