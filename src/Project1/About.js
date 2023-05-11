import React from 'react'
import image1 from "../image/1.jpg"
import image2 from "../image/12.jpg"
import meet1 from "../image/1234.jpg"
import meet2 from "../image/12345.jpg"
import meet3 from "../image/123.jpg"
import meet4 from "../image/12.jpg"

import "./About.css"

function About() {
  return (
    <div className="about">
      <div className="box1">

      </div>
      <div className="box2">
        <div className="box21">
          <img src={image1} alt="" />
          <h1>Abdul khan</h1>
          <h2>(Pricipal Designer)</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate laudantium natus pariatur ipsum, illum quis Voluptate laudantium natus pariatur ipsum, illum quis.</p>
        </div>
        <div className="box21">
          <img src={image2} alt="" />
          <h1>sayana khan</h1>
          <h2>(Pricipal Designer)</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate laudantium natus pariatur ipsum, illum quis
            Voluptate laudantium natus pariatur ipsum, illum quis.</p>
        </div>
      </div>
      <div className='meetTeam'>
        <h1 >Meet Our Team</h1>
        <div className="meet">
          <div className="meet1">
            <a href=''><img src={meet1} alt="" /></a>
            <h1>Ram raj</h1>
            <h2>(Designation)</h2>
          </div>
          <div className="meet1">
            <a href=''><img src={meet2} alt="" /></a>
            <h1>Chen Ho</h1>
            <h2>(Designation)</h2>
          </div>
          <div className="meet1">
            <a href=''><img src={meet3} alt="" /></a>
            <h1>Juhi Li</h1>
            <h2>(Designation)</h2>
          </div>
          <div className="meet1">
            <a href=''><img src={meet4} alt="" /></a>
            <h1>Ptel</h1>
            <h2>(Designation)</h2>
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default About