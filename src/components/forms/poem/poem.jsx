import { resApi } from "../../useFetch"
import { InputColor } from "../color/input_color"
const apiData = resApi()

export const Poem = ({poem,setPoem,setColorPoem,colorPoem})=>{
    const data = apiData.readStatus()

    const handlePoem = (ev)=>{
        setPoem(ev.target.value)
    }
    const handleGenerate = (ev)=>{
        const random = Math.floor(Math.random() * 80)
        setPoem(data[random].lines) 
    }   
    const handleClear =()=>{
        setPoem("")
    }
    return(
        <>
        <h3>Write a Poem:</h3>
        <div className="container_input_flex">
            <textarea name="" id="" className="input_poem input_text" placeholder="Write a poem..." value={poem} onChange={handlePoem}></textarea>
            <InputColor color={colorPoem} setColor={setColorPoem}/>
        </div>
            <div className="container_input_poem">
            <button onClick={handleGenerate}>Generate</button>
            <button onClick={handleClear}>Clean</button>
            </div>
        </>
    )
    }
