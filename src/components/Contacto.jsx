import React from 'react'

export default function Contacto() {
  return (
    <div className='row justify-content-center bg-dark text-warning'>
    <div className='row text-center'>
      <h2>CONTACTO</h2>
    </div>
    <div className='col-6 text-center '>
    <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Mensaje</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
    </div>
    </div>
  )
}

            // <ul>
            //   <li><i className="fa-solid fa-envelope"></i> yoldi.gustavo@gmail.com</li>
            //   <li>linkedin.com/in/gustavo-yoldi</li>
            //   <li>github.com/gusyoldi</li>
            //   <li>CABA - Villa Urquiza</li>
            // </ul>