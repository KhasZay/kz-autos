import { useState } from 'react'
import PageHero from '../components/PageHero.jsx'
import './ContactPage.css'

const CONTACT_DETAILS = [
  { label: 'Address', value: 'Area 8 Garden, Garki, Abuja, Nigeria' },
  { label: 'Phone', value: '+234 803 371 0193' },
  { label: 'Email', value: 'khazautosltd@gmail.com' },
  { label: 'Hours', value: 'Mon – Sat, 9am – 6pm' },
]

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mlgqyord'

function ContactPage() {
  const [status, setStatus] = useState('idle')

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(event.target),
      })

      setStatus(response.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get In Touch"
        lead="Have a question about a vehicle or our services? Reach out and our team will respond promptly."
      />

      <div className="contact-layout">
        <dl className="contact-details">
          {CONTACT_DETAILS.map((item) => (
            <div className="contact-details__row" key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>

        {status === 'success' ? (
          <p className="contact-form__success">
            Thanks for reaching out — we'll get back to you shortly.
          </p>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Name
              <input type="text" name="name" required />
            </label>
            <label>
              Email
              <input type="email" name="email" required />
            </label>
            <label>
              Phone
              <input type="tel" name="phone" />
            </label>
            <label>
              Message
              <textarea name="message" rows="4" required />
            </label>
            <button className="btn btn--accent" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>
            {status === 'error' && (
              <p className="contact-form__error">
                Something went wrong sending your message. Please try again or call us directly.
              </p>
            )}
          </form>
        )}
      </div>
    </>
  )
}

export default ContactPage
