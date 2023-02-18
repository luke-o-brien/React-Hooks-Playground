import React from "react"
import { useRef, useState } from "react"

function UserefSecond() {

  const [visible, setvisible] = useState(false)

  const togglebutton = useRef()
  const list = useRef()

  function onClickToggle() {
    setvisible(!visible)
    console.log(togglebutton.current)
    console.log(list.current)
  }
  return (
    <>
    <div>
      <h3>Secondary Useref</h3>
    </div>
    <div>
      <button ref={togglebutton} onClick={onClickToggle}>Toggle Button</button>
      { visible ? <div ref={list}>
        <p>Item 1</p>
        <p>Item 2</p>
        <p>Item 3</p>
      </div> : null }
    </div>

    </>
  )
}

export default UserefSecond