import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <div className={styles.container}>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Professional portfolio showcasing my work and experience" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <nav className={styles.nav}>
          <button 
            className={`${styles.navLink} ${activeSection === 'about' ? styles.active : ''}`}
            onClick={() => setActiveSection('about')}
          >
            About Me
          </button>
          <button 
            className={`${styles.navLink} ${activeSection === 'education' ? styles.active : ''}`}
            onClick={() => setActiveSection('education')}
          >
            Education
          </button>
          <button 
            className={`${styles.navLink} ${activeSection === 'experience' ? styles.active : ''}`}
            onClick={() => setActiveSection('experience')}
          >
            Experience
          </button>
          <button 
            className={`${styles.navLink} ${activeSection === 'projects' ? styles.active : ''}`}
            onClick={() => setActiveSection('projects')}
          >
            Projects
          </button>
          <button 
            className={`${styles.navLink} ${activeSection === 'contact' ? styles.active : ''}`}
            onClick={() => setActiveSection('contact')}
          >
            Contact
          </button>
        </nav>
      </header>

      <main className={styles.main}>
        {activeSection === 'about' && (
          <section className={styles.section}>
            <h1>About Me</h1>
            <div className={styles.aboutContent}>
              <div className={styles.profileImage}>
                {/* Add your profile image here */}
                <div className={styles.imagePlaceholder}></div>
              </div>
              <div className={styles.aboutText}>
                <h2>Hi, I'm [Your Name]</h2>
                <p>
                  I'm a passionate [Your Profession] with experience in [your skills]. 
                  I love creating meaningful solutions and always strive to learn and grow in my field.
                </p>
                <div className={styles.skills}>
                  <h3>Skills</h3>
                  <div className={styles.skillsGrid}>
                    <span>HTML/CSS</span>
                    <span>JavaScript</span>
                    <span>React</span>
                    <span>Node.js</span>
                    <span>Git</span>
                    <span>UI/UX</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'education' && (
          <section className={styles.section}>
            <h1>Education</h1>
            <div className={styles.timeline}>
              <div className={styles.timelineItem}>
                <h3>Degree Name</h3>
                <p className={styles.timelineDate}>Year - Year</p>
                <p>University Name, Location</p>
                <p>Relevant coursework or achievements</p>
              </div>
              <div className={styles.timelineItem}>
                <h3>High School Diploma</h3>
                <p className={styles.timelineDate}>Year - Year</p>
                <p>School Name, Location</p>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'experience' && (
          <section className={styles.section}>
            <h1>Experience</h1>
            <div className={styles.experienceList}>
              <div className={styles.experienceItem}>
                <h3>Job Title</h3>
                <p className={styles.company}>Company Name | Location</p>
                <p className={styles.duration}>Month Year - Present</p>
                <ul className={styles.responsibilities}>
                  <li>Responsibility or achievement 1</li>
                  <li>Responsibility or achievement 2</li>
                  <li>Responsibility or achievement 3</li>
                </ul>
              </div>
              <div className={styles.experienceItem}>
                <h3>Previous Position</h3>
                <p className={styles.company}>Previous Company | Location</p>
                <p className={styles.duration}>Month Year - Month Year</p>
                <ul className={styles.responsibilities}>
                  <li>Key responsibility or achievement</li>
                  <li>Another key point</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'projects' && (
          <section className={styles.section}>
            <h1>Projects</h1>
            <div className={styles.projectsGrid}>
              <div className={styles.projectCard}>
                <h3>Project Title</h3>
                <p>Brief description of the project, what it does, and the technologies used.</p>
                <div className={styles.projectLinks}>
                  <a href="#" target="_blank" rel="noopener noreferrer">Live Demo</a>
                  <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
                <div className={styles.techStack}>
                  <span>React</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                </div>
              </div>
              {/* Add more project cards as needed */}
            </div>
          </section>
        )}

        {activeSection === 'contact' && (
          <section className={`${styles.section} ${styles.contactSection}`}>
            <h1>Get In Touch</h1>
            <p>Feel free to reach out for job opportunities or just to say hi!</p>
            
            <form className={styles.contactForm}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              <button type="submit" className={styles.submitBtn}>Send Message</button>
            </form>

            <div className={styles.socialLinks}>
              <a href="mailto:your.email@example.com" target="_blank" rel="noopener noreferrer">
                <span>✉️</span> your.email@example.com
              </a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                <span>🔗</span> LinkedIn
              </a>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <span>🐙</span> GitHub
              </a>
            </div>
          </section>
        )}
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}
