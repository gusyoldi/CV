import React from 'react'
import ProyectCard from './ProyectCard/ProyectCard'



export default function Portfolio() {
  return (
    <section className="container m-0 p-0">
    <div className="row bg-dark">
      <div data-bs-spy="scroll" data-bs-target="#simple-list-example" data-bs-offset="0" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0" className="row text-center text-primary">
        <h1 className='text-primary text-decoration-underline py-5' id="portfolio">Portfolio</h1>
      </div>
      <div className='row'>
      <ProyectCard />
      <ProyectCard />
      <ProyectCard />
    </div>
    </div>
    </section>
  )
}
