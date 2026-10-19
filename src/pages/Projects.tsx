import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Search, SlidersHorizontal } from 'lucide-react'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data'

const filters = ['All work', 'AI', 'Backend', 'Full-stack']
export default function Projects() {
  const [filter, setFilter] = useState('All work')
  const [search, setSearch] = useState('')
  const visible = useMemo(() => projects.filter(project => {
    const matchesFilter = filter === 'All work' || project.tags.some(tag => tag.toLowerCase() === filter.toLowerCase()) || (filter === 'Backend' && project.stack.some(s => ['Spring Boot', 'FastAPI', 'PHP'].includes(s)))
    const haystack = `${project.name} ${project.summary} ${project.stack.join(' ')}`.toLowerCase()
    return matchesFilter && haystack.includes(search.toLowerCase())
  }), [filter, search])
  return <div className="page-wrap wrap"><div className="page-hero projects-page-hero"><span className="section-kicker">THE WORK INDEX / 001—004</span><motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>Less talk.<br /><span className="text-gradient">More shipped.</span></motion.h1><p className="page-lede">Four projects. Different problems. One consistent goal: build things that work and understand why they work.</p><div className="projects-count"><strong>04</strong><span>SELECTED PROJECTS<br />AND COUNTING</span></div></div>
    <div className="project-controls"><div className="filter-list" aria-label="Filter projects">{filters.map(item => <button key={item} className={`filter-button ${filter === item ? 'selected' : ''}`} onClick={() => setFilter(item)}><SlidersHorizontal size={13} />{item}</button>)}</div><label className="project-search"><Search size={16} /><input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search the work..." aria-label="Search projects" /></label></div>
    {visible.length ? <div className="projects-grid all-projects-grid">{visible.map((project, i) => <ProjectCard key={project.slug} project={project} index={i} />)}</div> : <div className="empty-state"><Search size={24} /><h3>No matching projects</h3><p>Try a different keyword or switch back to all work.</p><button className="button-secondary" onClick={() => { setFilter('All work'); setSearch('') }}>Reset filters</button></div>}
    <div className="project-note"><span className="note-mark">↳</span><p><strong>Good engineering is iterative.</strong> Some projects are live previews; TaskManager Web currently runs locally. I’m continuing to improve each one as I learn.</p></div>
  </div>
}
