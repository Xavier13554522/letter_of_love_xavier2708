import { InputColor } from "../color/input_color"
export const Title = ({title,setTitle,setColorTitle,colorTitle})=>{

    const handleTitle = (ev) =>{
        setTitle(ev.target.value)
    }
    return(
        <>
        <h3>Write The Title Of The Letter:</h3>
        <div className="container_input_flex">
            <input type="text" placeholder="Write the name letter..." className="input_title" value={title} onChange={handleTitle}/>
        <InputColor color={colorTitle} setColor={setColorTitle} />
        </div>
        </>
    )
}