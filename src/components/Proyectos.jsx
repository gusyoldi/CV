import React from 'react'
import ProyectCard from './ProyectCard'



export default function Proyectos() {
  return (
    <div className="row bg-dark">
      <div className="row text-center text-warning">
        <h1>Proyectos</h1>
      </div>
      <div className='row'>
      <ProyectCard />
      <ProyectCard />
      <ProyectCard />
    </div>
    </div>
  )
}
