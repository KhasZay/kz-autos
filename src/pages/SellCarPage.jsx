import PageHero from '../components/PageHero.jsx'
import InfoCards from '../components/InfoCards.jsx'
import CtaBanner from '../components/CtaBanner.jsx'

const STEPS = [
  {
    title: 'Free Vehicle Appraisal',
    description: 'Bring your car in or send us the details for a no-obligation appraisal.',
  },
  {
    title: 'Instant Offer',
    description: 'Get a fair market offer based on your vehicle’s condition and history.',
  },
  {
    title: 'Fast Payment',
    description: 'Accept the offer and get paid quickly, with all paperwork handled for you.',
  },
]

function SellCarPage() {
  return (
    <>
      <PageHero
        eyebrow="Sell Your Car"
        title="Sell Your Car The Easy Way"
        lead="Get a fair, no-obligation offer for your vehicle — whether you're selling outright or trading up."
      />
      <InfoCards items={STEPS} />
      <CtaBanner title="Ready to get an offer?" actionLabel="Get an Offer" to="/contact" />
    </>
  )
}

export default SellCarPage
