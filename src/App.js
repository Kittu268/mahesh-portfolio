import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      
      {/* ================= TICKER ================= */}
      <div className="ticker-wrap">
        <div className="ticker-track">
          <span className="ticker-item">
            UVCE CSE 5TH SEM ● BUILDING HIGH-PERFORMANCE CLOUD SYSTEMS
          </span>
          <span className="ticker-item">
            STRATEGY: INVESTING 100% INCOME INTO TECH BREAKTHROUGHS
          </span>
          <span className="ticker-item">
            STATUS: OPEN TO KNOWLEDGE & GLOBAL OPPORTUNITIES
          </span>
          <span className="ticker-item">
            UVCE CSE 5TH SEM ● BUILDING HIGH-PERFORMANCE CLOUD SYSTEMS
          </span>
        </div>
      </div>

      {/* ================= MAIN ================= */}
      <main className="container">

        {/* NAV */}
        <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '2rem 0' }}>
          <div style={{ fontWeight: 800, fontSize: '1.5rem' }}>
            MAHESH<span style={{ color: 'var(--uvce-blue)' }}>.DEV</span>
          </div>

          <a
            href="https://github.com/Kittu268"
            target="_blank"
            rel="noreferrer"
            style={{ color: 'var(--uvce-blue)', fontWeight: 700 }}
          >
            @Kittu268
          </a>
        </nav>

        {/* HERO */}
        <header className="hero">
          <div
            style={{
              color: 'var(--uvce-blue)',
              fontWeight: 700,
              fontSize: '0.9rem',
              marginBottom: '1rem',
              letterSpacing: '2px'
            }}
          >
            UVCE CSE '26
          </div>

          <h1>
            Architecting <br />
            <span className="highlight">Digital Frontiers</span>
          </h1>

          <p
            style={{
              color: '#94a3b8',
              fontSize: '1.3rem',
              maxWidth: '700px',
              marginBottom: '3rem'
            }}
          >
            Fueling tomorrow's tech breakthroughs through intelligent cloud systems
            and strategic engineering.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="https://drive.google.com/drive/folders/1xyKk5voOsFH5w9TgJzihQ7pxTcQCgn4O"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Master Credentials (G Drive)
            </a>

            <a
              href="https://github.com/Kittu268"
              target="_blank"
              rel="noreferrer"
              className="btn btn-gold"
            >
              Engineering Pulse (GitHub)
            </a>
          </div>
        </header>

        {/* ================= STATS ================= */}
        <section id="stats">
          <div className="grid">
            <div className="card">
              <img
                src="https://github-readme-stats.vercel.app/api?username=Kittu268&show_icons=true&theme=transparent&title_color=3b82f6&text_color=f8fafc&hide_border=true"
                alt="GitHub Stats"
                style={{ width: '100%' }}
              />
            </div>

            <div className="card">
              <h3 style={{ color: 'var(--gold)' }}>Investment Vision</h3>
              <p style={{ color: '#94a3b8', marginTop: '1rem' }}>
                Future focus: Reinvesting 100% of income into semiconductor R&D
                and AI infrastructure.
              </p>

              <a
                href="https://www.credly.com/users/mahesh-bainoor"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'block',
                  marginTop: '1rem',
                  color: 'var(--uvce-blue)',
                  fontWeight: 700
                }}
              >
                View Certifications →
              </a>
            </div>
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section style={{ margin: '6rem auto', maxWidth: '600px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
            Query & Contact
          </h2>

          <form
            className="card"
            action="https://formsubmit.co/maheshbainoor42@gmail.com"
            method="POST"
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              style={inputStyle}
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              style={inputStyle}
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Send me a message for any query..."
              required
              style={inputStyle}
            />

            <button
              type="submit"
              className="btn btn-primary"
              style={{ justifyContent: 'center' }}
            >
              Send Message
            </button>
          </form>
        </section>
      </main>

      {/* FOOTER */}
      <footer
        style={{
          textAlign: 'center',
          padding: '4rem 0',
          color: '#475569',
          borderTop: '1px solid var(--border)'
        }}
      >
        © 2025 Mahesh Bainoor | UVCE CSE | Kittu268
      </footer>
    </div>
  );
}

/* Shared input style */
const inputStyle = {
  padding: '1rem',
  borderRadius: '12px',
  background: 'rgba(255,255,255,0.03)',
  border: '1px solid var(--border)',
  color: '#fff'
};

export default App;
