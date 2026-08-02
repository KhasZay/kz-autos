import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import SocialIcon from './SocialIcon.jsx'
import { SOCIAL_LINKS } from '../data/social.js'
import { reopenCookieConsent } from './CookieConsent.jsx'
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
        <Link to="/privacy-policy">Privacy Policy</Link>
        <button type="button" className="footer__link-button" onClick={reopenCookieConsent}>
          Cookie Settings
        </button>
      </nav>
      <div className="footer__social">
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            className="social-link"
          >
            <SocialIcon name={link.icon} />
          </a>
        ))}
      </div>
    </footer>
  )
}

export default Footer
