'use client'

import { useEffect, useRef, useState } from "react";

export default function RotatingTxt({ text , className}) {
    // Create ref to later be connected to text
    const rotatingTxt = useRef(null);
    const hitBox = useRef(null);
    // Callback when intersection condition met
    const callback = (entries, observer) => {
        const [ hit_box ] = entries;
        if(hit_box.isIntersecting){
            const angle = Math.round(hit_box.intersectionRatio*100*0.9 - 90);
            const slide = angle 
            if(rotatingTxt.current)
                rotatingTxt.current.style.transform = `rotate(${angle}deg)`;
                rotatingTxt.current.style.position = 'relative'
                rotatingTxt.current.style.left = `${angle}px`
        }
    }
    function thresholdGen(numSteps) {
        let arr = [];
        for(let i = 0; i <= numSteps; i++){
            arr.push(i/numSteps);
        }
        console.log(arr)
        return arr;
    }
    useEffect(() => {
        const observer = new IntersectionObserver( callback, { root: null, threshold : thresholdGen(20) })
        if(hitBox.current)
            observer.observe(hitBox.current)
        return () => {
        if(hitBox.current)
            observer.unobserve(hitBox.current)
        }
    }, [rotatingTxt, hitBox])
    return (
        <div>
            <p className={className} ref={rotatingTxt}>{text}</p>    
            <div className="border w-16 h-1/3 absolute" ref={hitBox}></div>
        </div>
)}
