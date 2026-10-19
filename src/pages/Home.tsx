import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight, ArrowUpRight, Bot, Braces, Code2, Github, Linkedin, Mail, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import { projects, skillGroups } from '../data'

export default function Home() {
  return <>
    <section className="hero wrap">
      <div className="hero-copy">
        <motion.div className="availability-pill" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5 }}><span className="availability-pulse" /> ENGINEERING THE NEXT LAYER <span className="pill-spark"><Sparkles size={12} /></span></motion.div>
        <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .08 }}>I build the <span className="text-gradient">systems</span><br />behind smarter<br /><span className="hero-outline">experiences.</span></motion.h1>
        <motion.p className="hero-description" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .28 }}>Hey, I’m <strong>Sumit Kumar</strong> — a Backend & AI Engineer in the making, turning thoughtful architecture and applied AI into useful products.</motion.p>
        <motion.div className="hero-actions" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .38 }}><Link to="/projects" className="button-primary">Explore my work <ArrowUpRight size={17} /></Link><Link to="/about" className="button-secondary">A little about me <ArrowRight size={16} /></Link></motion.div>
        <motion.div className="hero-socials" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .5 }}><span>FIND ME ON</span><a href="https://github.com/sumit-2218" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={16} /></a><a href="https://www.linkedin.com/in/sumit-kumar-44558a290/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={16} /></a><a href="mailto:sumitsharmajnvs2218@gmail.com" aria-label="Email"><Mail size={16} /></a></motion.div>
      </div>
      <motion.div className="hero-visual" initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .15 }}>
        <div className="visual-topline"><span>FIG. 001</span><span>THOUGHT → SYSTEM → IMPACT</span></div>
        <div className="visual-grid"><div className="grid-cross cross-1" /><div className="grid-cross cross-2" /><div className="grid-cross cross-3" /><div className="grid-cross cross-4" />
          <div className="visual-ring ring-outer" /><div className="visual-ring ring-middle" /><div className="visual-ring ring-inner" /><div className="visual-core"><span className="core-glyph">S<span>.</span></span><span className="core-caption">BUILD / ITERATE / LEARN</span></div><div className="orbit-node node-a"><Code2 size={17} /></div><div className="orbit-node node-b"><Bot size={17} /></div><div className="orbit-node node-c"><Braces size={17} /></div><div className="orbit-line line-a" /><div className="orbit-line line-b" />
          <div className="floating-chip chip-api"><span className="chip-dot" /> API / ONLINE</div><div className="floating-chip chip-ai">AI × ENGINEERING</div>
        </div>
        <div className="visual-bottomline"><span>BUILT WITH CURIOSITY</span><span className="visual-bars"><i /><i /><i /><i /><i /><i /><i /><i /></span></div>
      </motion.div>
      <a href="#selected-work" className="scroll-cue"><span className="scroll-cue-line" /><span>SCROLL TO EXPLORE</span><ArrowDown size={13} /></a>
    </section>

    <section className="signal-strip"><div className="wrap signal-inner"><div><span className="signal-number">01</span><span>BACKEND SYSTEMS</span></div><div><span className="signal-number">02</span><span>APPLIED AI</span></div><div><span className="signal-number">03</span><span>PRODUCT THINKING</span></div><div><span className="signal-number">04</span><span>ALWAYS LEARNING</span></div></div></section>

    <section className="section wrap" id="selected-work"><div className="section-heading"><div><span className="section-kicker">01 / SELECTED WORK</span><h2>Ideas, <span className="muted-heading">made tangible.</span></h2></div><Link to="/projects" className="text-link heading-link">All projects <ArrowUpRight size={16} /></Link></div><p className="section-intro">A few things I’ve been building — from backend workflows to AI-powered tools. Each project is a new system to understand, challenge, and improve.</p><div className="projects-grid">{projects.slice(0, 3).map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div><div className="all-projects-mobile"><Link to="/projects" className="button-secondary">See all four projects <ArrowRight size={16} /></Link></div></section>

    <section className="section capabilities-section"><div className="wrap"><div className="section-heading"><div><span className="section-kicker">02 / MY TOOLKIT</span><h2>Curiosity is the <span className="text-gradient">stack.</span></h2></div><Link to="/skills" className="text-link heading-link">Explore skills <ArrowUpRight size={16} /></Link></div><p className="section-intro">My centre of gravity is backend engineering, with AI and modern product development expanding what I can build.</p><div className="capability-grid">{skillGroups.slice(0, 4).map((group, i) => { const Icon = group.icon; return <div className="capability-card" key={group.title}><div className="capability-icon"><Icon size={20} /></div><span className="capability-index">0{i + 1}</span><h3>{group.title}</h3><p>{group.note}</p><div className="capability-skills">{group.skills.slice(0, 5).map(skill => <span key={skill}>{skill}</span>)}</div></div> })}</div></div></section>

    <section className="closing-cta wrap"><div className="cta-glow" /><div className="cta-content"><span className="section-kicker">HAVE A CHALLENGE IN MIND?</span><h2>Let’s build something<br /><span className="text-gradient">worth shipping.</span></h2><p>Open to internships, collaborations, and conversations about backend systems or applied AI.</p><Link to="/contact" className="button-primary">Start a conversation <ArrowUpRight size={17} /></Link></div><div className="cta-stamp"><span>IDEAS</span><span className="stamp-symbol">↗</span><span>INTO REALITY</span></div></section>
  </>
}
