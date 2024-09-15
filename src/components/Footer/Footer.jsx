import React from 'react'
import styles from "../Footer/Footer.module.css"
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.social}>
        <a href="https://www.linkedin.com/feed/" target='_blank'><FaLinkedin /></a>
        <a href="https://github.com/dashboard" target="_blank"> <FaGithub /></a>
        </div>
        <p className={styles.copyright}>Copyright © | Ankit Pandey</p>
    </div>
  )
}

export default Footer;