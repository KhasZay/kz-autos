import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import { supabase } from '../lib/supabaseClient.js'
import './BlogPage.css'

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-NG', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function BlogPage() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    let cancelled = false

    supabase
      .from('blog_posts')
      .select('id, slug, title, excerpt, created_at')
      .eq('published', true)
      .order('created_at', { ascending: false })
      .then(({ data, error: fetchError }) => {
        if (cancelled) return
        if (fetchError) setError(true)
        else setPosts(data)
        setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="News & Insights"
        lead="Buying guides, market updates, and dealership news."
      />

      <div className="blog-layout">
        {loading && <p className="blog-status">Loading posts…</p>}
        {error && <p className="blog-status">Unable to load posts right now — please check back shortly.</p>}
        {!loading && !error && posts.length === 0 && (
          <p className="blog-status">No posts yet — check back soon.</p>
        )}

        {!loading && !error && posts.length > 0 && (
          <div className="blog-list">
            {posts.map((post) => (
              <Link key={post.id} to={`/blog/${post.slug}`} className="blog-card">
                <p className="blog-card__date">{formatDate(post.created_at)}</p>
                <h2 className="blog-card__title">{post.title}</h2>
                {post.excerpt && <p className="blog-card__excerpt">{post.excerpt}</p>}
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default BlogPage
