import './VehicleCard.css'

function VehicleCard({ vehicle }) {
  return (
    <div className="vehicle-card">
      <div className="vehicle-card__media">
        {vehicle.image ? (
          <img
            className="vehicle-card__photo"
            src={vehicle.image}
            alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
          />
        ) : (
          <svg viewBox="0 0 64 40" className="vehicle-card__icon" aria-hidden="true">
            <path
              fill="currentColor"
              d="M8 28a4 4 0 1 0 8 0 4 4 0 0 0-8 0Zm40 0a4 4 0 1 0 8 0 4 4 0 0 0-8 0ZM6 26l4-11a4 4 0 0 1 3.7-2.5h20.6a4 4 0 0 1 3.2 1.6l7.5 9.9 6-1a3 3 0 0 1 3.5 2.9V26a2 2 0 0 1-2 2h-4a6 6 0 0 0-11.6 0H21.6a6 6 0 0 0-11.6 0H8a2 2 0 0 1-2-2Zm12-13-3 8h11v-8h-8Zm11 0v8h8.3l-5.6-7.4a1 1 0 0 0-.8-.6H29Z"
            />
          </svg>
        )}
      </div>
      <div className="vehicle-card__body">
        <p className="vehicle-card__title">
          {vehicle.year} {vehicle.make} {vehicle.model}
        </p>
        {vehicle.color && <p className="vehicle-card__meta">{vehicle.color}</p>}
        <p className="vehicle-card__meta">{vehicle.mileage}</p>
        <p className="vehicle-card__price">{vehicle.price}</p>
      </div>
    </div>
  )
}

export default VehicleCard
