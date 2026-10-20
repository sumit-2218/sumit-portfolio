import { useEffect, useMemo, useState } from 'react'
import { Activity, ArrowUpRight, GitFork, Github, RefreshCw, Search, Star, GitCommitHorizontal, CircleDot, ExternalLink } from 'lucide-react'

type Repo = {
  id: number
  name: string
  full_name: string
  description: string | null
  html_url: string
  homepage: string | null
  stargazers_count: number
  forks_count: number
  language: string | null
  updated_at: string
  fork: boolean
  topics?: string[]
}
type GitEvent = {
  id: string
  type: string
  created_at: string
  repo: { name: string }
  payload?: { action?: string; commits?: { message: string }[]; ref?: string }
}
const USER = 'sumit-2218'
const API = 'https://api.github.com'

function dateLabel(value: string) {
  return new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric', year: 'numeric' }).format(new Date(value))
}
function eventLabel(event: GitEvent) {
  const action = event.payload?.action
  if (event.type === 'PushEvent') {
    const message = event.payload?.commits?.[0]?.message
    return `Pushed ${event.payload?.commits?.length || 'new'} commit${(event.payload?.commits?.length || 0) === 1 ? '' : 's'}${message ? ` — “${message.split('\n')[0]}”` : ''}`
  }
  if (event.type === 'PullRequestEvent') return `${action || 'Updated'} a pull request`
  if (event.type === 'IssuesEvent') return `${action || 'Updated'} an issue`
  if (event.type === 'CreateEvent') return `Created ${event.payload?.ref || 'a repository branch'}`
  if (event.type === 'WatchEvent') return 'Starred a repository'
  if (event.type === 'ForkEvent') return 'Forked a repository'
  if (event.type === 'IssueCommentEvent') return 'Commented on an issue'
  if (event.type === 'PullRequestReviewEvent') return 'Reviewed a pull request'
  return event.type.replace(/Event$/, '').replace(/([A-Z])/g, ' $1').trim()
}
function eventIcon(type: string) {
  if (type === 'PushEvent') return <GitCommitHorizontal size={15} />
  if (type === 'IssuesEvent' || type === 'PullRequestEvent') return <CircleDot size={15} />
  return <Activity size={15} />
}

export default function GitHubActivityPage() {
  const [repos, setRepos] = useState<Repo[]>([])
  const [events, setEvents] = useState<GitEvent[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [query, setQuery] = useState('')
  const [showForks, setShowForks] = useState(false)

  const load = async (signal?: AbortSignal) => {
    setLoading(true)
    setError('')
    try {
      const headers = { Accept: 'application/vnd.github+json' }
      const [repoResponse, eventResponse] = await Promise.all([
        fetch(`${API}/users/${USER}/repos?sort=updated&per_page=100`, { headers, signal }),
        fetch(`${API}/users/${USER}/events/public?per_page=100`, { headers, signal }),
      ])
      if (!repoResponse.ok) throw new Error(repoResponse.status === 403 ? 'GitHub is temporarily rate-limiting public requests. Try again in a little while.' : `Could not load repositories (HTTP ${repoResponse.status}).`)
      if (!eventResponse.ok) throw new Error(eventResponse.status === 403 ? 'GitHub is temporarily rate-limiting activity requests. Repository cards may still be available after retrying.' : `Could not load public activity (HTTP ${eventResponse.status}).`)
      const [repoData, eventData] = await Promise.all([repoResponse.json(), eventResponse.json()])
      if (!signal?.aborted) {
        setRepos(Array.isArray(repoData) ? repoData : [])
        setEvents(Array.isArray(eventData) ? eventData : [])
      }
    } catch (err) {
      if (signal?.aborted) return
      setError(err instanceof Error ? err.message : 'Something went wrong while connecting to GitHub.')
    } finally {
      if (!signal?.aborted) setLoading(false)
    }
  }

  useEffect(() => {
    const controller = new AbortController()
    void load(controller.signal)
    return () => controller.abort()
  }, [])

  const visibleRepos = useMemo(() => repos
    .filter(repo => showForks || !repo.fork)
    .filter(repo => `${repo.name} ${repo.description || ''} ${repo.language || ''} ${(repo.topics || []).join(' ')}`.toLowerCase().includes(query.toLowerCase()))
    .slice(0, 12), [repos, query, showForks])
  const originalRepos = repos.filter(repo => !repo.fork)
  const languages = new Set(originalRepos.map(repo => repo.language).filter(Boolean))
  const recentEvents = events.filter(event => !['PublicEvent', 'MemberEvent'].includes(event.type)).slice(0, 10)
  const activityDays = useMemo(() => {
    const counts = new Map<string, number>()
    events.forEach(event => {
      const day = event.created_at.slice(0, 10)
      counts.set(day, (counts.get(day) || 0) + 1)
    })
    return Array.from({ length: 84 }, (_, i) => {
      const date = new Date()
      date.setDate(date.getDate() - (83 - i))
      const key = date.toISOString().slice(0, 10)
      return { key, count: counts.get(key) || 0 }
    })
  }, [events])
  const totalStars = originalRepos.reduce((sum, repo) => sum + repo.stargazers_count, 0)
  const totalForks = originalRepos.reduce((sum, repo) => sum + repo.forks_count, 0)

  return <div className="page-wrap wrap github-page">
    <div className="page-hero github-page-hero">
      <span className="section-kicker">OPEN SOURCE / LIVE FROM GITHUB</span>
      <div className="github-title-row">
        <div><h1>Code in motion.<br /><span className="text-gradient">Work in public.</span></h1><p className="page-lede">A live window into my public repositories and recent GitHub activity. Real data from my GitHub profile — not hand-written stats.</p></div>
        <a className="github-profile-orb" href={`https://github.com/${USER}`} target="_blank" rel="noreferrer" aria-label="Open GitHub profile"><Github size={35} /><span>VIEW PROFILE <ArrowUpRight size={13} /></span></a>
      </div>
      <div className="github-live-label"><span className="availability-pulse" /> PUBLIC GITHUB API <span>·</span> <code>@{USER}</code></div>
    </div>

    {error && <div className="github-error" role="status"><div><strong>GitHub connection needs a moment.</strong><p>{error}</p></div><button className="button-secondary" onClick={() => void load()}><RefreshCw size={14} /> Retry</button></div>}

    <div className="github-stats-grid">
      <div className="github-stat-card"><span>PUBLIC REPOSITORIES</span><strong>{loading ? '—' : originalRepos.length}</strong><small>Original public projects</small></div>
      <div className="github-stat-card"><span>LANGUAGES USED</span><strong>{loading ? '—' : languages.size}</strong><small>Detected from repository metadata</small></div>
      <div className="github-stat-card"><span>STARS EARNED</span><strong>{loading ? '—' : totalStars}</strong><small>Across original public repositories</small></div>
      <div className="github-stat-card"><span>FORKS</span><strong>{loading ? '—' : totalForks}</strong><small>Community forks of public work</small></div>
    </div>

    <section className="github-section">
      <div className="section-heading"><div><span className="section-kicker">01 / REPOSITORY INDEX</span><h2>Selected <span className="muted-heading">repositories.</span></h2></div><a href={`https://github.com/${USER}?tab=repositories`} target="_blank" rel="noreferrer" className="text-link heading-link">All on GitHub <ArrowUpRight size={15} /></a></div>
      <p className="section-intro">Explore the code, read the README, and follow the build. Repository data refreshes from GitHub when this page opens.</p>
      <div className="github-controls"><label className="github-search"><Search size={16} /><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search repositories, languages, topics…" aria-label="Search GitHub repositories" /></label><label className="github-fork-toggle"><input type="checkbox" checked={showForks} onChange={e => setShowForks(e.target.checked)} /> Include forks</label></div>
      {loading ? <div className="github-loading"><span className="loading-orbit" /><p>Connecting to GitHub…</p></div> : visibleRepos.length ? <div className="github-repo-grid">{visibleRepos.map(repo => <article className="github-repo-card" key={repo.id}>
        <div className="github-repo-card-top"><span className="github-repo-icon"><Github size={18} /></span><span className="github-repo-updated">UPDATED {dateLabel(repo.updated_at)}</span></div>
        <h3><a href={repo.html_url} target="_blank" rel="noreferrer">{repo.name}<ArrowUpRight size={14} /></a></h3>
        <p>{repo.description || 'No description added yet. Visit the repository to explore its code and files.'}</p>
        {repo.topics && repo.topics.length > 0 && <div className="github-topic-row">{repo.topics.slice(0, 3).map(topic => <span key={topic}>{topic}</span>)}</div>}
        <div className="github-repo-meta"><span className="github-language">{repo.language && <i />} {repo.language || 'Code repository'}</span><span><Star size={13} /> {repo.stargazers_count}</span><span><GitFork size={13} /> {repo.forks_count}</span></div>
        <div className="github-repo-actions"><a href={repo.html_url} target="_blank" rel="noreferrer">Explore code <ExternalLink size={13} /></a>{repo.homepage && <a href={repo.homepage} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={13} /></a>}</div>
      </article>)}</div> : <div className="empty-state"><Search size={22} /><h3>No repositories match</h3><p>Try another search term or include forks.</p><button className="button-secondary" onClick={() => { setQuery(''); setShowForks(true) }}>Show all repositories</button></div>}
    </section>

    <section className="github-section github-activity-section">
      <div className="section-heading"><div><span className="section-kicker">02 / RECENT PUBLIC SIGNALS</span><h2>Activity, <span className="muted-heading">not assumptions.</span></h2></div><span className="roadmap-status"><i /> LIVE DATA</span></div>
      <p className="section-intro">A small view of public events GitHub exposes for this account. The grid represents observed public events, not a complete contribution count.</p>
      <div className="activity-panel">
        <div className="activity-panel-heading"><div><Activity size={17} /><strong>Last 12 weeks</strong></div><span>LOW <i className="activity-key key-0" /><i className="activity-key key-1" /><i className="activity-key key-2" /><i className="activity-key key-3" /> HIGH</span></div>
        <div className="activity-grid" aria-label="Public GitHub event activity for the last 12 weeks">{activityDays.map(day => <span key={day.key} className={`activity-cell activity-level-${day.count === 0 ? 0 : day.count === 1 ? 1 : day.count <= 3 ? 2 : 3}`} title={`${day.key}: ${day.count} public event${day.count === 1 ? '' : 's'}`} />)}</div>
        <p className="activity-footnote">Based on the recent public-events endpoint. GitHub limits the event history returned, so this is an indicative activity view—not a complete contribution calendar.</p>
      </div>
      <div className="activity-feed">
        <div className="activity-feed-heading"><h3>Recent public events</h3><span>{loading ? 'LOADING' : `${recentEvents.length} SHOWN`}</span></div>
        {loading ? <div className="activity-empty">Loading public events…</div> : recentEvents.length ? recentEvents.map(event => <article className="activity-event" key={event.id}><span className="activity-event-icon">{eventIcon(event.type)}</span><div className="activity-event-copy"><p>{eventLabel(event)}</p><a href={`https://github.com/${event.repo.name}`} target="_blank" rel="noreferrer">{event.repo.name}<ArrowUpRight size={12} /></a></div><time dateTime={event.created_at}>{dateLabel(event.created_at)}</time></article>) : <div className="activity-empty">No recent public events were returned. This doesn't mean no coding happened—private activity isn't exposed here.</div>}
      </div>
    </section>
    <div className="github-note"><span className="note-mark">↳</span><p><strong>Public data, honest context.</strong> Repository stats and activity are fetched from GitHub’s unauthenticated public API. Private repositories and private contributions are not shown; rate limits may temporarily affect refreshes.</p></div>
  </div>
}
