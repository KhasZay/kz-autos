import { useState } from 'react'
import { CATEGORIES, VEHICLES } from '../data/vehicles.js'
import VehicleCard from './VehicleCard.jsx'
import './Inventory.css'

function Inventory() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].key)

  const filtered = VEHICLES.filter((v) => v.category === activeCategory)

  return (
    <section className="inventory" id="inventory">
      <div className="inventory__header">
        <p className="eyebrow">Our Stock</p>
        <h2>Browse By Category</h2>
      </div>

      <div className="inventory__tabs">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.key}
            type="button"
            className={`inventory__tab${
              activeCategory === cat.key ? ' inventory__tab--active' : ''
            }`}
            onClick={() => setActiveCategory(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="inventory__grid">
        {filtered.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>
    </section>
  )
}

export default Inventory
