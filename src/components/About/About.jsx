import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                When it comes to Front-End I am always learning, there is so much to cover
                and it is never ending which I enjoy. When I first started working with React.JS
                I found it very difficult to understand but with continuous upskilling I started 
                to understand the basics and could see the paterns and instead of getting overwelmed
                about having to learn a new skill, I embraced it!
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
               In terms of Back-End development I would say that I focused more on back-end then front-end 
               but my goal is to become proficient in both, front-end and back-end. I mainly worked with on C#
               on the back-end. I always try to implement OOP (Object Orientated Programming) in my code to make 
               it more readable, reusable and easy to understand. 
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
