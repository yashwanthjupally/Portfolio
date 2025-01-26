import React from 'react';
import styles from './HeroStyles.module.css';
import heroImg from '../../assets/Yash.jpg';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import cv from '../../assets/Yashwanth Jupally - Resume SE.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;

  return (
    <>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.navLogo}>
          <h1>YJ</h1>
        </div>
        <ul className={styles.navLinks}>
          <li><a href="#Hero">Home</a></li>
          <li><a href="#skills">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className={styles.themeToggle}>
          <img
            src={themeIcon}
            alt="Toggle theme"
            onClick={toggleTheme}
            className={styles.themeIcon}
          />
        </div>

      </nav>
      <section id="Hero" className={styles.container}>



        {/* Hero Section */}
        <div className={styles.colorModeContainer}>
          <img className={styles.hero} src={heroImg} alt="profile picture" />
        </div>
        <div className={styles.info}>
          <h1>Yashwanth <br /> Jupally</h1>
          <h2>Software Engineer</h2>
          <span>
            <a href="https://linkedin.com/in/yashwanthjupally" target='_blank' rel="noopener noreferrer">
              <img src={linkedinIcon} alt="linkedin icon" />
            </a>
            <a href="https://github.com/yashwanthjupally" target='_blank' rel="noopener noreferrer">
              <img src={githubIcon} alt="github icon" />
            </a>
            <a href="https://x.com/Yashwanth_j23" target='_blank' rel="noopener noreferrer">
              <img src={twitterIcon} alt="twitter icon" />
            </a>
          </span>
          <a href={cv} download>
            <button className='hover'>
              Resume
            </button>
          </a>
        </div>
      </section>
    </>
  );
}

export default Hero;
