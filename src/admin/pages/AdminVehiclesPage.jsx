import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero.jsx'
import { supabase } from '../../lib/supabaseClient.js'

function AdminVehiclesPage() {
  const [vehicles, setVehicles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    loadVehicles()
  }, [])

  async function loadVehicles() {
    setLoading(true)
    const { data, error: fetchError } = await supabase
      .from('vehicles')
      .select('*')
      .order('created_at', { ascending: false })

    if (fetchError) {
      setError(true)
    } else {
      setError(false)
      setVehicles(data)
    }
    setLoading(false)
  }

  async function handleDelete(id) {
    if (!window.confirm('Delete this vehicle? This cannot be undone.')) return

    const { error: deleteError } = await supabase.from('vehicles').delete().eq('id', id)
    if (!deleteError) {
      setVehicles((current) => current.filter((vehicle) => vehicle.id !== id))
    }
  }

  return (
    <>
      <PageHero eyebrow="Admin" title="Vehicles" />
      <div className="admin-toolbar">
        <Link className="btn btn--accent" to="/admin/vehicles/new">
          Add Vehicle
        </Link>
      </div>

      {loading && <p className="admin-empty">Loading vehicles…</p>}
      {error && <p className="admin-error">Unable to load vehicles right now.</p>}
      {!loading && !error && vehicles.length === 0 && (
        <p className="admin-empty">No vehicles yet.</p>
      )}

      {!loading && !error && vehicles.length > 0 && (
        <table className="admin-table">
          <thead>
            <tr>
              <th>Vehicle</th>
              <th>Category</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map((vehicle) => (
              <tr key={vehicle.id}>
                <td>
                  {vehicle.year} {vehicle.make} {vehicle.model}
                </td>
                <td>{vehicle.category}</td>
                <td>{vehicle.price}</td>
                <td className="admin-table__actions">
                  <Link to={`/admin/vehicles/${vehicle.id}`}>Edit</Link>
                  <button type="button" onClick={() => handleDelete(vehicle.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  )
}

export default AdminVehiclesPage
