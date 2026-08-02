import { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import PageHero from '../../components/PageHero.jsx'
import { useAdminAuth } from '../context/AdminAuthContext.jsx'
import '../admin.css'
import '../components/AdminLayout.css'

function AdminLoginPage() {
  const { session, signIn } = useAdminAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    document.title = 'Admin Sign In | KZ Autos Ltd'
    let meta = document.head.querySelector('meta[name="robots"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'robots')
      document.head.appendChild(meta)
    }
    meta.setAttribute('content', 'noindex, nofollow')
  }, [])

  if (session) {
    return <Navigate to="/admin" replace />
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    const { error } = await signIn(email, password)

    if (error) {
      setStatus('error')
      setErrorMessage(error.message)
      return
    }

    navigate('/admin', { replace: true })
  }

  return (
    <div className="admin-shell">
      <PageHero eyebrow="Admin" title="Sign In" />
      <main className="admin-main">
        <form className="admin-form" onSubmit={handleSubmit}>
          <label>
            Email
            <input
              type="email"
              name="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          <button className="btn btn--accent" type="submit" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Signing in…' : 'Sign In'}
          </button>
          {status === 'error' && <p className="admin-error">{errorMessage}</p>}
        </form>
      </main>
    </div>
  )
}

export default AdminLoginPage
