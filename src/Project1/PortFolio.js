import React from 'react'
import res from "../image/residental.jpg"
import com from "../image/commercial.jpg"
import "./PortFolio.css"

function PortFolio() {
  return (
    <>
     <div className='projectType'>
        <h1>Project</h1>
        <div className='project'>
          <div className='residantal'>
            <a href=''> <img src={res}></img></a>
            <h2><a href=''>Residantal Project</a></h2>
          </div>
          <div className='commercial'>
            < a href=''><img src={com}></img></a>
            <h2><a href=''>Commercial Project </a></h2>
          </div>
        </div>
      </div>
      <div className='projectDital'>
        <div className='residantalDital'>

        </div>
        <div className='commercialDital'>
          
        </div>
      </div>

    </>
  )
}

export default PortFolio