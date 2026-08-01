import PageHero from '../components/PageHero.jsx'
import InfoCards from '../components/InfoCards.jsx'
import CtaBanner from '../components/CtaBanner.jsx'

const PILLARS = [
  {
    title: 'Our Mission',
    description: 'To make finding, financing, and owning a quality vehicle straightforward for every customer.',
  },
  {
    title: 'Our Promise',
    description: 'Every vehicle is hand-inspected, and every deal is transparent from valuation to paperwork.',
  },
  {
    title: 'Our Support',
    description: 'From delivery day onward, our team stays available for service, questions, and support.',
  },
]

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="About KZ Autos Ltd"
        lead="KZ Autos Ltd is your complete automotive partner — from finding the perfect vehicle to financing, registration, delivery, and lifetime after-sales support."
      />
      <InfoCards items={PILLARS} />
      <CtaBanner title="Want to know more?" actionLabel="Get in Touch" to="/contact" />
    </>
  )
}

export default AboutPage
