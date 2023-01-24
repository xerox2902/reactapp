import React, { useState } from 'react'

export default function Navbar() {
  const[mode,setMode]=useState("light");
  const[sty,setSty]=useState({
    backgroundColor:"red",
    border:"2px solid red"
  })
  const handleClick=()=>{
    if(mode=="light"){
      setSty({
        backgroundColor:"black",
        border:"2px solid green"

      })
      setMode("dark")
    }
    else{
      setSty({
        backgroundColor:"red",
    border:"2px solid red"

      })
      setMode("light")
    }
  }
  return (
    <div className='container' style={sty}>
    <div className="form-check form-switch">
  <input onClick={handleClick} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Game  onx</label>
</div>
    </div>
  )
}
