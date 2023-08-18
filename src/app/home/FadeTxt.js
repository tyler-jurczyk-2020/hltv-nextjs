'use client'

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
export default function FadeTxt({color, text , className, duration, type, href}) {
    // Create ref to later be connected to text
    const viewportRef = useRef(null);
    // State of text
    const [visible, setVisible] = useState(false);
    // Callback when intersection condition met
    const callback = (entries, observer) => {
        const [ entry ] = entries;
        setVisible(entry.isIntersecting)
        if(entry.isIntersecting)
            observer.unobserve(viewportRef.current)
    }
   
    useEffect(() => {
        const observer = new IntersectionObserver( callback, { root: null, threshold : 0 })
        if(viewportRef.current) {
            observer.observe(viewportRef.current)
        }
        return () => {
            if(viewportRef.current) {
            observer.unobserve(viewportRef.current)
            }
        }
    }, [viewportRef])
    const opts = `${duration} text-neutral-900`
    const after = `${duration} ${color}`
    if (type == 'a'){
        return(
        <div className={className} ref={viewportRef}>
            <Link href={href} className={visible ? after : opts }>{text}</Link>    
        </div>)
    }
    else{
        return(
        <div className={className} ref={viewportRef}>
            <p className={visible ? after : opts }>{text}</p>
        </div>)
    }
}
