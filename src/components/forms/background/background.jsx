import { InputColor } from "../color/input_color";


export const Background = ({colorBackground,setColorBackground})=>{

 return(
    <>
    <div className="container_input_background">
    <h3 style={{textAlign:"center"}}>Background Color:</h3>
    <InputColor color={colorBackground} setColor={setColorBackground}/>
    </div>
    </>
 )
}