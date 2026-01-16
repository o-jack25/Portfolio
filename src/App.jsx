import { useState } from "react";
import "./App.css";

function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0.5C5.73 0.5.5 5.74.5 12.02c0 5.11 3.29 9.45 7.86 10.98.57.1.78-.25.78-.55v-2.02c-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.04 1.77 2.72 1.26 3.39.96.1-.75.4-1.26.72-1.55-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.1-.12-.3-.52-1.52.11-3.17 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.65.23 2.87.11 3.17.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.67.41.35.78 1.04.78 2.1v3.12c0 .31.21.66.79.55 4.56-1.53 7.85-5.87 7.85-10.98C23.5 5.74 18.27.5 12 .5z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5c0 1.38-1.11 2.5-2.49 2.5A2.5 2.5 0 0 1 2.5 3.5C2.5 2.12 3.61 1 4.99 1c1.37 0 2.49 1.12 2.49 2.5zM.5 23.5h4.98V7.98H.5V23.5zM8.5 7.98h4.78v2.12h.07c.66-1.26 2.28-2.6 4.7-2.6 5.03 0 5.95 3.3 5.95 7.59v8.41h-4.98v-7.46c0-1.78-.03-4.07-2.48-4.07-2.49 0-2.87 1.94-2.87 3.94v7.59H8.5V7.98z" />
    </svg>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="page">
      <nav className="navbar">
  <div className="nav-inner">
    

    {/* Desktop nav */}
    <ul className="nav-list desktop-nav">
      <li><a href="#projects">Projects</a></li>
      <li>
        <a
          href="/JackOrlowski_Resume.pdf"
          target="_blank"
        >
          Resume
        </a>
      </li>
      <li><a href="#about">About</a></li>

      {/* Icons */}
      <li className="nav-icon">
        <a
          href="https://github.com/o-jack25"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <GitHubIcon />
        </a>
      </li>
      <li className="nav-icon">
        <a
          href="https://www.linkedin.com/in/jackorlowski/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedInIcon />
        </a>
      </li>
    </ul>

    {/* Mobile hamburger */}
    <button
      className="menu-btn"
      onClick={() => setMenuOpen(v => !v)}
      aria-label="Toggle menu"
    >
      ☰
    </button>
  </div>

  {/* Mobile dropdown */}
  {menuOpen && (
    <div className="mobile-menu">
      <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
      <a 
        href="/JackOrlowski_Resume.pdf"
        target="_blank"
        rel="noreferrer"
        onClick={() => setMenuOpen(false)}
      >
        Resume
      </a>
      <a href="#about" onClick={() => setMenuOpen(false)}>About</a>

      <div className="mobile-icons">
        <a
          href="https://github.com/o-jack25"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/jackorlowski/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedInIcon />
        </a>
      </div>
    </div>
  )}
</nav>


      <main className="container">
        <section id="about">
          <h1>Jack Orlowski</h1>

            <p>
              Focused on backend and full-stack software engineering. Knowledge in Python, JavaScript, and C++. Experienced with web development using Flask and React, as well as database management with SQLAlchemy and PostgreSQL. 
              Passionate about building efficient and scalable applications.
            </p>
          

        </section>

        <section id="projects">
  <h3 className="projects-title">Projects</h3>

  <div className="projects-grid">
    <a
      className="project-card"
      href="https://github.com/o-jack25/ProRigRental"
      target="_blank"
      rel="noreferrer"
    >
      <h4>Co-op System</h4>
      <p>
        Full-stack web application built with Flask, SQLAlchemy, and PostgreSQL
        to manage co-op placements for students, faculty, and employers.
      </p>
    </a>

    <a
      className="project-card"
      href="https://github.com/GenImage-Dataset/GenImage"
      target="_blank"
      rel="noreferrer"
    >
      <h4>Gen AI Image Detector</h4>
      <p>
        Deep learning pipeline for detecting AI-generated images, trained and
        evaluated across multiple datasets on HPC clusters.
      </p>
    </a>

    <a
      className="project-card"
      href="https://github.com/o-jack25/ProRigRental"
      target="_blank"
      rel="noreferrer"
    >
      <h4>Pro Rig Rental</h4>
      <p>
        Full-stack web application for renting industrial equipment,
        built with JavaScript, Flask, and MongoDB.
      </p>
    </a>

    
  </div>
</section>


        <section id="contact" className="contact">
          <h3>Contact</h3>
          

          <form
            className="contact-form"
            action="https://formspree.io/f/mlggdaar"
            method="POST"
          >
            <div className="contact-grid">
              <label>
                Name
                <input type="text" name="name" />
              </label>

              <label>
                Email
                <input type="email" name="email" required />
              </label>
            </div>

            <label>
              Message
              <textarea name="message" rows="5" required />
            </label>

            <div className="contact-actions">
              <button type="submit" className="btn">
                Send Message
              </button>

              <div className="contact-links">
                <a href="https://github.com/o-jack25" target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/jackorlowski/" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </div>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}
