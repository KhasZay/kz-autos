import './PageHero.css'

function PageHero({ eyebrow, title, lead }) {
  return (
    <section className="page-hero">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h1>{title}</h1>
      {lead && <p className="page-hero__lead">{lead}</p>}
    </section>
  )
}

export default PageHero
