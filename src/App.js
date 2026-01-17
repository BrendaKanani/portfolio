// src/App.js
import React, { useState } from 'react';
import './App.css';
import { projectsData } from './data/projects';
import profile from './images/brenda-profile.jpg';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="app">
      
      {/* --- NAVIGATION BAR --- */}
      <nav className="navbar">
        <div className="logo">Brenda Kanani</div>
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </div>
        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </div>
      </nav>

      {/* --- HERO SECTION (New Structure - Centered on BG Image) --- */}
      <section id="home" className="hero section">
        <div className="container">
          <img src ={profile} alt='Profile' className='hero-avatar' />
          <h1>Brenda Kanani</h1>
          <h2>Computer Science | System Architecture | React</h2>
          <a href="#projects" className="btn-elegant">View Selected Work</a>
        </div>
      </section>

      <div className="container">
        
        {/* --- ABOUT SECTION (New Structure - Split View like Ref Image 3) --- */}
        <section id="about" className="section">
          <div className="about-split">
            <div className="about-photo-container">
              {/* Square Photo */}
              <img src={profile} alt="Profile" className="photo-square" />
            </div>
            <div className="about-text">
              <h3>The Ethical Technologist</h3>
              <p>
                I believe that the best technology isn’t just efficient—it’s responsible. 
                As a Computer Science student at <strong>Dedan Kimathi University of Technology</strong>, 
                I am driven by a curiosity that spans the entire stack.
              </p>
              <p>
                Whether I am simulating <strong>8051 microcontrollers</strong>, building responsive 
                front-ends with <strong>React</strong>, or hiking Mount Kenya with the 
                <em> Climb to Educate Club</em>, I approach every challenge with resilience and strategy.
              </p>
            </div>
          </div>
        </section>

        {/* --- SKILLS SECTION (Grid Structure retained) --- */}
        <section id="skills" className="section">
          <h3 className="section-title">Technical Expertise</h3>
          <div className="skills-grid">
            <div className="skill-category">
              <h4>Frontend & Design</h4>
              <div className="skill-list">
                <span>React.js / Modern JS</span>
                <span>CSS3 / Responsive Layouts</span>
                <span>Canva (UI/UX Prototyping)</span>
                <span>Figma Basics</span>
              </div>
            </div>
            
            <div className="skill-category">
              <h4>Systems & Backend</h4>
              <div className="skill-list">
                <span>8051 Microcontroller Arch.</span>
                <span>Embedded C / Assembly</span>
                <span>Node.js Basics</span>
                <span>System Architecture Design</span>
              </div>
            </div>

            <div className="skill-category">
              <h4>Core Concepts</h4>
              <div className="skill-list">
                <span>AI Safety & Professional Ethics</span>
                <span>UML & Technical Documentation</span>
                <span>Git Version Control</span>
                <span>RESTful API Concepts</span>
              </div>
            </div>
          </div>
        </section>

        {/* --- PROJECTS SECTION (Grid Structure retained) --- */}
        <section id="projects" className="section">
          <h3 className="section-title">Selected Works</h3>
          <div className="projects-grid">
            {projectsData.map((project) => (
              <div key={project.id} className="project-card">
                <span className="tag">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map((t, index) => (
                    <span key={index} className="tech-badge">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- CONTACT SECTION (New Structure - Arched Photo & Columns like Ref Image 2) --- */}
        <section id="contact" className="section contact-structure">
          <h3 className="section-title" style={{marginBottom: '1rem'}}>Work With Me</h3>
          
          {/* Arched Photo */}
          <div className="contact-arch-container">
             <img src={profile} alt="Contact Profile" className="photo-arch" />
          </div>

          <div className="contact-columns">
            <div className="contact-col">
              <h4>Connect Professionally</h4>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">LinkedIn Profile ↗</a>
            </div>
            <div className="contact-col">
               <h4>Direct Email</h4>
               <a href="mailto:your.email@example.com">your.email@example.com</a>
            </div>
            <div className="contact-col">
              <h4>View Code</h4>
              <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">GitHub Profile ↗</a>
            </div>
          </div>
        </section>

        {/* --- FOOTER --- */}
        <footer>
          <p>© 2026 Brenda Kanani | System Architecture & Design | Nyeri, Kenya</p>
        </footer>
        
      </div>
    </div>
  );
}

export default App;