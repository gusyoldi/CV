import React from 'react'
import proyectImg from '../../../assets/images/proyectImg.jpg'

const styleCards = {
  width: "18rem;"
}

export default function ProyectCard() {
  return (
    <div className='col-md-4 col-sm-12'>
      <div className="card" style={styleCards}>
  <img src={proyectImg} className="card-img-top" alt="proyect-img"/>
  <div className="card-body">
    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat a perferendis molestias dolor fugiat provident, dolorum assumenda, consequuntur, praesentium eaque deleniti optio? Eos dolores eveniet quam tempora aliquid eligendi tempore! Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
  </div>
</div>
    </div>
  )
}
