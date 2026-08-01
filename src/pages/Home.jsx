import { Link } from 'react-router-dom'
import BrandStatement from '../components/BrandStatement.jsx'
import InfoCards from '../components/InfoCards.jsx'
import CtaBanner from '../components/CtaBanner.jsx'
import './Home.css'

const WHY_US = [
  {
    title: 'Wide Selection',
    description:
      'Nigerian used, foreign used, and brand new vehicles updated weekly.',
  },
  {
    title: 'Fair Financing',
    description: 'Competitive rates and plans tailored to your budget.',
  },
  {
    title: 'Trade-Ins Welcome',
    description: 'Get a same-day valuation on your current vehicle.',
  },
]

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero__content">
          <p className="eyebrow">Quality Used &amp; New Vehicles</p>
          <h1>Drive Away Today In Your Next Car</h1>
          <p className="hero__lead">
            KZ Autos Ltd stocks a hand-inspected range of vehicles, backed by
            flexible financing and honest trade-in valuations.
          </p>
          <div className="hero__actions">
            <Link className="btn btn--accent" to="/inventory">
              Browse Inventory
            </Link>
            <Link className="btn btn--ghost" to="/services">
              Our Services
            </Link>
          </div>
        </div>
      </section>

      <BrandStatement />

      <section className="home-why">
        <div className="home-why__header">
          <p className="eyebrow">Why KZ Autos</p>
          <h2>Built On Trust</h2>
        </div>
        <InfoCards items={WHY_US} />
      </section>

      <CtaBanner
        title="Ready to find your next vehicle?"
        actionLabel="Browse Inventory"
        to="/inventory"
      />
    </>
  )
}

export default Home
