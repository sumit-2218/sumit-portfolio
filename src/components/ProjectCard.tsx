import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { Project } from '../data'

export default function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  const Icon = project.icon
  return (
    <motion.article className={`project-card ${project.accent}`} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.45, delay: index * 0.07 }}>
      <div className="project-card-top"><span className="project-number">PROJECT / {project.number}</span><span className="project-status"><i />{project.status}</span></div>
      <div className="project-art"><div className="art-orbit orbit-a" /><div className="art-orbit orbit-b" /><div className="art-core"><Icon size={30} strokeWidth={1.4} /></div><span className="art-coordinate">{project.number} — 04</span><span className="art-label">SYSTEMS / IN MOTION</span></div>
      <div className="project-card-body"><span className="eyebrow">{project.eyebrow}</span><h3>{project.name}</h3><p>{project.summary}</p><div className="tag-row">{project.stack.slice(0, 4).map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
        <div className="project-card-actions"><Link to={`/projects/${project.slug}`} className="text-link">Case study <ArrowUpRight size={15} /></Link>{project.url ? <a className="live-project-link" href={project.url} target="_blank" rel="noreferrer"><span className="live-link-dot" />Live preview <ExternalLink size={14} /></a> : <span className="local-label">LOCAL BUILD</span>}</div>
      </div>
    </motion.article>
  )
}
