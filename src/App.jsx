import { useEffect, useState } from 'react'

const projects = [
  {
    number: '01',
    type: 'AI APPLICATION · DATA',
    title: 'NL-to-SQL Query Engine',
    description:
      'An end-to-end Text-to-SQL platform that lets non-technical users ask questions of Azure SQL data in natural language, then turns the result into an instant visual insight.',
    stack: ['Python', 'FastAPI', 'LangChain', 'Llama 3.1', 'Azure SQL'],
    details: ['Intent detection & SQL validation', 'CSV / Excel ingestion', 'Automatic chart selection'],
  },
  {
    number: '02',
    type: 'RAG · EVALUATION',
    title: 'PDF RAG Chatbot',
    description:
      'A document Q&A system built for accurate, grounded answers. Retrieval reranking and continuous RAGAS evaluation make improvements measurable instead of guesswork.',
    stack: ['Python', 'LangChain LCEL', 'FAISS', 'Groq Llama 3.1', 'RAGAS'],
    details: ['Semantic PDF retrieval', 'Retrieval reranking', 'Faithfulness benchmarks'],
  },
  {
    number: '03',
    type: 'FULL-STACK · DELIVERY',
    title: 'Tiffin Service',
    description:
      'A full-stack tiffin delivery application designed to make recurring meal ordering simple for customers and manageable for the service team.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    details: ['Meal subscription flow', 'Customer-friendly ordering', 'Responsive web experience'],
    link: 'https://the-tiffin-wala.vercel.app/',
  },
  {
    number: '04',
    type: 'FULL-STACK · REAL ESTATE',
    title: 'Dream Homes',
    description:
      'A full-stack real estate platform that helps users browse, discover, and explore properties through a clean, responsive interface.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    details: ['Property discovery', 'Responsive listing experience', 'Full-stack web architecture'],
    link: 'https://dream-homes-gh37.onrender.com/',
  },
]

const skillGroups = [
  ['GenAI & Agents', 'LangChain', 'LangGraph', 'CrewAI', 'Agentic AI', 'RAG'],
  ['Backend & Data', 'Python', 'FastAPI', 'PostgreSQL', 'MongoDB', 'SQL', 'FAISS', 'ChromaDB'],
  ['Engineering', 'C++', 'JavaScript', 'Azure', 'Git', 'GitHub', 'Postman'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('portfolio-theme') === 'dark')

  useEffect(() => {
    localStorage.setItem('portfolio-theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  const closeMenu = () => setMenuOpen(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const subject = encodeURIComponent(`Portfolio message from ${data.get('name')}`)
    const body = encodeURIComponent(`${data.get('message')}\n\nReply to: ${data.get('email')}`)
    window.location.href = `mailto:dipeshbhatiya317@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <div className={`site-shell ${darkMode ? 'dark-mode' : ''}`}>
      <nav className="navbar">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">DB</span>
          <span>Deepesh Bhatiya</span>
        </a>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span />
          <span />
        </button>
        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          {['about', 'experience', 'work', 'contact'].map((item) => (
            <a key={item} href={`#${item}`} onClick={closeMenu}>{item}</a>
          ))}
          <a className="nav-resume" href="/Deepesh_Bhatiya_Resume.pdf" target="_blank" rel="noreferrer">Resume <span>↗</span></a>
        </div>
        <button className="theme-toggle" type="button" onClick={() => setDarkMode(!darkMode)} aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}>
          <span>{darkMode ? '☼' : '☾'}</span> {darkMode ? 'Light' : 'Dark'}
        </button>
      </nav>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> Available for meaningful AI work</p>
            <h1>Building the<br /><em>intelligence</em> behind<br />better products.</h1>
            <p className="hero-intro">
              I&apos;m Deepesh, a GenAI / Backend Engineer designing agentic systems, reliable APIs, and retrieval experiences that solve real business problems.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <span>↓</span></a>
              <a className="text-link" href="mailto:dipeshbhatiya317@gmail.com">Let&apos;s talk <span>↗</span></a>
            </div>
          </div>
          <div className="hero-orbit" aria-hidden="true">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit-tech-ring">
              {['Python', 'LangGraph', 'FastAPI', 'FAISS', 'Azure', 'RAG', 'CrewAI', 'SQL'].map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
            <div className="orbit-core"><span>AI</span><small>ENGINEERING</small></div>
            <div className="orbit-label label-top">AGENTIC<br />SYSTEMS</div>
            <div className="orbit-label label-bottom">BACKEND<br />CRAFT</div>
          </div>
        </section>

        <section className="proof-strip">
          <div><strong>1.2</strong><span>years building<br />GenAI systems</span></div>
          <div><strong>8</strong><span>agents coordinated<br />in settlement automation</span></div>
          <div><strong>700+</strong><span>competitive coding<br />problems solved</span></div>
          <div><strong>1622</strong><span>LeetCode<br />peak rating</span></div>
        </section>

        <section className="section-wrap about-section" id="about">
          <div className="section-heading">
            <p className="eyebrow">01 / About me</p>
            <h2>Curious by nature.<br /><em>Precise by practice.</em></h2>
          </div>
          <div className="about-content">
            <p className="lead-copy">I work at the intersection of backend engineering and applied AI. My focus is turning complex workflows and unstructured information into systems people can actually use.</p>
            <p className="muted-copy">From orchestrating multi-agent workflows to building evaluation loops for RAG pipelines, I care about the details that make AI applications dependable: clear architecture, observable behavior, and useful outcomes.</p>
            <div className="education-card">
              <span className="card-label">Education</span>
              <div><strong>MCA · 7.99 CGPA</strong><span>NIT Jamshedpur · 2022 — 2025</span></div>
              <div><strong>BCA · 71.71%</strong><span>SVIM, Indore · 2018 — 2021</span></div>
            </div>
          </div>
        </section>

        <section className="experience-section" id="experience">
          <div className="section-wrap">
            <div className="section-heading row-heading">
              <p className="eyebrow">02 / Experience</p>
              <span className="heading-note">The work behind the work</span>
            </div>
            <div className="experience-item">
              <div className="experience-date">AUG 2025<br />— OCT 2026</div>
              <div className="experience-main">
                <p className="role-kicker">Fractal Analytics · Full-time</p>
                <h2>GenAI Engineer</h2>
                <p>Building enterprise-grade agentic applications and backend systems for analytics and conversational AI.</p>
                <ul>
                  <li>Built an agentic trade-settlement automation platform with FastAPI, SQLite, LangGraph, and GPT-4o-mini.</li>
                  <li>Designed rule-based orchestration for 8 agents handling counterparty analysis, email drafting, and reply processing.</li>
                  <li>Automated reminders, escalations, and pipeline tests to take trade breaks from detection to resolution.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section-wrap work-section" id="work">
          <div className="section-heading row-heading">
            <p className="eyebrow">03 / Selected work</p>
            <span className="heading-note">Systems, not just screens</span>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article
                className="project-card"
                key={project.number}
                role="link"
                tabIndex={0}
                onClick={() => window.open('https://github.com/diippesh', '_blank', 'noopener,noreferrer')}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault()
                    window.open('https://github.com/diippesh', '_blank', 'noopener,noreferrer')
                  }
                }}
              >
                <div className="project-top"><span>{project.number}</span><span>{project.type}</span></div>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className="project-details">{project.details.map((detail) => <span key={detail}>↳ {detail}</span>)}</div>
                <div className="stack">
                  {project.stack.map((tech) => <span key={tech}>{tech}</span>)}
                  {project.link && <a className="project-link" href={project.link} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()}>View project ↗</a>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="skills-section">
          <div className="section-wrap">
            <div className="section-heading"><p className="eyebrow">04 / Toolkit</p><h2>Tools I use to<br /><em>make things real.</em></h2></div>
            <div className="skills-grid">{skillGroups.map(([title, ...skills]) => <div className="skill-group" key={title}><h3>{title}</h3><div>{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div>)}</div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div><p className="eyebrow">05 / Contact</p><h2>Have a problem<br />worth <em>solving?</em></h2><p className="contact-copy">I&apos;m always interested in thoughtful products, hard engineering challenges, and conversations about applied AI.</p><a className="email-link" href="mailto:dipeshbhatiya317@gmail.com">dipeshbhatiya317@gmail.com <span>↗</span></a><div className="social-links"><a href="https://github.com/diippesh" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/deepesh-bhatiya-1b679818" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://leetcode.com/u/diippesh/" target="_blank" rel="noreferrer">LeetCode ↗</a><a href="https://www.codechef.com/users/diippesh" target="_blank" rel="noreferrer">CodeChef ↗</a><a href="https://portfolio-deep.onrender.com/" target="_blank" rel="noreferrer">Live portfolio ↗</a></div></div>
          <form className="contact-form" onSubmit={handleSubmit}><label htmlFor="name">Your name</label><input id="name" name="name" required placeholder="How should I call you?" /><label htmlFor="email">Your email</label><input id="email" name="email" type="email" required placeholder="you@company.com" /><label htmlFor="message">Your message</label><textarea id="message" name="message" required rows="3" placeholder="Tell me a little about it..." /><button className="button button-primary" type="submit">Send message <span>↗</span></button></form>
        </section>
      </main>
      <footer><div className="section-wrap footer-inner"><span>© {new Date().getFullYear()} Deepesh Bhatiya</span><span>Built with curiosity & care</span><div><a href="#home">Back to top ↑</a></div></div></footer>
    </div>
  )
}

export default App
