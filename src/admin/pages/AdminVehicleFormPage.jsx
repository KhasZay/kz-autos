import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PageHero from '../../components/PageHero.jsx'
import { supabase } from '../../lib/supabaseClient.js'
import { CATEGORIES } from '../../data/vehicles.js'

const BLANK_FORM = {
  category: CATEGORIES[0].key,
  make: '',
  model: '',
  year: '',
  price: '',
  mileage: '',
  color: '',
}

function AdminVehicleFormPage() {
  const { id } = useParams()
  const isEditing = Boolean(id)
  const navigate = useNavigate()

  const [form, setForm] = useState(BLANK_FORM)
  const [existingImageUrl, setExistingImageUrl] = useState('')
  const [imageFile, setImageFile] = useState(null)
  const [loading, setLoading] = useState(isEditing)
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    if (!isEditing) return

    supabase
      .from('vehicles')
      .select('*')
      .eq('id', id)
      .single()
      .then(({ data, error }) => {
        if (error || !data) {
          setErrorMessage('Vehicle not found.')
        } else {
          setForm({
            category: data.category,
            make: data.make,
            model: data.model,
            year: String(data.year),
            price: data.price,
            mileage: data.mileage,
            color: data.color || '',
          })
          setExistingImageUrl(data.image_url || '')
        }
        setLoading(false)
      })
  }, [id, isEditing])

  function updateField(field, value) {
    setForm((current) => ({ ...current, [field]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('saving')
    setErrorMessage('')

    let imageUrl = existingImageUrl

    if (imageFile) {
      const path = `vehicles/${crypto.randomUUID()}-${imageFile.name}`
      const { error: uploadError } = await supabase.storage.from('media').upload(path, imageFile)

      if (uploadError) {
        setStatus('error')
        setErrorMessage(uploadError.message)
        return
      }

      imageUrl = supabase.storage.from('media').getPublicUrl(path).data.publicUrl
    }

    const payload = {
      category: form.category,
      make: form.make,
      model: form.model,
      year: Number(form.year),
      price: form.price,
      mileage: form.mileage,
      color: form.color || null,
      image_url: imageUrl || null,
    }

    const { error: saveError } = isEditing
      ? await supabase.from('vehicles').update(payload).eq('id', id)
      : await supabase.from('vehicles').insert(payload)

    if (saveError) {
      setStatus('error')
      setErrorMessage(saveError.message)
      return
    }

    navigate('/admin/vehicles')
  }

  if (loading) {
    return (
      <>
        <PageHero eyebrow="Admin" title={isEditing ? 'Edit Vehicle' : 'Add Vehicle'} />
        <p className="admin-empty">Loading…</p>
      </>
    )
  }

  return (
    <>
      <PageHero eyebrow="Admin" title={isEditing ? 'Edit Vehicle' : 'Add Vehicle'} />
      <form className="admin-form" onSubmit={handleSubmit}>
        <label>
          Category
          <select value={form.category} onChange={(event) => updateField('category', event.target.value)}>
            {CATEGORIES.map((cat) => (
              <option key={cat.key} value={cat.key}>
                {cat.label}
              </option>
            ))}
          </select>
        </label>
        <label>
          Make
          <input
            type="text"
            required
            value={form.make}
            onChange={(event) => updateField('make', event.target.value)}
          />
        </label>
        <label>
          Model
          <input
            type="text"
            required
            value={form.model}
            onChange={(event) => updateField('model', event.target.value)}
          />
        </label>
        <label>
          Year
          <input
            type="number"
            required
            value={form.year}
            onChange={(event) => updateField('year', event.target.value)}
          />
        </label>
        <label>
          Price
          <input
            type="text"
            required
            placeholder="₦9,500,000"
            value={form.price}
            onChange={(event) => updateField('price', event.target.value)}
          />
        </label>
        <label>
          Mileage
          <input
            type="text"
            required
            placeholder="78,000 km"
            value={form.mileage}
            onChange={(event) => updateField('mileage', event.target.value)}
          />
        </label>
        <label>
          Color (optional)
          <input
            type="text"
            value={form.color}
            onChange={(event) => updateField('color', event.target.value)}
          />
        </label>
        <label>
          Photo
          <input type="file" accept="image/*" onChange={(event) => setImageFile(event.target.files[0] || null)} />
        </label>
        {existingImageUrl && !imageFile && (
          <img src={existingImageUrl} alt="Current vehicle" className="admin-form__preview" />
        )}

        <div className="admin-form__actions">
          <button className="btn btn--accent" type="submit" disabled={status === 'saving'}>
            {status === 'saving' ? 'Saving…' : 'Save Vehicle'}
          </button>
        </div>
        {status === 'error' && <p className="admin-error">{errorMessage}</p>}
      </form>
    </>
  )
}

export default AdminVehicleFormPage
