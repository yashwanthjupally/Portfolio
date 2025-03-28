import React from 'react';
import java from '../../assets/java.jpg';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import js from '../../assets/js.png';
import spring from '../../assets/spring.png';
import react from '../../assets/react.png';
import sql from '../../assets/mysql.jpg';
import styles from './skillsStyle.module.css';

function Skills() {
  return (
    <section id='skills' className={styles.container}>

      <h1 className={styles.sectionTitle}>About</h1>
      <p className={styles.about}>I am Yashwanth, a graduate in Electrical Engineering and a passionate web application developer. I am proficient in building Java, Spring Boot and React-based applications. I love connecting with people and exploring new things. My hobbies include music, photography, and miniature craft. Below is my primary tech stack</p>
      <div className={styles.skillssection}>
        <a>
          <img className={styles.skillImg} src={java} alt='Java logo'/>
        </a>
        <a>
          <img className={styles.skillImg} src={html} alt='HTML logo'/>
        </a>
        <a>
          <img className={styles.skillImg} src={css} alt='CSS logo'/>
        </a>
        <a>
          <img className={styles.skillImg} src={js} alt='JavaScript logo'/>
        </a>
        <a>
          <img className={styles.skillImg} src={spring} alt='Spring logo'/>
        </a>
        <a>
          <img className={styles.skillImg} src={react} alt='React logo'/>
        </a>
        <a>
          <img className={styles.skillImg} src={sql} alt='MySQL logo'/>
        </a>
      </div>
    </section>
  );
}

export default Skills;
