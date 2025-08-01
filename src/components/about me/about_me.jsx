import "./about_me.css"
import { VscGithubInverted } from "react-icons/vsc";
import { TfiYoutube } from "react-icons/tfi";

export const AboutMe = ()=>{

    return(
        <>
        <div className="container_about">
        <a href="https://github.com/Xavier13554522" className="icon_link" target="_blank"><VscGithubInverted className="icon_about"/></a>
        <a href="https://www.youtube.com/@XavierX1355" className="icon_link" target="_blank"><TfiYoutube className="icon_about"/></a>
        </div>
        </>
    )
}