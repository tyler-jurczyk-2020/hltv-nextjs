'use client'

import { useEffect, useRef, useState } from "react";

export default function RotatingTxt({ text , className}) {
    const rotatingTxt = useRef(null);
    const hitBox = useRef(null);
    const someText = useRef(null);
    let previous_r = 0;
    let previous_t = 0;
    let previous_b = 0;
    const callback = (entries) => {
        const [ hit_box ] = entries;
        if(hit_box.isIntersecting && (hit_box.isIntersecting - previous_r) > 0) {
            let angle, slide;
            if(previous_t > 0){ 
                angle = Math.round(hit_box.intersectionRatio*100*0.9 - 90);
                slide = Math.round(hit_box.intersectionRatio*150 - 150); 
                if(rotatingTxt.current) {
                    rotatingTxt.current.style.position = 'sticky';
                    rotatingTxt.current.style.marginLeft = `${slide}px`;
                    rotatingTxt.current.style.transform = `rotate(${angle}deg)`;
                }
            }
            else if(previous_b < 0) {
                angle = Math.round(-1*hit_box.intersectionRatio*100*0.9);
                if(angle < 0) // Corrects for minor slant sometimes when scrolling up
                    angle = 0;
                slide = Math.round(-1*hit_box.intersectionRatio*150); 
            }
            if(rotatingTxt.current) {
                    rotatingTxt.current.style.position = 'sticky';
                    rotatingTxt.current.style.marginLeft = `${slide}px`;
                    rotatingTxt.current.style.transform = `rotate(${angle}deg)`;
            }
        } 
        previous_r = hit_box.intersectionRatio;
        previous_t = hit_box.boundingClientRect.top;
        previous_b = hit_box.boundingClientRect.bottom;
    }
    // Apply useCallback to the following function for better perf?
    function thresholdGen(numSteps) {
        let arr = [];
        for(let i = 0; i <= numSteps; i++){
            arr.push(i/numSteps);
        }
        return arr;
    }
    // Dynamically place other elements upon page load
    useEffect(() => {
        if(rotatingTxt.current && someText.current) {
            someText.current.style.position = 'sticky'
            someText.current.style.top = `${58 + rotatingTxt.current.offsetHeight}px`
        }
    }, [rotatingTxt, someText])
    // Initial placement of RotatingTxt so that it's consistent with page position
    useEffect(() => {
        if(hitBox.current && rotatingTxt.current) {
            const bounding = hitBox.current.getBoundingClientRect();
            const boxTop = (bounding.top - 58);
            const ratio = (bounding.bottom - window.innerHeight)/bounding.height;
            console.log(ratio);
            let sl; 
            let ang;
            if (boxTop < 0 || bounding.bottom < window.innerHeight ) {
                ang = 0;
                sl = 0;
            }
            else {
                ang = Math.round(-1*ratio*100*0.9);
                sl = Math.round(-1*ratio*150); 
            }
            rotatingTxt.current.style.marginLeft = `${sl}px`;
            rotatingTxt.current.style.transform = `rotate(${ang}deg)`;
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
        <div className="">
            <p className={"sticky top-[58px] text-5xl w-min border -ml-[150px] -rotate-90"} ref={rotatingTxt}>{text}</p>    
            <p className="sticky" ref={someText}>some text</p>
            <div className="border w-16 h-[80vh]" ref={hitBox}></div>
        </div>
)}
