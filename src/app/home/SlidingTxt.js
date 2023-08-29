'use client'

import { useEffect, useRef, useState } from "react";

export default function SlidingTxt({ style, text , className, direction, rotation, duration}) {
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
    const opts = `${direction} ${rotation} ${duration}`
    return (
        <div className={className} style={style} ref={viewportRef}>
            <p className={visible ? duration : opts }>{text}</p>    
        </div>
)} 
