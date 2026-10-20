import { motion } from 'framer-motion'
import { ArrowUpRight, BookOpen, Compass, GraduationCap, Lightbulb, Terminal } from 'lucide-react'
import { Link } from 'react-router-dom'

const principles = [
  { icon: Terminal, title: 'Understand the system', text: 'I like getting past the surface — following a request through the API, business logic, database, and back.' },
  { icon: Lightbulb, title: 'Make AI useful', text: 'I’m interested in grounded AI features that solve a real problem, not AI for the sake of a label.' },
  { icon: Compass, title: 'Learn by developing', text: 'Projects are my lab. Develop a small version, test assumptions, find the rough edges, and improve it.' },
]

export default function About() {
  return <div className="page-wrap wrap">
    <div className="page-hero">
      <span className="section-kicker">THE DEVELOPER BEHIND THE TERMINAL</span>
      <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>Engineer by mindset.<br /><span className="text-gradient">Developer by practice.</span></motion.h1>
      <p className="page-lede">I’m Sumit Sharma, a Computer Science student interested in backend engineering, applied AI, and application development across web and mobile.</p>
    </div>

    <div className="about-layout">
      <div className="about-main">
        <div className="about-label"><span className="label-line" /> A LITTLE CONTEXT</div>
        <h2>Curiosity, turned into <span className="muted-heading">working software.</span></h2>
        <p>I’m pursuing a B.Tech in Computer Science and Engineering at Galgotias University (2024–2028). My main focus is backend engineering — APIs, authentication, databases, and system design — while I explore how local language models and machine learning can make software more capable.</p>
        <p>I learn by developing real applications. My work has taken me through full-stack workflows, deployment, local AI inference, database integration, Android app development, and the unglamorous-but-important work of debugging the whole system.</p>
        <p>I’m especially interested in understanding how an idea becomes a reliable product: the user experience, the API, the data model, the security decisions, and the deployment path. I’m still learning, and I want my portfolio to show both what I’ve built and what I’m actively improving.</p>
        <div className="about-actions">
          <a className="button-secondary" href="/resume.pdf" download>Download résumé <ArrowUpRight size={16} /></a>
          <Link to="/projects" className="button-primary">Explore my development work <ArrowUpRight size={16} /></Link>
          <a className="button-secondary" href="https://www.linkedin.com/in/sumit-kumar-44558a290/" target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight size={16} /></a>
        </div>
      </div>
      <aside className="about-side">
        <div className="profile-card">
          <div className="profile-card-head"><span>PROFILE / 001</span><span className="profile-signal"><i /> ACTIVE LEARNER</span></div>
          <div className="profile-monogram">S<span>S</span><i>.</i></div>
          <h3>Sumit Sharma</h3><p>Backend & AI Engineer · Application Developer</p>
          <div className="profile-divider" />
          <div className="profile-detail"><span>BASED IN</span><strong>India</strong></div>
          <div className="profile-detail"><span>EDUCATION</span><strong>B.Tech · Computer Science</strong></div>
          <div className="profile-detail"><span>UNIVERSITY</span><strong>Galgotias University</strong></div>
          <div className="profile-detail"><span>GRADUATION</span><strong>2028</strong></div>
        </div>
        <div className="education-card"><div className="education-icon"><GraduationCap size={19} /></div><div><span className="eyebrow">CURRENT CHAPTER</span><h3>Computer Science & Engineering</h3><p>2024 — 2028 · B.Tech</p></div></div>
      </aside>
    </div>

    <section className="education-timeline-section">
      <div className="section-heading"><div><span className="section-kicker">EDUCATION / THE JOURNEY SO FAR</span><h2>Strong foundations.<br /><span className="muted-heading">Room to keep growing.</span></h2></div></div>
      <div className="education-timeline">
        <article className="education-timeline-card current"><span className="timeline-period">2024 — 2028</span><div className="timeline-marker"><GraduationCap size={18} /></div><div><span className="eyebrow">UNDERGRADUATE</span><h3>Galgotias University</h3><p>B.Tech · Computer Science and Engineering</p><span className="timeline-status">CURRENTLY STUDYING</span></div></article>
        <article className="education-timeline-card"><span className="timeline-period">CLASSES VI — XII</span><div className="timeline-marker"><BookOpen size={18} /></div><div><span className="eyebrow">SCHOOL EDUCATION</span><h3>Jawahar Navodaya Vidyalaya, Katihar</h3><p>Studied from Class 6 through Class 12.</p><span className="timeline-status">SCHOOL YEARS</span></div></article>
      </div>
    </section>

    <section className="app-development-section">
      <div className="app-development-art"><div className="app-orbit app-orbit-one" /><div className="app-orbit app-orbit-two" /><div className="app-phone"><div className="app-phone-camera" /><div className="app-screen-top"><span>MY TASKS</span><i /></div><div className="app-task-line wide" /><div className="app-task-line" /><div className="app-task-line medium" /><div className="app-add-button">+</div></div><span className="app-art-caption">WEB ↔ MOBILE</span></div>
      <div className="app-development-copy"><span className="section-kicker">APPLICATION DEVELOPMENT / WEB + ANDROID</span><h2>Not just websites.<br /><span className="text-gradient">Apps, too.</span></h2><p>Alongside web development, I’ve explored Android app development with Kotlin, Jetpack Compose, Android Studio, and SQLite through a task-management application. That work introduced me to mobile UI composition, local data persistence, and app flows beyond the browser.</p><div className="app-tech-chips"><span>Kotlin</span><span>Jetpack Compose</span><span>Android Studio</span><span>SQLite</span><span>Spring Boot</span><span>React</span></div><Link to="/projects" className="text-link">Explore my projects <ArrowUpRight size={15} /></Link></div>
    </section>

    <section className="principles-section"><div className="section-heading"><div><span className="section-kicker">HOW I APPROACH THE WORK</span><h2>Principles over <span className="muted-heading">shortcuts.</span></h2></div></div><div className="principles-grid">{principles.map((item, i) => { const Icon = item.icon; return <motion.article className="principle-card" key={item.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }}><span className="principle-num">0{i + 1}</span><Icon size={22} className="principle-icon" /><h3>{item.title}</h3><p>{item.text}</p></motion.article> })}</div></section>

    <section className="achievements-section"><div className="section-heading"><div><span className="section-kicker">MILESTONES & PARTICIPATION</span><h2>Small wins. <span className="muted-heading">Real momentum.</span></h2></div></div>
      <div className="achievement-grid">
        <article className="achievement-card achievement-featured"><span className="achievement-year">2026 / SMART INDIA HACKATHON</span><h3>Cyvanta · Internal Round Qualified</h3><p>Our team cleared the internal hackathon round for Smart India Hackathon with Cyvanta, our investigation and relationship-analysis project.</p><span className="achievement-tag">TEAM MILESTONE</span></article>
        <article className="achievement-card"><span className="achievement-year">2026 / HACKATHON</span><h3>HackIndia</h3><p>Top 15 · KCC Institute of Technology and Management</p></article>
        <article className="achievement-card"><span className="achievement-year">COMMUNITY / EVENT</span><h3>Duality</h3><p>Participant · Organized by Genesis, supported by Google for Developers</p></article>
        <article className="achievement-card"><span className="achievement-year">2026 / UNIVERSITY</span><h3>DevFusion</h3><p>Participant · Full-Stack Application Development Challenge, Galgotias University</p></article>
        <article className="achievement-card"><span className="achievement-year">AI / MACHINE LEARNING</span><h3>Model training</h3><p>Completed a model-training milestone; continuing to deepen practical ML experience.</p></article>
      </div>
    </section>
    <section className="milestone-panel"><div className="milestone-icon"><BookOpen size={20} /></div><div><span className="section-kicker">PROGRESS, NOT PERFECTION</span><h2>Still learning. Already developing.</h2><p>From backend workflows to local-model AI integration and mobile application development, I’m building a practical foundation one project at a time.</p></div><Link to="/skills" className="text-link">My learning roadmap <ArrowUpRight size={15} /></Link></section>
  </div>
}
