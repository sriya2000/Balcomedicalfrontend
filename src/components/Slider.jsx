import React from 'react'
import { Carousel } from 'react-bootstrap'
import image1 from '../images/Banner1.jpg'
import image2 from '../images/Banner2.jpg'
import image3 from '../images/Banner3.jpg'


const Slider = () => {
  return (
    <div>
      <div className='slider'>
    <Carousel fade={true} pause={false}>
    <Carousel.Item interval={2000}>
      <img
        className="d-block w-100"
        src={image1}
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item interval={2000}>
      <img
        className="d-block w-100"
        src={image2}
        alt="Third slide"
      />
    </Carousel.Item>
    <Carousel.Item interval={2000}>
      <img
        className="d-block w-100"
        src={image3}
        alt="Third slide"
      />
    </Carousel.Item>
    </Carousel>
    </div>
    </div>
  )
}

export default Slider