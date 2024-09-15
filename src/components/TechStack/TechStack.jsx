import React from "react";
import styles from "../TechStack/TechStack.module.css";
import { FaHtml5, FaJava, FaJs, FaReact } from "react-icons/fa";
import { IoLogoCss3, IoLogoNodejs, IoLogoPython } from "react-icons/io";

const TechStack = () => {
  return (
    <div className={styles.tech} id="tech">
      <h2 className={styles.heading}>Tech Stack</h2>
      <div className={styles.techcontainer}>
        <div className={styles.techitem}>
          <FaHtml5 className={styles.logo}/>
          <h3>HTML5</h3>
        </div>
        <div className={styles.techitem}>
        <IoLogoCss3 className={styles.logo}/>
        <h3>CSS</h3>
        </div>
        <div className={styles.techitem}>
        <FaJs className={styles.logo}/>
        <h3>JS</h3>
        </div>
        <div className={styles.techitem}>
        <FaReact className={styles.logo}/>
        <h3>React</h3>
        </div>
        <div className={styles.techitem}>
          <div className={styles.c}>C</div>
          
        </div>
        <div className={styles.techitem}>
        <FaJava className={styles.logo}/>
        <h3>Java</h3>
        </div>
        <div className={styles.techitem}>
        <IoLogoPython className={styles.logo}/>
        <h3>Python</h3>
        </div>
        <div className={styles.techitem}>
        <IoLogoNodejs className={styles.logo}/>
        <h3>Node.js</h3>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
