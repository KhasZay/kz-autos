import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PageHero from '../../components/PageHero.jsx'
import { supabase } from '../../lib/supabaseClient.js'

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

const BLANK_FORM = {
  title: '',
  slug: '',
  excerpt: '',
  body: '',
  published: true,
}

function AdminBlogFormPage() {
  const { id } = useParams()
  const isEditing = Boolean(id)
  const navigate = useNavigate()

  const [form, setForm] = useState(BLANK_FORM)
  const [slugTouched, setSlugTouched] = useState(isEditing)
  const [existingCoverUrl, setExistingCoverUrl] = useState('')
  const [coverFile, setCoverFile] = useState(null)
  const [loading, setLoading] = useState(isEditing)
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    if (!isEditing) return

    supabase
      .from('blog_posts')
      .select('*')
      .eq('id', id)
      .single()
      .then(({ data, error }) => {
        if (error || !data) {
          setErrorMessage('Post not found.')
        } else {
          setForm({
            title: data.title,
            slug: data.slug,
            excerpt: data.excerpt || '',
            body: data.body,
            published: data.published,
          })
          setExistingCoverUrl(data.cover_image_url || '')
        }
        setLoading(false)
      })
  }, [id, isEditing])

  function updateField(field, value) {
    setForm((current) => ({ ...current, [field]: value }))
  }

  function handleTitleChange(value) {
    setForm((current) => ({
      ...current,
      title: value,
      slug: slugTouched ? current.slug : slugify(value),
    }))
  }

  function handleSlugChange(value) {
    setSlugTouched(true)
    updateField('slug', value)
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('saving')
    setErrorMessage('')

    let coverUrl = existingCoverUrl

    if (coverFile) {
      const path = `blog/${crypto.randomUUID()}-${coverFile.name}`
      const { error: uploadError } = await supabase.storage.from('media').upload(path, coverFile)

      if (uploadError) {
        setStatus('error')
        setErrorMessage(uploadError.message)
        return
      }

      coverUrl = supabase.storage.from('media').getPublicUrl(path).data.publicUrl
    }

    const payload = {
      title: form.title,
      slug: form.slug,
      excerpt: form.excerpt || null,
      body: form.body,
      published: form.published,
      cover_image_url: coverUrl || null,
    }

    const { error: saveError } = isEditing
      ? await supabase.from('blog_posts').update(payload).eq('id', id)
      : await supabase.from('blog_posts').insert(payload)

    if (saveError) {
      setStatus('error')
      setErrorMessage(saveError.message)
      return
    }

    navigate('/admin/blog')
  }

  if (loading) {
    return (
      <>
        <PageHero eyebrow="Admin" title={isEditing ? 'Edit Post' : 'Add Post'} />
        <p className="admin-empty">Loading…</p>
      </>
    )
  }

  return (
    <>
      <PageHero eyebrow="Admin" title={isEditing ? 'Edit Post' : 'Add Post'} />
      <form className="admin-form" onSubmit={handleSubmit}>
        <label>
          Title
          <input
            type="text"
            required
            value={form.title}
            onChange={(event) => handleTitleChange(event.target.value)}
          />
        </label>
        <label>
          Slug
          <input
            type="text"
            required
            value={form.slug}
            onChange={(event) => handleSlugChange(event.target.value)}
          />
        </label>
        <label>
          Excerpt
          <textarea
            rows="2"
            value={form.excerpt}
            onChange={(event) => updateField('excerpt', event.target.value)}
          />
        </label>
        <label>
          Body
          <textarea
            rows="10"
            required
            value={form.body}
            onChange={(event) => updateField('body', event.target.value)}
          />
        </label>
        <label>
          Cover Image
          <input type="file" accept="image/*" onChange={(event) => setCoverFile(event.target.files[0] || null)} />
        </label>
        {existingCoverUrl && !coverFile && (
          <img src={existingCoverUrl} alt="Current cover" className="admin-form__preview" />
        )}
        <label className="admin-form__checkbox">
          <input
            type="checkbox"
            checked={form.published}
            onChange={(event) => updateField('published', event.target.checked)}
          />
          Published
        </label>

        <div className="admin-form__actions">
          <button className="btn btn--accent" type="submit" disabled={status === 'saving'}>
            {status === 'saving' ? 'Saving…' : 'Save Post'}
          </button>
        </div>
        {status === 'error' && <p className="admin-error">{errorMessage}</p>}
      </form>
    </>
  )
}

export default AdminBlogFormPage
