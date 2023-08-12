import Link from "next/link"

export default function({main, className, text}) {
    

    return(
    <div className="grid group">
        <Link href={main} className={className}>{text}</Link>
        <div className="justify-self-center translate-y-[58px] w-52 h-52 absolute bg-red-500 hidden group-hover:block"></div>
    </div>

        
)}
