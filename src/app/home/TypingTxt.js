'use client'

import { useEffect, useState } from "react"

export default function TypingTxt({ text, className, delay, spacing, style}) {
    const [{content, carriage}, setContent] = useState({content:'',carriage:0}) 
    const [pause, setPause] = useState(delay)
    useEffect(() => {
        if(carriage == text.length) {
            return
        }
        if(carriage == 0){
            setPause(spacing)    
        }
        setTimeout(() => {
            setContent({content:content+text[carriage], carriage:carriage+1})
        }, pause)
    }, [content])

    return (<p className={className} style={style}>{content}</p>
)}
