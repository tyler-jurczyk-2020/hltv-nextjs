'use client'

import { useEffect, useRef, useState } from "react";

export default function DynamicBg({ className, text, content, contentStyle }) {
    const rotatingTxt = useRef(null);
    const hitBox = useRef(null);
    const someText = useRef(null);
    let previous_t = 0;
    let previous_b = 0;
    const defaultColor = 1513239;
    const gRate = 50 
    const callback = (entries) => {
        const [ hit_box ] = entries;
        if(hit_box.isIntersecting) {
        console.log(`previous_t: ${previous_t}`)
        console.log(`previous_b: ${previous_b}`)
            let color;
            if(previous_t > 0) 
                color = Math.round(hit_box.intersectionRatio*gRate);
            else if(previous_b < 0)
                color = Math.round(-1*hit_box.intersectionRatio*gRate);
        const hex = (defaultColor + color).toString(16)
        rotatingTxt.current.style.backgroundColor = `#${hex}`;    

        previous_t = hit_box.boundingClientRect.top;
        previous_b = hit_box.boundingClientRect.bottom;
        }
}
    // Apply useCallback to the following function for better perf?
    function thresholdGen(numSteps) {
        let arr = [];
        for(let i = 0; i <= numSteps; i++){
            arr.push(i/numSteps);
        }
        return arr;
    }
    // Initial placement of RotatingTxt so that it's consistent with page position
    useEffect(() => {
        if(hitBox.current && rotatingTxt.current) {
            const bounding = hitBox.current.getBoundingClientRect();
            const boxTop = (bounding.top);
            const ratio = (window.innerHeight - bounding.top)/bounding.height;
            let colour;
            if (bounding.bottom < window.innerHeight) {
                colour = gRate; 
            }
            else if (boxTop > window.innerHeight) {
                colour = 0; 
            }
            else {
                colour = Math.round(1*ratio*gRate);
            }
            const hex = (defaultColor + colour).toString(16)
            rotatingTxt.current.style.backgroundColor = `#${hex}`;

            }
    },[rotatingTxt, hitBox])
    useEffect(() => {
        const observer = new IntersectionObserver( callback, { root: null, threshold : thresholdGen(50) })
        if(hitBox.current)
            observer.observe(hitBox.current)
        return () => {
        if(hitBox.current)
            observer.unobserve(hitBox.current)
        }
    }, [hitBox])
    return (
        <div className="grid">
            <p className={"justify-self-center z-10 sticky top-[58px] text-5xl w-min border bg-neutral-900"} ref={rotatingTxt}>{text}</p>    
            <p className="z-0 sticky p-4" ref={someText}>some text</p>
            <div className="border w-16 h-[80vh]" ref={hitBox}></div>
        </div>
)}
