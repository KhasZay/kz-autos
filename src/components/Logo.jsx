import './Logo.css'

function Logo({ size = 'md' }) {
  return (
    <div className={`logo logo--${size}`}>
      <span className="logo__mark">KZ</span>
      <span className="logo__word">
        AUTOS
        <span className="logo__suffix">LTD</span>
      </span>
    </div>
  )
}

export default Logo
