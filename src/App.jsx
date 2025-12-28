import React, { useEffect, useState } from 'react';
import './App.css';

// --- Icons (Clean SVGs) ---
const Icons = {
  Github: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>,
  Link: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>,
  Code: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>,
  Briefcase: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>,
  Award: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>,
  Download: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>,
  Beaker: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 2v7.31"></path><path d="M14 2v7.31"></path><path d="M8.5 2h7"></path><path d="M14 9.3a6.5 6.5 0 1 1-4 0"></path></svg>,
  Star: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>,
  Mail: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>,
  Map: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>,
  Send: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>,
  Close: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>,
  ArrowUp: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>,
  Cloud: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>,
  Badge: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.78 4.78 4 4 0 0 1-6.74 0 4 4 0 0 1-4.78-4.78 4 4 0 0 1 0-6.74z"></path></svg>,
  Terminal: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>
};

function App() {
  const [repos, setRepos] = useState([]);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(''); 
  
  // Typing Effect
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const roles = ["Full-Stack Developer", "Cloud Enthusiast", "AI Learner", "CSE Student (5th Sem)"];
    const currentRole = roles[textIndex % roles.length];
    
    const updateText = () => {
      if (isDeleting) {
        setDisplayedText(prev => prev.substring(0, prev.length - 1));
      } else {
        setDisplayedText(prev => currentRole.substring(0, prev.length + 1));
      }

      if (!isDeleting && displayedText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000); 
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setTextIndex(prev => prev + 1);
      }
    };
    const timer = setTimeout(updateText, isDeleting ? 100 : 150);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, textIndex]);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress(Number(totalScroll / windowHeight));
      setShowScrollTop(totalScroll > 300);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => { window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const handleFormChange = (e) => { setFormData({ ...formData, [e.target.name]: e.target.value }); };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const response = await fetch('https://formsubmit.co/ajax/maheshbainoor42@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ name: formData.name, email: formData.email, message: formData.message, _subject: "New Portfolio Message!" })
      });
      if (response.ok) { setStatus('success'); setFormData({ name: '', email: '', message: '' }); } 
      else { setStatus('error'); }
    } catch (err) { setStatus('error'); }
  };

  const featured = [
    { 
      id: 1, title: 'GigFlow (FinTech)', tech: 'MERN Stack • Python AI', status: 'In Development',
      desc: 'Smart financial tracker for student freelancers. Features AI-driven risk analysis and automated invoice generation.', 
      fullDesc: 'GigFlow solves the problem of irregular income for student freelancers. It uses a Python Microservice to predict cash flow gaps.',
      image: 'https://placehold.co/600x400/1e293b/38bdf8?text=GigFlow+Dashboard' 
    },
    { 
      id: 2, title: 'Airline Reservation System', tech: 'PHP • MySQL', status: 'Completed',
      desc: 'Comprehensive web application for managing flight bookings, passenger records, and administrative tasks.', 
      fullDesc: 'A complete MVC-based application handling complex SQL queries for flight scheduling.',
      image: 'https://placehold.co/600x400/1e293b/38bdf8?text=Airline+System' 
    }
  ];

  const experience = [
    { role: 'Data Analytics Intern', company: 'Tata Group (Virtual)', date: 'July 2025', desc: 'Built AI strategy and predictive models to assess customer risk.' },
    { role: 'Tech Apprentice', company: 'Accenture UK (Virtual)', date: 'July 2025', desc: 'Proposed cloud architecture and cybersecurity solutions.' }
  ];

  const certifications = [
    { name: 'Google Cloud Skills Profile', link: 'https://www.skills.google/public_profiles/2927fc7b-ddb5-4cfd-b13f-a84a3285031d' },
    { name: 'Credly Verified Badges', link: 'https://www.credly.com/users/mahesh-bainoor' },
    { name: 'Certificates (Google Drive)', link: 'https://drive.google.com/drive/folders/1xyKk5voOsFH5w9TgJzihQ7pxTcQCgn4O?usp=drive_link' },
    { name: 'Tata Group: Data Visualization', link: '#' },
    { name: 'Accenture: Developer Simulation', link: '#' }
  ];
  
  const techStack = ['React.js', 'Node.js', 'Python', 'Machine Learning', 'Google Cloud', 'MongoDB', 'MySQL', 'Data Analytics', 'JavaScript', 'Git/GitHub'];

  useEffect(() => {
    fetch('https://api.github.com/users/Kittu268/repos?sort=updated&per_page=4').then(res => res.json()).then(data => setRepos(data)).catch(err => console.error(err));
  }, []);

  return (
    <>
      <div className="tech-bg"></div>
      <div style={{position: 'fixed', top: 0, left: 0, height: '4px', background: '#3b82f6', width: (scrollProgress * 100) + '%', zIndex: 2000, transition: 'width 0.1s'}}></div>

      <nav className="navbar">
        <div className="nav-container">
          <a href="#" className="logo">Mahesh.dev</a>
          <div className="nav-links">
            <a href="#about" className="nav-link">About</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#docs" className="nav-link">Docs</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
        </div>
      </nav>

      <div className="container">
        {/* Hero */}
        <section id="about" className="hero">
          <h1>Mahesh Bainoor</h1>
          <p className="tagline" style={{minHeight:'1.6em'}}>
            I am a <span style={{color:'var(--accent)', fontWeight:'bold'}}>{displayedText}</span><span className="cursor">|</span>
          </p>
          <div className="social-links" style={{display:'flex', gap:'1rem', flexWrap:'wrap'}}>
             <a href="https://www.skills.google/public_profiles/2927fc7b-ddb5-4cfd-b13f-a84a3285031d" target="_blank" className="btn" style={{borderColor: '#FBBF24', color: '#FBBF24'}}><Icons.Cloud /> Google Cloud</a>
             <a href="https://www.credly.com/users/mahesh-bainoor" target="_blank" className="btn" style={{borderColor: '#F97316', color: '#F97316'}}><Icons.Badge /> Credly</a>
             <a href="/resume.pdf" download className="btn btn-primary"><Icons.Download /> Download CV</a>
             <a href="https://github.com/Kittu268" target="_blank" className="btn"><Icons.Github /> GitHub</a>
          </div>
        </section>

        {/* Marquee Skills */}
        <section id="skills">
          <h2><Icons.Code /> Technical Arsenal</h2>
          <div className="marquee-container">
            <div className="marquee-content">
              {techStack.map((skill, i) => <span key={'s1-'+i} className="marquee-tag">{skill}</span>)}
              {techStack.map((skill, i) => <span key={'s2-'+i} className="marquee-tag">{skill}</span>)}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience">
          <h2><Icons.Briefcase /> Experience</h2>
          <div className="grid">
             {experience.map((exp, i) => (<div key={i} className="card"><h3>{exp.role}</h3><p style={{color:'var(--accent)'}}>{exp.company}</p><p>{exp.desc}</p></div>))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects">
          <h2><Icons.Code /> Featured Work</h2>
          <div className="grid">
             {featured.map((p, i) => (
               <div key={i} className="card project-interactive" onClick={() => setSelectedProject(p)}>
                  <span className="skill-tag" style={{position:'absolute', top:'1rem', right:'1rem', fontSize:'0.7rem'}}>{p.status}</span>
                  <h3>{p.title}</h3>
                  <p style={{color:'var(--accent)', fontSize:'0.9rem', marginBottom:'0.5rem'}}>{p.tech}</p>
                  <p>{p.desc}</p>
                  <small style={{marginTop:'1rem', display:'block', color:'#38bdf8'}}>Click for details &rarr;</small>
               </div>
             ))}
          </div>
        </section>

        {/* Certifications */}
        <section id="certs">
          <h2><Icons.Award /> Certifications</h2>
          <div className="skill-grid">
            {certifications.map((cert, i) => (
              <a key={i} href={cert.link} target="_blank" className="btn" style={{fontSize:'0.85rem'}}>
                {cert.name} {cert.link !== '#' && <Icons.Link />}
              </a>
            ))}
          </div>
        </section>

        {/* Documentation (Fixed Link) */}
        <section id="docs">
           <h2><Icons.Terminal /> How It's Built</h2>
           <div className="card" style={{borderLeft: '4px solid #22c55e'}}>
              <h3>Portfolio Architecture</h3>
              <p style={{marginBottom: '1rem'}}>
                 This site acts as its own living documentation. It is built with <strong>React + Vite</strong> and deployed via <strong>Vercel</strong>.
                 Below is the standard deployment workflow for this project.
              </p>
              
              <div style={{background: '#0f172a', padding: '1rem', borderRadius: '6px', fontFamily: 'monospace', fontSize: '0.85rem', color: '#e2e8f0', marginBottom: '1rem', border: '1px solid #334155'}}>
                 <div style={{color: '#94a3b8'}}># 1. Clone & Install</div>
                 <div style={{marginBottom: '0.5rem'}}><span style={{color: '#22c55e'}}>$</span> npm install</div>
                 <div style={{color: '#94a3b8'}}># 2. Production Deployment</div>
                 <div><span style={{color: '#22c55e'}}>$</span> vercel --prod</div>
              </div>

              {/* Updated to link to Profile to avoid 404 */}
              <a href={'https://github.com/' + 'Kittu268'} target="_blank" className="btn" style={{fontSize: '0.9rem'}}>
                 <Icons.Github /> View GitHub Profile
              </a>
           </div>
        </section>

        {/* Contact */}
        <section id="contact">
          <h2><Icons.Mail /> Let's Connect</h2>
          <div className="contact-grid">
            <div className="contact-info">
               <a href="mailto:maheshbainoor42@gmail.com" className="card contact-card"><Icons.Mail /> <span>maheshbainoor42@gmail.com</span></a>
               <a href="https://www.linkedin.com/in/mahesh-bainoor-8042522a1" target="_blank" className="card contact-card"><Icons.Link /> <span>LinkedIn Profile</span></a>
               <div className="card contact-card"><Icons.Map /> <span>Bangalore, India</span></div>
            </div>
            <form className="card contact-form" onSubmit={handleFormSubmit}>
               <h3>Send me a message</h3>
               <div className="form-group"><input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleFormChange} required /></div>
               <div className="form-group"><input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleFormChange} required /></div>
               <div className="form-group"><textarea name="message" rows="4" placeholder="How can I help you?" value={formData.message} onChange={handleFormChange} required></textarea></div>
               <button type="submit" className="btn btn-primary" disabled={status === 'submitting' || status === 'success'}>
                  {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Message Sent! ?' : <>Send Message <Icons.Send /></>}
               </button>
            </form>
          </div>
        </section>

        <footer><p>© 2025 Mahesh | Built with React</p></footer>
      </div>

      {showScrollTop && (<button onClick={scrollToTop} style={{position: 'fixed', bottom: '2rem', right: '2rem', background: 'var(--accent)', color: 'white', border: 'none', borderRadius: '50%', width: '50px', height: '50px', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><Icons.ArrowUp /></button>)}

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedProject(null)}><Icons.Close /></button>
            <img src={selectedProject.image} alt={selectedProject.title} style={{width:'100%', height:'200px', objectFit:'cover', borderRadius:'8px'}} />
            <h2 style={{marginTop:'1rem'}}>{selectedProject.title}</h2>
            <span className="skill-tag" style={{marginBottom:'1rem', display:'inline-block'}}>{selectedProject.tech}</span>
            <p>{selectedProject.fullDesc}</p>
            <div style={{marginTop:'1.5rem', display:'flex', gap:'1rem'}}>
               <button className="btn btn-primary" onClick={() => alert('Demo link coming soon!')}>Live Demo</button>
               <button className="btn" onClick={() => setSelectedProject(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
