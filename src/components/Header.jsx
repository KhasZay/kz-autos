import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './Logo.jsx'
import './Header.css'

const NAV_LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/inventory', label: 'Inventory' },
  { to: '/buy-a-car', label: 'Buy a Car' },
  { to: '/sell-your-car', label: 'Sell Your Car' },
  { to: '/trade-in', label: 'Trade-In' },
  { to: '/import-on-request', label: 'Import on Request' },
  { to: '/financing', label: 'Financing' },
  { to: '/services', label: 'Services' },
  { to: '/fleet-sales', label: 'Fleet Sales' },
  { to: '/about', label: 'About Us' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <NavLink to="/" className="site-header__logo" onClick={() => setMenuOpen(false)}>
        <Logo />
      </NavLink>

      <button
        type="button"
        className="nav-toggle"
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`nav${menuOpen ? ' nav--open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.end}
            className={({ isActive }) => (isActive ? 'nav__link nav__link--active' : 'nav__link')}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <NavLink className="btn btn--accent site-header__cta" to="/contact">
        Book a Visit
      </NavLink>
    </header>
  )
}

export default Header
