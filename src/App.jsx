import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Login from './pages/login/Login'
import Doctor from './pages/doctors/Doctor'
import Register1 from './pages/register/Register1'
import Navbar from './components/Navbar'
import Booking from './pages/Booking/Booking'
import ViewAppointment from './pages/viewappointment/ViewAppointment'
import Facilities from './pages/Facilities/Facilities'
import  Cardsdesign from './pages/cardsdesign/Cardsdesign'
import Updateuser from './pages/Updateuser/Updateuser'



const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home />}/>
        <Route path='about' element={<About/>}/>
        <Route path='login' element={<Login />}/>
        <Route path='doctor' element={<Doctor/>}/>
        <Route path='register' element={<Register1/>}/>
        <Route path='booking' element={<Booking/>}/>
        <Route path='viewappointment' element={<ViewAppointment/>}/>
        {/* <Route path="/appointment" element={<Appointment appointment={{title:"Appointment",description:"This is your appointment details"}}/>}/> */}
        <Route path='facilities' element={<Facilities/>}/>
        <Route path='cards' element={<Cardsdesign />}/>
        <Route path='update' element={<Updateuser />}/>

      </Routes>
      
      
    </BrowserRouter>
   
    
  )
}

export default App