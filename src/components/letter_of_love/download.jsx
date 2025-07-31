import { cache, useState } from 'react'
import React,{useRef} from 'react';
import { toPng } from 'html-to-image';
import Letter from './letter';

export const Download = ({letterRef,iconLoad})=>{
        const handleDownload = () =>{
            if(!letterRef.current || !iconLoad) return;

        toPng(letterRef.current,{cacheBust:true,pixelRatio:2 })
        .then((dataUrl) =>{
            const link = document.createElement("a")
            link.download = "letter_of_love.png"
            link.href = dataUrl;
            link.click();
        })
        .catch((error) =>{
            console.error("Error in make the link")
        })
        }
    return(
        <>
            <button onClick={handleDownload} className='button_download'>Download</button>
        </>
    )
}
