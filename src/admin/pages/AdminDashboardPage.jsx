import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero.jsx'

function AdminDashboardPage() {
  return (
    <>
      <PageHero eyebrow="Admin" title="Dashboard" />
      <div className="admin-form__actions">
        <Link className="btn btn--accent" to="/admin/vehicles">
          Manage Vehicles
        </Link>
        <Link className="btn btn--ghost" to="/admin/blog">
          Manage Blog Posts
        </Link>
      </div>
    </>
  )
}

export default AdminDashboardPage
