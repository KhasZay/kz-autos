import { Link } from 'react-router-dom'
import './CtaBanner.css'

function CtaBanner({ title, actionLabel, to }) {
  return (
    <section className="cta-banner">
      <h2>{title}</h2>
      <Link className="btn btn--accent" to={to}>
        {actionLabel}
      </Link>
    </section>
  )
}

export default CtaBanner
