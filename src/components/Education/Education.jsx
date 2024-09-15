import React from "react";
import styles from "../Education/Education.module.css"

const Education = () => {
    
  return (
    <div className={styles.education} id="education">
      <h2 className={styles.heading}>Education</h2>

      <div className={styles.timelineitems}>
        <div className={styles.timelineitem}>
          <div className={styles.timelinedot}></div>
            <div className={styles.timelinedate}>2020</div>
            <div className={styles.timelinecontent}>
              <h3>High School</h3>
              <p>
                Passed my High School from Gyanjyot Vidyalaya in 2020 with 85%
              </p>
            </div>
        </div>

        <div className={styles.timelineitem}>
          <div className={styles.timelinedot}></div>
            <div className={styles.timelinedate}>2022</div>
            <div className={styles.timelinecontent}>
              <h3>Intermediate</h3>
              <p>
              Passed my Intermediate from St.Xavier's High School in 2022 with
              72%
              </p>
            </div>
        </div>

        <div className={styles.timelineitem}>
          <div className={styles.timelinedot}></div>
            <div className={styles.timelinedate}>2022 - 2026</div>
            <div className={styles.timelinecontent}>
              <h3>Graduation</h3>
              <p>
              Currently pursuing my B.tech in CSE from C.K Pithawala College of Engg. & Tech. affiliated with  Gujarat technological University
              </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
