import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getConsent, setConsent } from '../lib/consent.js'
import { initAnalytics } from '../lib/analytics.js'
import './CookieConsent.css'

const REOPEN_EVENT = 'kz-cookie-consent-reopen'

export function reopenCookieConsent() {
  window.dispatchEvent(new Event(REOPEN_EVENT))
}

function CookieConsent() {
  const [visible, setVisible] = useState(() => getConsent() === null)

  useEffect(() => {
    function handleReopen() {
      setVisible(true)
    }
    window.addEventListener(REOPEN_EVENT, handleReopen)
    return () => window.removeEventListener(REOPEN_EVENT, handleReopen)
  }, [])

  function handleAccept() {
    setConsent('accepted')
    initAnalytics()
    setVisible(false)
  }

  function handleDecline() {
    setConsent('rejected')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cookie-consent" role="dialog" aria-label="Cookie consent">
      <p className="cookie-consent__text">
        We use cookies for analytics and advertising to understand site traffic and improve our
        marketing. You can accept or decline non-essential cookies at any time. See our{' '}
        <Link to="/privacy-policy">Privacy Policy</Link> for details.
      </p>
      <div className="cookie-consent__actions">
        <button type="button" className="btn btn--ghost" onClick={handleDecline}>
          Decline
        </button>
        <button type="button" className="btn btn--accent" onClick={handleAccept}>
          Accept
        </button>
      </div>
    </div>
  )
}

export default CookieConsent
