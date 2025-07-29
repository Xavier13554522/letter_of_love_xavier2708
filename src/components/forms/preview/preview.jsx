export const Preview = ({icon,setIcon})=>{
    const handleCapture = (ev) => {
      const files = ev.target.files[0]
      if(files){
      const url = URL.createObjectURL(files)
      setIcon(url)
      }
    }
    return(
        <>
    <div className="container_input_img">  

            {icon !== "" ? <img src={icon} alt="View Preview" className="img_preview"/> : <h3>Preview...</h3>}

            <input type="file" name="" id="uploadImage" onChange={handleCapture} accept="image/*"/>
            <label htmlFor="uploadImage">Upload Photo</label>
            </div>
        </>
    )
}