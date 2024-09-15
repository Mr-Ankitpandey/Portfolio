import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import styles from "../HeroSection/Section.module.css";

const Section = ({modeValue}) => {
  console.log(modeValue);
  
  
  return (
    <div className={styles.main} id="home">
    <section className={styles.home} >
      <div className={styles.homecontent}>
        <h1>
          Hi, I'm  <span>Ankit</span>
        </h1>
        <h3 className={styles.textanimation}>
          I'm a <span></span>
        </h3>
        <p>
          I am currently pursuing my B.Tech in Computer Engineering from C.K
          Pithawala College of Engineering & Technology, Surat
        </p>

        <div className={styles.socialicons}>
          <a href="https://www.linkedin.com/feed/" target="_blank"><FaLinkedin /></a>
          <a href="https://github.com/dashboard" target="_blank"> <FaGithub /></a>
        </div>

        <div className={styles.btngroup}>
            <a href="https://www.linkedin.com/feed/" target="_blank" className={styles.btn}>Contact</a>
        </div>
      </div>

      <div className={styles.homeimg}>
        <img src={modeValue ? "/myphoto.jpg" : "/myphoto1.jpg"} alt="Ankit" />
      </div>
    </section>
    </div>
  );
};

export default Section;
