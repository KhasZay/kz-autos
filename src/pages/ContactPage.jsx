import { useState } from 'react'
import PageHero from '../components/PageHero.jsx'
import './ContactPage.css'

const CONTACT_DETAILS = [
  { label: 'Address', value: 'Add your dealership address here' },
  { label: 'Phone', value: 'Add your phone number here' },
  { label: 'Email', value: 'Add your email address here' },
  { label: 'Hours', value: 'Mon – Sat, 9am – 6pm' },
]

function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
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

        {submitted ? (
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
            <button className="btn btn--accent" type="submit">
              Send Message
            </button>
          </form>
        )}
      </div>
    </>
  )
}

export default ContactPage
