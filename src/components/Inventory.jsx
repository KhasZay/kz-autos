import { useEffect, useState } from 'react'
import { CATEGORIES } from '../data/vehicles.js'
import { supabase } from '../lib/supabaseClient.js'
import VehicleCard from './VehicleCard.jsx'
import './Inventory.css'

function Inventory() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].key)
  const [vehicles, setVehicles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    let cancelled = false

    supabase
      .from('vehicles')
      .select('*')
      .order('created_at', { ascending: false })
      .then(({ data, error: fetchError }) => {
        if (cancelled) return
        if (fetchError) setError(true)
        else setVehicles(data)
        setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [])

  const filtered = vehicles.filter((v) => v.category === activeCategory)

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

      {loading && <p className="inventory__status">Loading inventory…</p>}
      {error && (
        <p className="inventory__status">Unable to load inventory right now — please check back shortly.</p>
      )}
      {!loading && !error && (
        <div className="inventory__grid">
          {filtered.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      )}
    </section>
  )
}

export default Inventory
