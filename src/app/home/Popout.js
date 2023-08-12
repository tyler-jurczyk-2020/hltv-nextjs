import Link from "next/link"

export default function({main, className, text, elements}) {
    return(
    <div className="grid group">
        <Link href={main} className={className}>{text}</Link>
        <div className="justify-self-center translate-y-[58px] w-52 h-0 absolute bg-neutral-900 group-hover:h-52 duration-700 overflow-hidden">
            {elements.map((val) => (<p>{val[0]}</p>))}
        </div>
    </div>
)}
