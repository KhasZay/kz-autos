import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero.jsx'
import { supabase } from '../../lib/supabaseClient.js'

function AdminBlogPage() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    loadPosts()
  }, [])

  async function loadPosts() {
    setLoading(true)
    const { data, error: fetchError } = await supabase
      .from('blog_posts')
      .select('*')
      .order('created_at', { ascending: false })

    if (fetchError) {
      setError(true)
    } else {
      setError(false)
      setPosts(data)
    }
    setLoading(false)
  }

  async function handleDelete(id) {
    if (!window.confirm('Delete this post? This cannot be undone.')) return

    const { error: deleteError } = await supabase.from('blog_posts').delete().eq('id', id)
    if (!deleteError) {
      setPosts((current) => current.filter((post) => post.id !== id))
    }
  }

  return (
    <>
      <PageHero eyebrow="Admin" title="Blog Posts" />
      <div className="admin-toolbar">
        <Link className="btn btn--accent" to="/admin/blog/new">
          Add Post
        </Link>
      </div>

      {loading && <p className="admin-empty">Loading posts…</p>}
      {error && <p className="admin-error">Unable to load posts right now.</p>}
      {!loading && !error && posts.length === 0 && <p className="admin-empty">No posts yet.</p>}

      {!loading && !error && posts.length > 0 && (
        <table className="admin-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>{post.published ? 'Published' : 'Draft'}</td>
                <td className="admin-table__actions">
                  <Link to={`/admin/blog/${post.id}`}>Edit</Link>
                  <button type="button" onClick={() => handleDelete(post.id)}>
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

export default AdminBlogPage
