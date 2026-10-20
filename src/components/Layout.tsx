import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { ArrowUpRight, ChevronUp, Menu, X } from 'lucide-react'
import PortfolioAssistant from './PortfolioAssistant'

const nav = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/skills', label: 'Skills' },
  { to: '/github', label: 'GitHub' },
  { to: '/contact', label: 'Contact' },
]

export default function Layout() {
  const [open, setOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showTopButton, setShowTopButton] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  useEffect(() => {
    const updateScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0)
      setShowTopButton(window.scrollY > 420)
    }
    updateScroll()
    window.addEventListener('scroll', updateScroll, { passive: true })
    window.addEventListener('resize', updateScroll)
    return () => {
      window.removeEventListener('scroll', updateScroll)
      window.removeEventListener('resize', updateScroll)
    }
  }, [location.pathname])
  return (
    <div className="site-shell">
      <div className="reading-progress" aria-hidden="true"><span style={{ transform: `scaleX(${scrollProgress / 100})` }} /></div>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <div className="noise" aria-hidden="true" />
      <div className="topline"><span><i className="status-dot" /> OPEN TO INTERESTING PROJECTS</span><span className="topline-right">INDIA · IST <span className="topline-separator">/</span> BUILDING WITH INTENT</span></div>
      <header className="navbar wrap">
        <Link to="/" className="brand" aria-label="Sumit Sharma home"><span className="brand-mark">S<span>.</span></span><span className="brand-name">SUMIT SHARMA<small>BACKEND × AI ENGINEER</small></span></Link>
        <nav className="desktop-nav" aria-label="Main navigation">{nav.map(item => <NavLink key={item.to} to={item.to} end={item.end} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>{item.label}</NavLink>)}</nav>
        <Link to="/contact" className="nav-cta">Let’s talk <ArrowUpRight size={15} /></Link>
        <button className="mobile-menu-button" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(v => !v)}>{open ? <X /> : <Menu />}</button>
      </header>
      {open && <nav className="mobile-nav wrap" aria-label="Mobile navigation">{nav.map(item => <NavLink key={item.to} to={item.to} end={item.end} className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>{item.label}<ArrowUpRight size={16} /></NavLink>)}</nav>}
      <main id="main-content">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={location.pathname} className="route-transition"
            initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -7, filter: 'blur(2px)' }}
            transition={{ duration: 0.24, ease: 'easeOut' }}>
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <button className={`back-to-top ${showTopButton ? 'is-visible' : ''}`} type="button" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><ChevronUp size={18} /><span>TOP</span></button>
      <PortfolioAssistant />
      <footer className="footer wrap"><Link to="/" className="footer-brand"><span className="brand-mark">S<span>.</span></span><span>Designed to think. Developed to ship.</span></Link><div className="footer-right"><span>© {new Date().getFullYear()} SUMIT SHARMA</span><a href="https://github.com/sumit-2218" target="_blank" rel="noreferrer">GITHUB <ArrowUpRight size={12} /></a><a href="https://www.linkedin.com/in/sumit-kumar-44558a290/" target="_blank" rel="noreferrer">LINKEDIN <ArrowUpRight size={12} /></a></div></footer>
    </div>
  )
}
