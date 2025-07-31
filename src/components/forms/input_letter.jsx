import "./input_letter.css";
import React from "react";
import {Title} from "./title/title.jsx"
import { Letter } from "./letter/paragraph.jsx";
import { Poem } from "./poem/poem.jsx";
import { Preview } from "./preview/preview.jsx";
import { Background } from "./background/background.jsx";

const InputLetter = ({title,setTitle,letter,setLetter,poem,setPoem,setIcon,icon,setColorTitle,setColorLetter,setColorPoem,colorLetter,colorPoem,colorTitle,setIconLoad,colorBackground,setColorBackground}) => {
    return(<>
    <div className="container_input_letter">
        <Title title={title} setTitle={setTitle} setColorTitle={setColorTitle} colorTitle={colorTitle}/>
        <Letter letter={letter} setLetter={setLetter} setColorLetter={setColorLetter} colorLetter={colorLetter}/>
        <Poem poem={poem} setPoem={setPoem} setColorPoem={setColorPoem} colorPoem={colorPoem}/>
        <div style={{display:"flex", gap:"10px", margin:"auto"}}>
        <Preview icon={icon} setIcon={setIcon} setIconLoad={setIconLoad}/>    
        <Background colorBackground={colorBackground} setColorBackground={setColorBackground}/> 
        </div>
    </div>



    </>
)
} 


export default InputLetter;

