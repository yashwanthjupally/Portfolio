import React from 'react'
import styles from './ProjectsStyles.module.css'
import tinder from '../../assets/Tinder-AI.png'
import dine from '../../assets/Devdine.png'
import employee from '../../assets/Employee.png'
import motivation from '../../assets/motivation.png'
import retail from '../../assets/retail.png'
import Projectcard from '../../common/Projectcard'


function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
			<div className={styles.projectContainer}>

				<Projectcard 
					src={retail} 
					link='https://github.com/yashwanthjupally/Retail-Management'
					h3='Retail Management' 
					p=' A robust backend for a Retail Management system'
				/>

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
					h3='Employee Management' 
					p='A full stack application that manages employee details'
				/>
				<Projectcard 
					src={motivation} 
					link='https://github.com/yashwanthjupally/daily-motivation'
					h3='Daily Motivation' 
					p='Fetches a motivational quote each time'
				/>
				
				
			</div>
    </section>
  )
}

export default Projects

