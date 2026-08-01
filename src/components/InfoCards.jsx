import './InfoCards.css'

function InfoCards({ items }) {
  return (
    <div className="info-cards">
      {items.map((item) => (
        <div className="info-card" key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  )
}

export default InfoCards
