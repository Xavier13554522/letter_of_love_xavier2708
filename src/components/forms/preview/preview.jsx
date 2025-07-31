import { useRef } from "react";
import React from "react";
export const Preview = ({icon,setIcon,setIconLoad})=>{
    const prevIconRef = React.useRef(null);
    const handleCapture = (ev) => {
      const files = ev.target.files[0]
      if(files){
        const read = new FileReader();
        read.onloadend = ()=>{
            setIcon(read.result)
            setIconLoad(false)
        }
        read.readAsDataURL(files)
      }
    }
    const handle_clean = (ev)=>{
        setIcon("")
    }
    return(
        <>
    <div className="container_input_img">  

            {icon !== "" ? <img src={icon} alt="Preview" className="img_preview" onLoad={() => setIconLoad(true)}/> : <h3>Preview...</h3>}
            <div className="container_input_preview">
            <input type="file" name="" id="uploadImage" onChange={handleCapture} accept="image/*"/>
            <label htmlFor="uploadImage">Upload</label>
            <button onClick={handle_clean}>Clean</button>
            </div>
            </div>
        </>
    )
}