import { InputColor } from "../color/input_color";
export const Letter = ({letter,setLetter,setColorLetter,colorLetter})=>{
    const handleLetter = (ev) => {
      setLetter(ev.target.value);
    }
return(
<>
    <h3>Write You Letter Of Love:</h3>
    <div className="container_input_flex">
            <textarea name="" id="" className="input_text" placeholder="Write the letter of love..." value={letter} onChange={handleLetter}></textarea>
            <InputColor color={colorLetter} setColor={setColorLetter}/>
    </div>
</>
)
}