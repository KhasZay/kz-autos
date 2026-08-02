import { useEffect } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useAdminAuth } from '../context/AdminAuthContext.jsx'
import '../admin.css'
import './AdminLayout.css'

function setMetaRobots(content) {
  let el = document.head.querySelector('meta[name="robots"]')
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', 'robots')
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function AdminLayout() {
  const { signOut } = useAdminAuth()
  const navigate = useNavigate()

  useEffect(() => {
    document.title = 'Admin | KZ Autos Ltd'
    setMetaRobots('noindex, nofollow')
  }, [])

  async function handleSignOut() {
    await signOut()
    navigate('/admin/login', { replace: true })
  }

  return (
    <div className="admin-shell">
      <header className="admin-header">
        <span className="admin-header__brand">KZ Autos — Admin</span>
        <nav className="admin-header__nav">
          <NavLink to="/admin" end>
            Dashboard
          </NavLink>
          <NavLink to="/admin/vehicles">Vehicles</NavLink>
          <NavLink to="/admin/blog">Blog</NavLink>
        </nav>
        <button type="button" className="btn btn--ghost" onClick={handleSignOut}>
          Sign Out
        </button>
      </header>
      <main className="admin-main">
        <Outlet />
      </main>
    </div>
  )
}

export default AdminLayout
