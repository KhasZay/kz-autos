import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import CookieConsent from './CookieConsent.jsx'
import { PAGE_SEO, DEFAULT_SEO } from '../data/seo.js'
import { useSeo } from '../hooks/useSeo.js'
import { initAnalytics, trackPageView } from '../lib/analytics.js'
import { getConsent } from '../lib/consent.js'

function Layout() {
  const { pathname } = useLocation()
  const isBlogPost = pathname.startsWith('/blog/') && pathname !== '/blog/'
  const seo = PAGE_SEO[pathname] || (isBlogPost ? null : DEFAULT_SEO)

  useSeo(seo && { ...seo, path: pathname })

  useEffect(() => {
    // Only auto-init for a returning visitor who already said yes — a
    // first-time visitor's "Accept" click in CookieConsent triggers this
    // directly instead of waiting on this effect.
    if (getConsent() === 'accepted') initAnalytics()
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
    trackPageView(pathname)
  }, [pathname])

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CookieConsent />
    </>
  )
}

export default Layout
