import React from 'react'
import { useState } from 'react';

export default function TextForm() {
   const[text,setText]=useState("jai mahakaal");
   const handleClick= ()=>{
      const newText= text.toUpperCase();
      setText(newText);
      console.log("isClicked");
   }
   const handleChange= (event)=>{
      setText(event.target.value);
   }  
   const speak = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
    }
  return (
   

  <div className="form-group">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea value={text} onChange={handleChange} className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
    <button onClick={handleClick} className="btn btn-primary">convert</button>
    <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
  </div>
  )
}
