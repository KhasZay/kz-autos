import PageHero from '../components/PageHero.jsx'
import InfoCards from '../components/InfoCards.jsx'
import CtaBanner from '../components/CtaBanner.jsx'

const STEPS = [
  {
    title: 'Volume Pricing',
    description: 'Preferential pricing for multi-vehicle and bulk purchases.',
  },
  {
    title: 'Dedicated Account Manager',
    description: 'A single point of contact to manage your fleet needs from start to finish.',
  },
  {
    title: 'Flexible Delivery Scheduling',
    description: 'Staggered or bulk delivery scheduled around your operations.',
  },
]

function FleetSalesPage() {
  return (
    <>
      <PageHero
        eyebrow="Fleet Sales"
        title="Fleet & Corporate Sales"
        lead="Outfitting a business, ride-hailing fleet, or organization? We offer volume pricing and dedicated account support."
      />
      <InfoCards items={STEPS} />
      <CtaBanner title="Have a fleet to outfit?" actionLabel="Talk to Our Fleet Team" to="/contact" />
    </>
  )
}

export default FleetSalesPage
