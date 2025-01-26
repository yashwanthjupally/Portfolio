import React from 'react'
import styles from './ProjectsStyles.module.css'
import tinder from '../../assets/Tinder-AI.png'
import dine from '../../assets/Devdine.png'
import employee from '../../assets/Employee.png'
import motivation from '../../assets/motivation.png'
import weather from '../../assets/weather.png'
import snake from '../../assets/snake.png'
import Projectcard from '../../common/Projectcard'


function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
			<div className={styles.projectContainer}>
				<Projectcard 
					src={tinder} 
					link='https://github.com/yashwanthjupally/tinder-ai'
					h3='Tinder-AI' 
					p='AI-powered dating application'
				/>
				<Projectcard 
					src={dine} 
					link='https://github.com/yashwanthjupally/dev-din-in'
					h3='Dev-Din-In' 
					p='A frontend application'
				/>
				<Projectcard 
					src={employee} 
					link='https://github.com/yashwanthjupally/Employee-Management-System'
					h3='Employee Management System' 
					p='A full stack application that manages employee details'
				/>
				<Projectcard 
					src={motivation} 
					link='https://github.com/yashwanthjupally/daily-motivation'
					h3='Daily Motivation' 
					p='Fetches a motivational quote each time'
				/>
				<Projectcard 
					src={weather} 
					link='https://github.com/yashwanthjupally/Weather-App'
					h3='Weather-App' 
					p='A Weather Application'
				/>
				<Projectcard 
					src={snake} 
					link='https://github.com/yashwanthjupally/Snake-Game'
					h3='Snake-Game' 
					p='A classic Snake-Game'
				/>
			</div>
    </section>
  )
}

export default Projects

