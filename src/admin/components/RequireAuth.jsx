import { Navigate, Outlet } from 'react-router-dom'
import { useAdminAuth } from '../context/AdminAuthContext.jsx'

function RequireAuth() {
  const { session, loading } = useAdminAuth()

  if (loading) return null
  if (!session) return <Navigate to="/admin/login" replace />

  return <Outlet />
}

export default RequireAuth
