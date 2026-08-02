const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID
const META_PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID

let initialized = false

function loadGoogleAnalytics(measurementId) {
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    window.dataLayer.push(arguments)
  }
  window.gtag('js', new Date())
  // send_page_view disabled — this is an SPA, so page views are sent manually
  // on each route change via trackPageView() instead of only on initial load.
  window.gtag('config', measurementId, { send_page_view: false })
}

function loadMetaPixel(pixelId) {
  window.fbq =
    window.fbq ||
    function fbq() {
      ;(window.fbq.queue = window.fbq.queue || []).push(arguments)
    }
  window._fbq = window._fbq || window.fbq

  const script = document.createElement('script')
  script.async = true
  script.src = 'https://connect.facebook.net/en_US/fbevents.js'
  document.head.appendChild(script)

  window.fbq('init', pixelId)
}

export function initAnalytics() {
  if (initialized) return
  initialized = true

  if (GA_MEASUREMENT_ID) loadGoogleAnalytics(GA_MEASUREMENT_ID)
  if (META_PIXEL_ID) loadMetaPixel(META_PIXEL_ID)
}

export function trackPageView(path) {
  if (window.gtag) {
    window.gtag('event', 'page_view', { page_path: path, page_title: document.title })
  }
  if (window.fbq) {
    window.fbq('track', 'PageView')
  }
}
