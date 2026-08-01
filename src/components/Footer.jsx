import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import './Footer.css'

function Footer() {
  return (
    <footer className="site-footer">
      <Logo size="sm" />
      <p className="footer__tagline">Your Complete Automotive Partner</p>
      <nav className="footer__links">
        <Link to="/inventory">Inventory</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </footer>
  )
}

export default Footer
