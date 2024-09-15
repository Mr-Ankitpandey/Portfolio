import React, { useState } from "react";
import { MdLightMode } from "react-icons/md";
import styles from "../Navbar/Navbar.module.css";
import { IoCloseSharp, IoMenu } from "react-icons/io5";

const Navbar = ({ mode }) => {
  const [isDarkMode, setDarkMode] = useState(true);
  mode(isDarkMode);

  const changeMode = () => {
    setDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.querySelector("body").setAttribute("data-theme", "light");
    } else {
      document.querySelector("body").setAttribute("data-theme", "root");
      setDarkMode(!isDarkMode);
    }
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.header} id="home">
      <a href="#home" className={styles.logo} id="home">
        Ankit <span>Pandey</span>
      </a>
      <div
        className={`${styles.navbar} ${isMenuOpen && styles.menuopen}`}
        onClick={() => setIsMenuOpen(false)}
      >
        <a href="#home" className={styles.active}>
          Home
        </a>
        <a href="#education">Education</a>
        <a href="#tech">Tech stack</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
      <MdLightMode className={styles.mode} onClick={changeMode} />
      <div onClick={toggleMenu}>
        {isMenuOpen ? (
          <IoCloseSharp className={styles.cross} />
        ) : (
          <IoMenu className={styles.menu} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
