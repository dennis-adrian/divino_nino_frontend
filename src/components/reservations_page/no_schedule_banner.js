import React from 'react'

const NoScheduleBanner = ({date}) => {
  return (
    <div>
      <h5>No hay médico disponible para la especialidad elegida en fecha {date}</h5>
    </div>
  )
}

export default NoScheduleBanner;