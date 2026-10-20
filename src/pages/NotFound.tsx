import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
export default function NotFound() { return <div className="wrap not-found"><span className="section-kicker">404 / OFF THE MAP</span><h1>This route took a<br /><span className="text-gradient">wrong turn.</span></h1><p>The page you’re looking for isn’t here. Let’s get you back to something useful.</p><Link to="/" className="button-primary"><ArrowLeft size={16} /> Back to home</Link></div> }
