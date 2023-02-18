import React from "react"
import { useRef, useState } from "react"

function UserefBasics() {

  const togglebutton = useRef()
  const inputs = useRef()

  function onSubmit() {
  inputs.current.value ? console.log("submitted") : inputs.current.focus()
  }
  return (
    <>
    <div>
      <h3>Focus and DOM manipulation</h3>
    </div>
    <div>
      <form style={{"display": "flex" , "flexDirection" : "column", "width": "50vw", "margin": "auto", "gap": "20px", marginBottom: "20px"}}>
        <input ref={inputs} type="text"></input>
        <input ref={inputs} type="text"></input>
      </form>
      <button ref={togglebutton} onClick={onSubmit}>Submit</button>
    </div>

    </>
  )
}

export default UserefBasics