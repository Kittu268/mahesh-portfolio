/* eslint-disable */
import React, { useState, useEffect } from 'react';
import './App.css';

// Framer Motion Languages Section
import Languages from "./components/Languages";

// ICONS
const Icons = {
  Home: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
      <polyline points="9 22 9 12 15 12 15 22"></polyline>
    </svg>
  ),
  User: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  ),
  Code: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  ),
  Mail: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  ),
  External: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  ),
};

function App() {
  const [terminalText, setTerminalText] = useState('');

  // TERMINAL TYPING EFFECT
  useEffect(() => {
    const codeString =
`class Engineer:
  def __init__(self):
    self.name = 'Mahesh Bainoor'
    self.role = 'Full Stack Dev'
    self.stack = ['React', 'Python', 'Cloud']

  def build_future(self):
    return 'Shipping Code...'`;

    let i = 0;
    const timer = setInterval(() => {
      setTerminalText(codeString.substring(0, i));
      i++;
      if (i > codeString.length) clearInterval(timer);
    }, 40);

    return () => clearInterval(timer);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Syntax highlight (safe)
  const renderCode = () => ({
    __html: terminalText
      .replace(/class|def|self|return/g, '<span class="code-keyword">$&</span>')
      .replace(/'[^']*'/g, '<span class="code-string">$&</span>')
  });

  return (
    <div className="app">
      <div className="container">

        {/* ================= HERO ================= */}
        <section id="home" className="hero-grid">
          <div>
            <span className="hero-tag">sudo login user:mahesh</span>
            <h1>
              Architecting the <br />
              <span style={{ color: 'var(--accent)' }}>Digital Future.</span>
            </h1>

            <p style={{ fontSize: '1.1rem', color: '#9ca3af', marginBottom: '2rem', maxWidth: '500px' }}>
              5th Sem CSE Student. Full-Stack Developer. Cloud Enthusiast.
              Turning complex problems into elegant code.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="/resume.pdf" className="btn">Download CV</a>
              <a href="https://github.com/Kittu268" target="_blank" rel="noreferrer" className="btn btn-outline">GitHub</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="btn btn-outline">LinkedIn</a>
            </div>
          </div>

          {/* TERMINAL */}
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="dot red"></div>
              <div className="dot yellow"></div>
              <div className="dot green"></div>
            </div>
            <div className="terminal-body">
              <pre>
                <code dangerouslySetInnerHTML={renderCode()} />
                <span className="cursor"></span>
              </pre>
            </div>
          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section id="about">
          <h2>About Me</h2>
          <div className="bento-grid">
            <div className="card col-span-2">
              <h3>Engineering Impact</h3>
              <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '1rem' }}>
                <div className="stat-item"><span className="stat-num">5+</span><span className="stat-label">Contributions</span></div>
                <div className="stat-item"><span className="stat-num">12+</span><span className="stat-label">Repos</span></div>
                <div className="stat-item"><span className="stat-num">3</span><span className="stat-label">Internships</span></div>
              </div>
            </div>

            <div className="card">
              <h3>Current Focus</h3>
              <p style={{ fontSize: '2rem', margin: 0 }}>System Design</p>
              <p style={{ color: 'var(--accent)', fontSize: '0.9rem' }}>Scalability & Microservices</p>
            </div>

            <div className="card col-span-3">
              <h3>Technical Arsenal</h3>
              <div className="skill-wrapper">
                {['React', 'Node.js', 'Python', 'MySQL', 'MongoDB', 'Google Cloud', 'Docker', 'Next.js'].map((s, i) => (
                  <div key={i} className="skill-chip">{s}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= LANGUAGES (Framer Motion) ================= */}
        <Languages />

        {/* ================= PROJECTS ================= */}
        <section id="projects">
          <h2>Featured Work</h2>
          <div className="bento-grid">
            <div className="card col-span-2">
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h3>GigFlow (FinTech)</h3>
                <Icons.External />
              </div>
              <p className="text-dim">
                Smart financial tracker for student freelancers using microservices and AI risk analysis.
              </p>
              <div className="skill-wrapper">
                <span className="skill-chip">MERN</span>
                <span className="skill-chip">Python AI</span>
                <span className="skill-chip">Docker</span>
              </div>
            </div>

            <div className="card">
              <h3>Airline Reservation System</h3>
              <p className="text-dim">End-to-end booking engine with admin dashboard.</p>
              <span className="skill-chip">PHP & MySQL</span>
            </div>
          </div>
        </section>

        {/* ================= FOOTER ================= */}
        <footer style={{ textAlign: 'center', color: '#6b7280', marginTop: '4rem' }}>
          <p>© 2025 Mahesh Bainoor. Engineered with React.</p>
        </footer>
      </div>

      {/* FLOATING DOCK */}
      <div className="dock-wrapper">
        <nav className="dock">
          <div className="dock-item" onClick={() => scrollTo('home')}><Icons.Home /></div>
          <div className="dock-item" onClick={() => scrollTo('about')}><Icons.User /></div>
          <div className="dock-item" onClick={() => scrollTo('projects')}><Icons.Code /></div>
          <div className="dock-item" onClick={() => window.open('mailto:maheshbainoor42@gmail.com')}><Icons.Mail /></div>
        </nav>
      </div>
    </div>
  );
}

export default App;
