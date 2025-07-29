import { useState } from 'react'
import React,{useRef} from 'react';
import { Suspense } from 'react';
import './App.css'
import InputLetter from './components/forms/input_letter.jsx';
import Letter from './components/letter_of_love/letter.jsx';
import { resApi } from './components/useFetch.jsx';

const apiData = resApi()
function App() {
  // State to hold the letter data
  const [title, setTitle] = useState('');
  const [letter, setLetter] = useState('');
  const [poem, setPoem] = useState('');
  const [icon,setIcon] = useState("")
  const [colorTitle,setColorTitle]= useState("#ffffff")
  const [colorLetter,setColorLetter]= useState("#ffffff")
  const [colorPoem,setColorPoem]= useState("#ffffff")
  const data = apiData.readStatus()
  return (
    <>
    <InputLetter title={title} setTitle={setTitle} letter={letter} setLetter={setLetter} poem={poem} setPoem={setPoem} setIcon={setIcon} icon={icon} setColorTitle={setColorTitle} setColorLetter={setColorLetter} setColorPoem={setColorPoem} colorLetter={colorLetter} colorPoem={colorPoem} colorTitle={colorTitle}/>
    <Letter title={title} letter = {letter} poem={poem} icon={icon} colorLetter={colorLetter} colorPoem={colorPoem} colorTitle={colorTitle} />  
    </>
  )
}

export default App
