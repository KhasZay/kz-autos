import PageHero from '../components/PageHero.jsx'
import { reopenCookieConsent } from '../components/CookieConsent.jsx'
import './PrivacyPolicyPage.css'

const LAST_UPDATED = 'August 2, 2026'

function PrivacyPolicyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" lead={`Last updated: ${LAST_UPDATED}`} />

      <div className="privacy-policy">
        <p>
          This policy explains what information KZ Autos Ltd ("KZ Autos", "we", "us") collects
          through kz-autos.vercel.app (the "Site"), why we collect it, and the choices you have.
        </p>

        <h2>Information We Collect</h2>
        <p>
          <strong>Contact form.</strong> When you submit the form on our{' '}
          <a href="/contact">Contact</a> page, we collect your name, email address, phone number
          (optional), and message. Submissions are processed by our form provider, Formspree, and
          delivered to our email inbox so we can respond to your enquiry. We do not use this
          information for marketing unless you separately contact us to opt in.
        </p>
        <p>
          <strong>Analytics and advertising cookies.</strong> With your consent (see "Cookies" below),
          we use Google Analytics to understand how visitors use the Site and Meta Pixel to measure
          the performance of our Facebook and Instagram advertising. Both set cookies in your
          browser and collect information such as pages visited, general location, device type, and
          referring site.
        </p>
        <p>
          <strong>Browsing KZ Autos Ltd's public pages</strong> (inventory listings, blog posts) does
          not require you to create an account or submit personal information.
        </p>

        <h2>Cookies</h2>
        <p>
          We only load Google Analytics and Meta Pixel after you accept cookies via the banner shown
          on your first visit. If you decline, neither is loaded and no analytics or advertising
          cookies are set. You can change your choice at any time using the{' '}
          <button type="button" className="privacy-policy__link-button" onClick={reopenCookieConsent}>
            Cookie Settings
          </button>{' '}
          link in the site footer. We also store your cookie choice itself in your browser's local
          storage so we remember it on your next visit.
        </p>

        <h2>Third Parties We Use</h2>
        <ul>
          <li>
            <strong>Formspree</strong> — processes and delivers contact form submissions to us.
          </li>
          <li>
            <strong>Google Analytics</strong> — website usage analytics (only after consent).
          </li>
          <li>
            <strong>Meta Pixel</strong> — advertising measurement for our Facebook/Instagram ads
            (only after consent).
          </li>
          <li>
            <strong>Supabase</strong> — hosts our vehicle inventory and blog content database. It
            does not receive or store personal information about site visitors; it is only used
            internally by KZ Autos staff to manage listings.
          </li>
        </ul>
        <p>
          Each of these providers has its own privacy policy governing how it handles data on our
          behalf. We don't sell your personal information to anyone.
        </p>

        <h2>Data Retention</h2>
        <p>
          Contact form submissions are retained for as long as needed to respond to and follow up on
          your enquiry. Analytics data is retained according to Google Analytics' and Meta's
          standard retention settings for our account.
        </p>

        <h2>Your Rights</h2>
        <p>
          Depending on where you're located, you may have rights under applicable data protection
          law — including Nigeria's Data Protection Act — to access, correct, or request deletion of
          personal information we hold about you, and to object to or withdraw consent for
          analytics/advertising cookies at any time via Cookie Settings. To exercise any of these
          rights, contact us using the details below.
        </p>

        <h2>Children's Privacy</h2>
        <p>The Site is intended for a general adult audience and is not directed at children.</p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this policy from time to time. Changes will be posted on this page with an
          updated "Last updated" date.
        </p>

        <h2>Contact Us</h2>
        <p>
          KZ Autos Ltd
          <br />
          Area 8 Garden, Garki, Abuja, Nigeria
          <br />
          Phone: +234 803 371 0193
          <br />
          Email: khazautosltd@gmail.com
        </p>
      </div>
    </>
  )
}

export default PrivacyPolicyPage
