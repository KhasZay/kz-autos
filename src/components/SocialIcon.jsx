const PATHS = {
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none" />
    </>
  ),
  facebook: (
    <path
      d="M15 4h-2a4 4 0 0 0-4 4v2H7v3h2v7h3v-7h2.6l.4-3H12V8a1 1 0 0 1 1-1h2Z"
      fill="currentColor"
      stroke="none"
    />
  ),
  whatsapp: (
    <>
      <path d="M7 20 4 21l1-3.2A8 8 0 1 1 12 20a8 8 0 0 1-5-1.8Z" />
      <path
        d="M9.2 9.6c.2-.6.5-1.4 1-1.4h.7c.3 0 .5.2.6.5l.6 1.5a.6.6 0 0 1-.1.6l-.6.7a5 5 0 0 0 2.4 2.4l.7-.6a.6.6 0 0 1 .6-.1l1.5.6c.3.1.5.3.5.6v.7c0 .5-.8.8-1.4 1-1.9.6-4.9-2.4-5.5-4.3-.2-.6-.3-1.2 0-1.2Z"
        fill="currentColor"
        stroke="none"
      />
    </>
  ),
  tiktok: (
    <path
      d="M14 3v10.8a2.6 2.6 0 1 1-2.2-2.6V8.7a5.1 5.1 0 1 0 4.2 5V9.4a6.6 6.6 0 0 0 4 1.3V8.1a4 4 0 0 1-3-1.4A4 4 0 0 1 16 3Z"
      fill="currentColor"
      stroke="none"
    />
  ),
}

function SocialIcon({ name }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="social-link__icon"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  )
}

export default SocialIcon
