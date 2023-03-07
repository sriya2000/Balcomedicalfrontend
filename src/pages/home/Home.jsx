import React from 'react'
import Slider from '../../components/Slider'
import Specialities from '../../pages/specialities/Specialities'
import Doctor from '../../pages/doctors/Doctor'
import Cardsdesign from '../../pages/cardsdesign/Cardsdesign'
import './home.css'


const Home = () => {
  return (
    <div>
    <Slider/>
    <Specialities/>
    {/* <Doctor/> */}
    <Cardsdesign />
   
    </div>
  )
}

export default Home