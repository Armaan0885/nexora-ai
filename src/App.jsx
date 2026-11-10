
import { useState } from "react";
import "./App.css";

const programs = [
  {
    number: "01",
    category: "AI FOUNDATIONS",
    title: "AI for Everyone",
    description:
      "Understand artificial intelligence, explore modern AI tools, and learn how to use them in your everyday work.",
    duration: "4 weeks",
    level: "Beginner",
    icon: "✳",
    color: "lavender",
  },
  {
    number: "02",
    category: "BUILD WITH AI",
    title: "Generative AI & Automation",
    description:
      "Build AI-powered workflows, intelligent assistants, and practical automations without getting lost in theory.",
    duration: "6 weeks",
    level: "Intermediate",
    icon: "⌘",
    color: "peach",
  },
  {
    number: "03",
    category: "CAREER ACCELERATOR",
    title: "Digital Skills for the Future",
    description:
      "Develop the digital, analytical, and problem-solving skills that modern teams value.",
    duration: "5 weeks",
    level: "All levels",
    icon: "↗",
    color: "mint",
  },
];

const benefits = [
  {
    icon: "◈",
    title: "Learn by building",
    text: "Work on practical assignments and real-world projects instead of only watching lectures.",
  },
  {
    icon: "✳",
    title: "Use modern AI tools",
    text: "Explore the tools shaping how people learn, create, communicate, and work.",
  },
  {
    icon: "⌘",
    title: "Build career-ready skills",
    text: "Develop a portfolio of practical work that demonstrates what you can actually do.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="nexora">
      <nav className="navbar">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">N</span>
          <span>nexora<span className="brand-dot">.</span></span>
        </a>

        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          <a href="#programs" onClick={closeMenu}>Programs</a>
          <a href="#approach" onClick={closeMenu}>Our approach</a>
          <a href="#about" onClick={closeMenu}>About us</a>
          <a className="nav-cta" href="#register" onClick={closeMenu}>
            Get started <span>↗</span>
          </a>
        </div>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-dot"></span>
              THE NEXT GENERATION OF LEARNING
            </div>

            <h1>
              Don't just learn
              <br />
              about the future.
              <br />
              <span>Build it.</span>
            </h1>

            <p className="hero-description">
              Practical AI and digital skills for people who want to do more
              than keep up. Learn by creating, experimenting, and solving
              real-world problems.
            </p>

            <div className="hero-actions">
              <a className="button button-dark" href="#programs">
                Explore programs <span>↗</span>
              </a>
              <a className="text-link" href="#approach">
                Discover our approach <span>→</span>
              </a>
            </div>

            <div className="hero-note">
              <div className="avatar-stack">
                <span>A</span><span>M</span><span>R</span><span>+</span>
              </div>
              <p>For curious minds, ambitious students, and future builders.</p>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-glow"></div>
            <div className="visual-label label-top">
              <span className="status-dot"></span>
              LEARNING, REIMAGINED
            </div>

            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>

            <div className="hero-core">
              <div className="core-symbol">N<span>✳</span></div>
              <div className="core-caption">HUMAN CURIOSITY × AI</div>
            </div>

            <div className="floating-card card-ai">
              <span className="float-icon purple">✳</span>
              <div>
                <strong>Artificial Intelligence</strong>
                <small>Think beyond the ordinary</small>
              </div>
            </div>

            <div className="floating-card card-build">
              <span className="float-icon orange">⌘</span>
              <div>
                <strong>Build something real</strong>
                <small>Ideas into experiences</small>
              </div>
            </div>

            <div className="visual-label label-bottom">
              <span>01</span> LEARN · CREATE · EVOLVE
            </div>
          </div>
        </section>

        <section className="marquee-strip">
          <span>ARTIFICIAL INTELLIGENCE</span><i>✳</i>
          <span>CREATIVE THINKING</span><i>✳</i>
          <span>DIGITAL SKILLS</span><i>✳</i>
          <span>REAL-WORLD PROJECTS</span><i>✳</i>
        </section>

        <section className="intro-section" id="about">
          <div className="section-kicker">01 / WHY NEXORA</div>
          <div className="intro-content">
            <h2>
              The world is changing.
              <br />
              <span>Your skills should too.</span>
            </h2>
            <div className="intro-text">
              <p>
                AI is changing how we study, work, and create. But knowing
                about new technology isn't enough. What matters is knowing
                how to use it.
              </p>
              <p>
                Nexora is designed to help students and young professionals
                turn curiosity into capability through practical,
                guided learning.
              </p>
            </div>
          </div>
          <div className="intro-bottom">
            <span>LESS PASSIVE LEARNING.</span>
            <span>MORE HANDS-ON CREATING. ↗</span>
          </div>
        </section>

        <section className="program-section" id="programs">
          <div className="section-topline">
            <span className="section-kicker">02 / EXPLORE YOUR PATH</span>
            <span className="section-aside">LEARN AT YOUR OWN PACE</span>
          </div>

          <div className="program-heading">
            <h2>Skills that move<br /><span>you forward.</span></h2>
            <p>
              Carefully designed learning experiences to help you
              understand, experiment, and apply what you learn.
            </p>
          </div>

          <div className="program-grid">
            {programs.map((program) => (
              <article className="program-card" key={program.number}>
                <div className="program-card-top">
                  <span className="program-number">{program.number}</span>
                  <span className={`program-icon ${program.color}`}>
                    {program.icon}
                  </span>
                </div>
                <span className="program-category">{program.category}</span>
                <h3>{program.title}</h3>
                <p>{program.description}</p>
                <div className="program-meta">
                  <span>◷ {program.duration}</span>
                  <span>{program.level}</span>
                </div>
                <a href="#register" className="program-link">
                  Explore program <span>↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="approach-section" id="approach">
          <div className="approach-heading">
            <span className="section-kicker">03 / THE NEXORA METHOD</span>
            <h2>
              From curious
              <br />
              to <span>capable.</span>
            </h2>
            <p>
              We believe the best way to understand technology is to
              experiment with it. Every learning experience is designed
              around application, not memorisation.
            </p>
          </div>

          <div className="benefit-list">
            {benefits.map((benefit, index) => (
              <div className="benefit-item" key={benefit.title}>
                <span className="benefit-number">0{index + 1}</span>
                <span className="benefit-icon">{benefit.icon}</span>
                <div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.text}</p>
                </div>
                <span className="benefit-arrow">↗</span>
              </div>
            ))}
          </div>
        </section>

        <section className="quote-section">
          <span className="quote-mark">“</span>
          <h2>
            The future doesn't belong to people who simply know about
            technology. It belongs to people who know what to do with it.
          </h2>
          <span className="quote-caption">THE NEXORA MINDSET</span>
        </section>

        <section className="register-section" id="register">
          <div className="register-copy">
            <span className="section-kicker">04 / YOUR NEXT CHAPTER</span>
            <h2>
              Your ideas deserve
              <br />
              <span>the right skills.</span>
            </h2>
            <p>
              Take the first step towards learning something that matters.
              Tell us a little about yourself and we'll help you find
              the right learning path.
            </p>
            <div className="register-points">
              <span>↗ Practical learning</span>
              <span>↗ Future-focused skills</span>
              <span>↗ Built for curious minds</span>
            </div>
          </div>

          <div className="register-form-card">
            {submitted ? (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <h3>You're on your way.</h3>
                <p>
                  Thanks for your interest in Nexora. This demo form has
                  captured your submission locally.
                </p>
                <button
                  className="button button-dark"
                  onClick={() => setSubmitted(false)}
                >
                  Submit another response
                </button>
              </div>
            ) : (
              <>
                <div className="form-heading">
                  <span>LET'S GET TO KNOW YOU</span>
                  <h3>Start your journey.</h3>
                  <p>Share your details to express your interest.</p>
                </div>
                <form onSubmit={handleSubmit}>
                  <label htmlFor="name">Your name</label>
                  <input id="name" name="name" placeholder="e.g. Alex Morgan" required />

                  <label htmlFor="email">Email address</label>
                  <input id="email" name="email" type="email" placeholder="you@example.com" required />

                  <label htmlFor="role">I am a...</label>
                  <select id="role" name="role" required defaultValue="">
                    <option value="" disabled>Select your current role</option>
                    <option>Student</option>
                    <option>Working professional</option>
                    <option>Entrepreneur</option>
                    <option>Career switcher</option>
                    <option>Other</option>
                  </select>

                  <label htmlFor="interest">What interests you most?</label>
                  <select id="interest" name="interest" required defaultValue="">
                    <option value="" disabled>Choose an area</option>
                    <option>AI foundations</option>
                    <option>Generative AI and automation</option>
                    <option>Digital skills</option>
                    <option>I'm still exploring</option>
                  </select>

                  <button type="submit" className="button button-dark form-submit">
                    Express your interest <span>↗</span>
                  </button>
                  <small className="privacy-note">
                    This is a prototype registration form. No data is sent
                    to a server.
                  </small>
                </form>
              </>
            )}
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark">N</span>
          <span>nexora<span className="brand-dot">.</span></span>
        </a>
        <p>Learn boldly. Build what's next.</p>
        <span className="footer-copy">© 2026 NEXORA. CONCEPT PROJECT.</span>
      </footer>
    </div>
  );
}

export default App;
