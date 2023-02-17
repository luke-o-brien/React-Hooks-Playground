import React from "react"
import { Link } from "react-router-dom"
import styles from './Navbar.module.scss'

function Navbar() {
  return (
  <>
    <div className={styles.Navcontainer}>
        <ul className={styles.LinkContainer}>
          <li>
            <Link to='/' className={styles.Link}>
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link to='/useref' className={styles.Link}>
              <p>UseRef</p>
            </Link>
          </li>
          <li>
            <Link to='/usecontext' className={styles.Link}>
              <p>UseContext</p>
            </Link>
          </li>
        </ul>
      </div>
  </>
  )
}

export default Navbar