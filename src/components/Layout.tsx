import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const nav = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/skills', label: 'Skills' },
  { to: '/contact', label: 'Contact' },
]

export default function Layout() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  useEffect(() => { setOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }) }, [location.pathname])
  return (
    <div className="site-shell">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <div className="noise" aria-hidden="true" />
      <div className="topline"><span><i className="status-dot" /> OPEN TO INTERESTING BUILDS</span><span className="topline-right">INDIA · IST <span className="topline-separator">/</span> BUILDING WITH INTENT</span></div>
      <header className="navbar wrap">
        <Link to="/" className="brand" aria-label="Sumit Kumar home"><span className="brand-mark">S<span>.</span></span><span className="brand-name">SUMIT KUMAR<small>BACKEND × AI ENGINEER</small></span></Link>
        <nav className="desktop-nav" aria-label="Main navigation">{nav.map(item => <NavLink key={item.to} to={item.to} end={item.end} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>{item.label}</NavLink>)}</nav>
        <Link to="/contact" className="nav-cta">Let’s talk <ArrowUpRight size={15} /></Link>
        <button className="mobile-menu-button" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(v => !v)}>{open ? <X /> : <Menu />}</button>
      </header>
      {open && <nav className="mobile-nav wrap" aria-label="Mobile navigation">{nav.map(item => <NavLink key={item.to} to={item.to} end={item.end} className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>{item.label}<ArrowUpRight size={16} /></NavLink>)}</nav>}
      <main><Outlet /></main>
      <footer className="footer wrap"><Link to="/" className="footer-brand"><span className="brand-mark">S<span>.</span></span><span>Designed to think. Built to ship.</span></Link><div className="footer-right"><span>© {new Date().getFullYear()} SUMIT KUMAR</span><a href="https://github.com/sumit-2218" target="_blank" rel="noreferrer">GITHUB <ArrowUpRight size={12} /></a><a href="https://www.linkedin.com/in/sumit-kumar-44558a290/" target="_blank" rel="noreferrer">LINKEDIN <ArrowUpRight size={12} /></a></div></footer>
    </div>
  )
}
