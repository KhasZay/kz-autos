const CONSENT_KEY = 'kz-autos-cookie-consent'

export function getConsent() {
  try {
    return localStorage.getItem(CONSENT_KEY)
  } catch {
    return null
  }
}

export function setConsent(value) {
  try {
    localStorage.setItem(CONSENT_KEY, value)
  } catch {
    // ignore storage errors (e.g. private browsing with storage disabled)
  }
}
