import { useState } from 'react'
import React,{useRef} from 'react';
import { Suspense } from 'react';
import './App.css'
import InputLetter from './components/forms/input_letter.jsx';
import Letter from './components/letter_of_love/letter.jsx';
import { Loading } from './components/loading/loading.jsx';
import { Download } from './components/letter_of_love/download.jsx';
import "./components/loading/animation.css"
import { AboutMe } from './components/about me/about_me.jsx';
import { Analytics } from "@vercel/analytics/react"

function App() {
  // State to hold the letter data
  const [title, setTitle] = useState('');
  const [letter, setLetter] = useState('');
  const [poem, setPoem] = useState('');
  const [icon,setIcon] = useState("")
  const [iconLoad,setIconLoad] = useState(false)
  const [colorTitle,setColorTitle]= useState("#000000")
  const [colorLetter,setColorLetter]= useState("#000000")
  const [colorPoem,setColorPoem]= useState("#000000")
  const [colorBackground,setColorBackground]= useState("#ffffff")
  const letterRef = useRef(null);
  return (
    <>
    <Analytics/>
    <Suspense fallback={<Loading/>}>
    <header>
      <img src="/Heart_corazón.svg" alt=""  className='img_title'/>
      <h1>Letter Of Love</h1>
    </header>

    <section>

    <InputLetter title={title} setTitle={setTitle} letter={letter} setLetter={setLetter} poem={poem} setPoem={setPoem} setIcon={setIcon} setIconLoad={setIconLoad} icon={icon} setColorTitle={setColorTitle} setColorLetter={setColorLetter} setColorPoem={setColorPoem} colorLetter={colorLetter} colorPoem={colorPoem} colorTitle={colorTitle} colorBackground={colorBackground} setColorBackground={setColorBackground}/>

    <div className='container_download' style={{}}>

    <Letter title={title} letter = {letter} poem={poem} icon={icon} colorLetter={colorLetter} colorPoem={colorPoem} colorTitle={colorTitle} colorBackground={colorBackground} ref={letterRef}/>  

    <Download letterRef={letterRef} iconLoad={iconLoad}/>

    </div>
    </section>
    <AboutMe/>
    </Suspense>
    </>
  )
}

export default App
