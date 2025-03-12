import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Keenan Fourie</h1>
        <p className={styles.description}>
          I am a fullstack developer with more than one year's worth of experience working with React and 
          creating responsive websites. I joined a one year learnership at redAcademy where the 12 months were split into 6 months theory and the other 6 months practical.
          <br></br>
          <br></br> 
          In the first 6 months we were thought the fundamentals of programming and were also introduced to multiple programming languages for example; C#, JavaScript, HTML, JSX. 
          In our second 6 months we were introduced to the 'Live Client' phase where we worked on 'Live Client' projects.    
        </p>
        <a href="mailto:fouriekeenan9@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/dev-icon.png")}
        alt="Image of my cartoon self."
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
