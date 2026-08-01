import PageHero from '../components/PageHero.jsx'
import InfoCards from '../components/InfoCards.jsx'
import CtaBanner from '../components/CtaBanner.jsx'

const STEPS = [
  {
    title: 'Competitive Rates',
    description: 'Partner financing options with rates built around your budget.',
  },
  {
    title: 'Flexible Terms',
    description: 'Choose a repayment plan and term length that fits your finances.',
  },
  {
    title: 'Fast Approval',
    description: 'Get pre-approved quickly so you can drive away sooner.',
  },
]

function FinancingPage() {
  return (
    <>
      <PageHero
        eyebrow="Financing"
        title="Flexible Financing Options"
        lead="We work with trusted partners to get you behind the wheel with a payment plan that fits your budget."
      />
      <InfoCards items={STEPS} />
      <CtaBanner title="Ready to get pre-approved?" actionLabel="Apply for Financing" to="/contact" />
    </>
  )
}

export default FinancingPage
