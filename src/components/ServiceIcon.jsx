const PATHS = {
  car: (
    <path d="M3 16V12.5a2 2 0 0 1 .3-1L5 8a2 2 0 0 1 1.8-1.1h10.4A2 2 0 0 1 19 8l1.7 3.5a2 2 0 0 1 .3 1V16a1 1 0 0 1-1 1h-1.2M3 16a1 1 0 0 0 1 1h1.2M3 16v2a1 1 0 0 0 1 1h1.8M20 16v2a1 1 0 0 1-1 1h-1.8M6 17h12M4.5 8.5h15" />
  ),
  coin: (
    <>
      <circle cx="8" cy="9" r="5" />
      <path d="M9 20a5 5 0 1 0 0-10M4 15.5a5 5 0 0 0 9 3" />
    </>
  ),
  swap: (
    <path d="M4 7h13l-3-3m3 3-3 3M20 17H7l3 3m-3-3 3-3" />
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12.5 2.5 2.5L16 9.5" />
    </>
  ),
  document: (
    <>
      <path d="M7 3h7l4 4v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
      <path d="M14 3v4h4M9 12h6M9 16h6" />
    </>
  ),
  wrench: (
    <path d="M14.5 6.5a4 4 0 0 0-5.4 4.6L4 16.2V20h3.8l5.1-5.1a4 4 0 0 0 4.6-5.4l-2.6 2.6-2-2 2.6-2.6Z" />
  ),
}

function ServiceIcon({ name }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="service-card__icon"
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

export default ServiceIcon
