import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { supabase } from '../lib/supabaseClient.js'
import { useSeo } from '../hooks/useSeo.js'
import './BlogPostPage.css'

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-NG', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function BlogPostPage() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setNotFound(false)

    supabase
      .from('blog_posts')
      .select('*')
      .eq('slug', slug)
      .eq('published', true)
      .single()
      .then(({ data, error }) => {
        if (cancelled) return
        if (error || !data) setNotFound(true)
        else setPost(data)
        setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [slug])

  useSeo(
    post
      ? {
          title: `${post.title} | KZ Autos Ltd`,
          description: post.excerpt || post.title,
          path: `/blog/${post.slug}`,
        }
      : null,
  )

  if (loading) {
    return (
      <div className="blog-post blog-post--status">
        <p>Loading…</p>
      </div>
    )
  }

  if (notFound) {
    return (
      <div className="blog-post blog-post--status">
        <p>We couldn't find that post.</p>
        <Link className="btn btn--accent" to="/blog">
          Back to Blog
        </Link>
      </div>
    )
  }

  return (
    <article className="blog-post">
      {post.cover_image_url && (
        <img className="blog-post__cover" src={post.cover_image_url} alt={post.title} />
      )}
      <p className="blog-post__date">{formatDate(post.created_at)}</p>
      <h1>{post.title}</h1>
      {post.body.split(/\n\s*\n/).map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      <Link className="btn btn--ghost" to="/blog">
        Back to Blog
      </Link>
    </article>
  )
}

export default BlogPostPage
