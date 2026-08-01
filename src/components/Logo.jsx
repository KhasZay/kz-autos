import kzLogo from '../assets/brand/kz-logo.png'
import './Logo.css'

function Logo({ size = 'md' }) {
  return (
    <img
      src={kzLogo}
      alt="KZ Autos Ltd"
      className={`logo logo--${size}`}
    />
  )
}

export default Logo
