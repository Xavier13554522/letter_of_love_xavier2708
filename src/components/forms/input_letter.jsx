import "./input_letter.css";
import React from "react";
import {Title} from "./title/title.jsx"
import { Letter } from "./letter/paragraph.jsx";
import { Poem } from "./poem/poem.jsx";
import { Preview } from "./preview/preview.jsx";

const InputLetter = ({title,setTitle,letter,setLetter,poem,setPoem,setIcon,icon,setColorTitle,setColorLetter,setColorPoem,colorLetter,colorPoem,colorTitle}) => {
    return(<>
    <div className="container_input_letter">
        <Title title={title} setTitle={setTitle} setColorTitle={setColorTitle} colorTitle={colorTitle}/>
        <Letter letter={letter} setLetter={setLetter} setColorLetter={setColorLetter} colorLetter={colorLetter}/>
        <Poem poem={poem} setPoem={setPoem} setColorPoem={setColorPoem} colorPoem={colorPoem}/>
        <Preview icon={icon} setIcon={setIcon}/>     
    </div>



    </>
)
} 


export default InputLetter;

