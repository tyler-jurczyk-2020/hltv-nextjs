import Link from "next/link"

export default function({main, className, text, elements}) {
    let counter = -1;
    return(
    <div className="grid group">
        <Link href={main} className={className}>{text}</Link>
        <div className="justify-self-center translate-y-[58px] w-52 h-0 absolute bg-neutral-900 group-hover:h-52 duration-700 overflow-hidden flex flex-col">
            {elements.map((val) => (<Link key={counter--} href={val[1]} className="text-center border border-neutral-800 p-4">{val[0]}</Link>))}
        </div>
    </div>
)}
