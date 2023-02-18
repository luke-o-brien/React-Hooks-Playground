import React from "react"
import { useState, useRef } from "react"
import UserefBasics from "./subcomponents/userefbasics"
import UserefSecond from "./subcomponents/userefSecond.js"
import styles from "./ReactUseRef.module.scss"

function ReactUseRef() {

  const [pageActive, setPageActive] = useState("Description")

  return (
    <>
    <div>
      <h2>UseRef</h2>
    </div>
    <hr/>
    <ul className={styles.miniMenu}>
      <li className={styles.miniMenuButton} onClick={(e) => {setPageActive(e.target.innerText)}}>Description</li>
      <li className={styles.miniMenuButton} onClick={(e) => {setPageActive(e.target.innerText)}}>Basics</li>
      <li className={styles.miniMenuButton} onClick={(e) => {setPageActive(e.target.innerText)}}>Second</li>
    </ul>
    {pageActive === "Basics" && <UserefBasics />}
    {pageActive === "Second" && <UserefSecond />}

    </>
  )
}

export default ReactUseRef