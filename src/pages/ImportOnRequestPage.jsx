import PageHero from '../components/PageHero.jsx'
import InfoCards from '../components/InfoCards.jsx'
import CtaBanner from '../components/CtaBanner.jsx'

const STEPS = [
  {
    title: 'Custom Sourcing',
    description: 'Tell us the exact make, model, trim, and spec you want.',
  },
  {
    title: 'Global Network',
    description: 'We source vehicles through a trusted network of international dealers.',
  },
  {
    title: 'Full Clearing & Documentation',
    description: 'Customs clearing, registration, and paperwork handled from start to finish.',
  },
]

function ImportOnRequestPage() {
  return (
    <>
      <PageHero
        eyebrow="Import on Request"
        title="Can't Find It Locally? We'll Import It"
        lead="Looking for a specific vehicle we don't have in stock? We'll source and import it for you."
      />
      <InfoCards items={STEPS} />
      <CtaBanner title="Have a vehicle in mind?" actionLabel="Request a Vehicle" to="/contact" />
    </>
  )
}

export default ImportOnRequestPage
