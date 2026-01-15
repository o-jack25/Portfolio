import { useState } from "react";
import "./App.css";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="page">
      <nav className="navbar">
        <div className="nav-inner">
          {/* Optional brand on the left */}
          

          {/* Desktop nav (shows on wider screens) */}
          <ul className="nav-list desktop-nav">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          {/* Mobile hamburger button (shows on small screens) */}
          <button
            className="menu-btn"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            ☰
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div className="mobile-menu">
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
        )}
      </nav>

      <main className="container">
        <section id="about">
          <h1>Jack Orlowski</h1>

          <p>
            Welcome to my portfolio page! I graduated from the University of Michigan
            in 2025 with a B.S in Computer Science and through rigorous coursework and
            hands-on projects, I have developed a strong foundation in software
            development, algorithms, and data structures. My current interests lie in
            backend development, full-stack development, and AI/ML applications. Feel
            free to explore my projects and connect with me!
          </p>
        </section>

        <section id="projects">
  <h3>Projects</h3>

  <div className="projects-grid">
    <a
      className="project-card"
      href="https://github.com/o-jack25/Co-op-System"
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
      href="https://github.com/o-jack25/GenImageDetector"
      target="_blank"
      rel="noreferrer"
    >
      <h4>GenImageDetector</h4>
      <p>
        Deep learning pipeline for detecting AI-generated images, trained and
        evaluated across multiple datasets on HPC clusters.
      </p>
    </a>

    <a
      className="project-card"
      href="https://github.com/o-jack25/Edge-AI-Minions"
      target="_blank"
      rel="noreferrer"
    >
      <h4>Edge AI Minions</h4>
      <p>
        Agent-based edge computing system using LLMs and SLMs for task
        coordination and local decision making.
      </p>
    </a>
  </div>
</section>


        <section id="contact" className="contact">
          <h3>Contact</h3>
          <p className="contact-subtext">
            Feel free to reach out — I’m always open to new opportunities and conversations.
          </p>

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
