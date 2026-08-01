import { SERVICES } from '../data/services.js'
import ServiceIcon from './ServiceIcon.jsx'
import './Services.css'

function Services() {
  return (
    <section className="services" id="services">
      <div className="services__header">
        <p className="eyebrow">What We Offer</p>
        <h2>Our Services</h2>
      </div>

      <div className="services__grid">
        {SERVICES.map((service) => (
          <div className="service-card" key={service.id}>
            <div className="service-card__icon-wrap">
              <ServiceIcon name={service.icon} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            {service.items && (
              <ul className="service-card__list">
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
