import { useMemo, useState, type FormEvent } from 'react'
import { Bot, MessageCircle, Send, X, Sparkles } from 'lucide-react'
import { projects, skillGroups } from '../data'

type Message = { role: 'assistant' | 'user'; text: string }
const starters = ['Tell me about your AI project', 'What technologies do you use?', 'How can I contact Sumit?']
function answerFor(raw: string) {
  const q = raw.toLowerCase()
  if (/contact|email|phone|hire|reach|linkedin/.test(q)) return 'You can reach Sumit at sumitsharmajnvs2218@gmail.com, connect on LinkedIn at linkedin.com/in/sumit-kumar-44558a290, or use the Contact page. He is open to relevant opportunities and collaborations.'
  if (/resume|cv|education|college|university|study/.test(q)) return 'Sumit is pursuing a B.Tech in Computer Science and Engineering at Galgotias University (2024–2028). Use the Resume button on the site to view/download the current resume PDF.'
  if (/skill|stack|technology|tech|language|framework/.test(q)) return `The portfolio lists ${skillGroups.slice(0, 5).map(g => `${g.title}: ${g.skills.slice(0, 5).join(', ')}`).join('; ')}. Some technologies in “Exploring next” are learning goals, not claims of expert proficiency.`
  if (/sales|lead|crm|ollama|qwen|agent/.test(q)) { const p = projects[0]; return `${p.name}: ${p.summary} Stack: ${p.stack.join(', ')}. The project uses lead-fit scoring and is designed to ground AI analysis in supplied prospect data. The deployed interface is a live preview; local-model/gateway availability can vary.` }
  if (/cyvanta|crime|investigat|document|relationship/.test(q)) return `${projects[1].name}: ${projects[1].summary} It is a PHP/MySQL project concept with PDF/TXT processing; AI-assisted relationship extraction is still being refined.`
  if (/instagas|gas|lpg|booking/.test(q)) return `${projects[2].name}: ${projects[2].summary} Its stack includes ${projects[2].stack.join(', ')}.`
  if (/task|manager|spring|jwt|auth/.test(q)) return `${projects[3].name}: ${projects[3].summary} It uses ${projects[3].stack.join(', ')} and currently runs locally, so there is no public demo link.`
  if (/project|work|build|portfolio/.test(q)) return `There are four featured projects: ${projects.map(p => `${p.name} — ${p.summary}`).join(' | ')} Open the Projects page for individual case studies, technology stacks, architecture notes, and learning outcomes.`
  if (/github|repository|repo|contribution|commit|open source|coding activity/.test(q)) return 'The GitHub page at /github fetches public repositories and recent public events for github.com/sumit-2218. Repository metadata includes language, stars, forks, and last-updated dates. Public events are only an indicative activity view; private contributions are not shown.'
  if (/experience|intern|job|career|about|who/.test(q)) return 'Sumit is a B.Tech CSE student building toward backend and applied-AI engineering. The portfolio focuses on practical projects, API/backend fundamentals, database integration, and learning how local LLMs fit into applications. It does not claim professional internship experience.'
  return 'I can answer questions using the information published on this portfolio: projects, technology stack, education, and contact details. Try asking about Sales Operations Agent, Cyvanta, InstaGas, TaskManager, skills, resume, or contact.'
}
export default function PortfolioAssistant() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([{ role: 'assistant', text: 'Hi! I’m the portfolio guide. Ask me about Sumit’s projects, stack, education, or how to get in touch.' }])
  const suggestions = useMemo(() => starters.filter(s => messages.length < 3 || !messages.some(m => m.text === s)), [messages])
  const send = (value: string) => { const text = value.trim(); if (!text) return; setMessages(prev => [...prev, { role: 'user', text }, { role: 'assistant', text: answerFor(text) }]); setInput('') }
  const submit = (e: FormEvent) => { e.preventDefault(); send(input) }
  return <>
    <button className="assistant-launcher" aria-label={open ? 'Close portfolio assistant' : 'Open portfolio assistant'} onClick={() => setOpen(v => !v)}>{open ? <X size={20} /> : <><MessageCircle size={19} /><span>Ask my portfolio</span><Sparkles size={14} /></>}</button>
    {open && <section className="assistant-panel" aria-label="Portfolio assistant" aria-live="polite"><header className="assistant-header"><span className="assistant-avatar"><Bot size={20} /></span><div><strong>Portfolio guide</strong><small><i /> Uses published portfolio facts</small></div><button aria-label="Close assistant" onClick={() => setOpen(false)}><X size={17} /></button></header><div className="assistant-messages">{messages.map((m, i) => <div key={i} className={`assistant-message ${m.role}`}>{m.text}</div>)}</div>{suggestions.length > 0 && <div className="assistant-suggestions">{suggestions.map(s => <button key={s} onClick={() => send(s)}>{s}</button>)}</div>}<form className="assistant-form" onSubmit={submit}><input value={input} onChange={e => setInput(e.target.value)} placeholder="Ask about a project or skill…" aria-label="Ask a question" /><button aria-label="Send question" type="submit"><Send size={16} /></button></form><p className="assistant-disclaimer">Curated on-page answers, not a live generative AI service.</p></section>}
  </>
}
