import React from 'react';
import java from '../../assets/java-logo.png';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import js from '../../assets/js.png';
import spring from '../../assets/spring.png';
import react from '../../assets/react.png';
import sql from '../../assets/database.png';
import py from '../../assets/python.png';
import styles from './skillsStyle.module.css';

function Skills() {
  return (
    <section id='skills' className={styles.container}>

      <h1 className={styles.sectionTitle}>About Me</h1>
      <p className={styles.about}>Hi, I’m Yashwanth an Electrical Engineering graduate and a self-taught programmer who’s passionate about creating clean, efficient, and user-friendly web applications.

      I specialize in Java and Spring Boot for backend development, with hands-on experience in REST APIs, microservices, and databases like MySQL and MongoDB. On the frontend, I love building responsive, interactive interfaces using HTML, CSS, JavaScript, and React.

      I’m constantly exploring new technologies, solving real-world problems, and collaborating with others. Outside of coding, I enjoy music, photography, and chess.</p>
      <div className={styles.skillssection}>
        <a>
          <img className={styles.skillImg} src={java} title="Java" alt='Java logo'/>
        </a>

        <a>
          <img className={styles.skillImg} src={spring} title="Spring Boot" alt='Spring logo'/>
        </a>
        
        <a>
          <img className={styles.skillImg} src={html} title="HTML" alt='HTML logo'/>
        </a>
        <a>
          <img className={styles.skillImg} src={css} title="CSS" alt='CSS logo'/>
        </a>
        <a>
          <img className={styles.skillImg} src={js} title="JavaScript" alt='JavaScript logo'/>
        </a>
     
        <a>
          <img className={styles.skillImg} src={react} title="React" alt='React logo'/>
        </a>

           <a>
          <img className={styles.skillImg} src={py} title="Python" alt='Python logo'/>
        </a>

        <a>
          <img className={styles.skillImg} src={sql} title="Databases" alt='MySQL logo'/>
        </a>
      </div>
    </section>
  );
}

export default Skills;
