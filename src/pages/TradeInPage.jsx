import PageHero from '../components/PageHero.jsx'
import InfoCards from '../components/InfoCards.jsx'
import CtaBanner from '../components/CtaBanner.jsx'

const STEPS = [
  {
    title: 'Same-Day Valuation',
    description: 'Bring your vehicle in and get a straightforward trade-in value the same day.',
  },
  {
    title: 'Any Make or Model',
    description: 'We accept trade-ins across most makes, models, and condition levels.',
  },
  {
    title: 'Apply Value Instantly',
    description: 'Put your trade-in value straight toward any vehicle in our inventory.',
  },
]

function TradeInPage() {
  return (
    <>
      <PageHero
        eyebrow="Trade-In"
        title="Trade Up With Confidence"
        lead="Trade in your current vehicle toward your next purchase and put the value straight into your new car."
      />
      <InfoCards items={STEPS} />
      <CtaBanner title="Ready to trade in?" actionLabel="Start Your Trade-In" to="/contact" />
    </>
  )
}

export default TradeInPage
