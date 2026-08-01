import PageHero from '../components/PageHero.jsx'
import InfoCards from '../components/InfoCards.jsx'
import CtaBanner from '../components/CtaBanner.jsx'

const STEPS = [
  {
    title: 'Browse Inventory',
    description: 'View our live stock by category — Nigerian used, foreign used, and brand new.',
  },
  {
    title: 'Book a Test Drive',
    description: 'Schedule a viewing and test drive at our lot at a time that works for you.',
  },
  {
    title: 'Get Pre-Approved',
    description: 'Start your financing application before you visit to speed things up.',
  },
]

function BuyCarPage() {
  return (
    <>
      <PageHero
        eyebrow="Buy A Car"
        title="Find Your Next Vehicle"
        lead="Browse our full range of Nigerian used, foreign used, and brand new vehicles — or tell us what you're looking for and we'll help you find it."
      />
      <InfoCards items={STEPS} />
      <CtaBanner title="Ready to browse the lot?" actionLabel="Browse Inventory" to="/inventory" />
    </>
  )
}

export default BuyCarPage
