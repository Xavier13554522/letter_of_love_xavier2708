import React from 'react';
import './letter.css';

const Letter = ({title,letter,poem,icon,colorTitle,colorLetter,colorPoem})=>{
    title = title === "" ? "Title of the letter of love..." : title;
    letter = letter === "" ? "Write you letter love..." : letter;
    poem = poem === "" ? "Write a poem(optional)..." : poem;
    return(
        <>
        <div className="container_letter">
        <h2 className="title"style={{color:colorTitle}}>{title}</h2>
        <p className="paragraph"style={{color:colorLetter}}>{letter}</p>
        <p className="poem"style={{color:colorPoem}}>{poem}</p>
        <div className='container_img_letter'>
        {icon !== "" ? <img src={icon} className="img_letter"/> : <h3>Photo...</h3>}
        </div>
        </div>
        </>
    )
}

export default Letter