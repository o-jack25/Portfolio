import "./App.css";

export default function App() {
  return (
    <div className="page">
      <nav className="navbar">
        <ul className="nav-list">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
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
          <ul>
            <li>
              <strong>Co-op System</strong> – Flask, SQLAlchemy, PostgreSQL
            </li>
            <li>
              <strong>GenImageDetector</strong> – Deep learning model training on HPC
              clusters
            </li>
            <li>
              <strong>Edge AI Minions</strong> – Agent-based edge computing system
            </li>
          </ul>
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
                <input type="text" name="name"/>
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
