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
      <h1 className={styles.sectionTitle}>Skills</h1>
      <div className={styles.skillssection}>
        <a href='https://github.com/yashwanthjupally/Employee-Management-System' target='_blank'>
          <img className={styles.skillImg} src={java} alt='Java logo'/>
        </a>
        <a href='https://github.com/yashwanthjupally/Employee-Management-System' target='_blank'>
          <img className={styles.skillImg} src={html} alt='HTML logo'/>
        </a>
        <a href='https://github.com/yashwanthjupally/Employee-Management-System' target='_blank'>
          <img className={styles.skillImg} src={css} alt='CSS logo'/>
        </a>
        <a href='https://github.com/yashwanthjupally/Employee-Management-System' target='_blank'>
          <img className={styles.skillImg} src={js} alt='JavaScript logo'/>
        </a>
        <a href='https://github.com/yashwanthjupally/Employee-Management-System' target='_blank'>
          <img className={styles.skillImg} src={spring} alt='Spring logo'/>
        </a>
        <a href='https://github.com/yashwanthjupally/Employee-Management-System' target='_blank'>
          <img className={styles.skillImg} src={react} alt='React logo'/>
        </a>
        <a href='https://github.com/yashwanthjupally/Employee-Management-System' target='_blank'>
          <img className={styles.skillImg} src={sql} alt='MySQL logo'/>
        </a>
      </div>
    </section>
  );
}

export default Skills;
