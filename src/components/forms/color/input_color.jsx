import React from 'react';
import "./input_color.css"

export const InputColor = ({color,setColor})=>{
    const handleColor = (ev) =>{
        setColor(ev.target.value)
    }
    const handleColorReset = () =>{
        setColor("#ffffff")
    }
    return(
    <>
    <div className='container_input_color'>
    <input type="color" name="" id="" onChange={handleColor} value={color}/>
    <button onClick={handleColorReset}>Reset</button>
    </div>
    </> 
    )
}
