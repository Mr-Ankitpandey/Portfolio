import React from 'react'
import { TiTick } from 'react-icons/ti'
import styles from "../Email/Email.module.css"

const Email = () => {
  return (
    <div className={styles.main}>
        <div className={styles.email}>
            <p>Message sent Successfully</p>
            <TiTick className={styles.tick}/>
        </div>
    </div>
  )
}

export default Email;