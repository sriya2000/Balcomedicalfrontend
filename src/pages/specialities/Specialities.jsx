import React from 'react'
import Spl from '../../images/logo-11.png'
import { Carousel } from 'react-bootstrap'
import img1 from '../../images/Medical.jpg'
import img2 from '../../images/Haemato.jpg'
import img3 from '../../images/Laboratory.jpg'
import img4 from '../../images/Nuclear.jpg'
import img5 from '../../images/Radiation.jpg'

import './specialities.css'

const Specialities = () => {
  return (
    <div>
      <h1 className="style1">OUR SPECIALITIES</h1>
      <div className="logo1">
        <img src={Spl} alt=""/>
      </div>
      <div className="serviceimg">
          <Carousel fade={true} pause={false}>
          <Carousel.Item interval={2000}>
            <div className="imageholder">
              <img src={img1} alt="" />
              
              
             
            </div>
           
            <div className="imageholder">
              <img src={img2} alt="" />
            </div>
           
            <div className="imageholder">
              <img src={img3} alt="" />
            </div>
          
            <div className="imageholder">
              <img src={img4} alt="" />
            </div>
            
            <div className="imageholder">
              <img src={img5} alt="" />
            </div>
           
           
            </Carousel.Item>

            <Carousel.Item interval={2000}>
            <div className="imageholder">
              <img src={img5} alt="" />
            </div>
           
            <div className="imageholder">
              <img src={img2} alt="" />
            </div>
           
            <div className="imageholder">
              <img src={img1} alt="" />
            </div>
          
            <div className="imageholder">
              <img src={img3} alt="" />
            </div>
            
            <div className="imageholder">
              <img src={img4} alt="" />
            </div>
           
           
            </Carousel.Item>
          

            
            </Carousel>
            
          </div>
  
    </div>
  )
}

export default Specialities