import React, { useEffect, useState } from 'react'
import Appointment from '../Appointment/Appointment'
import './viewappointment.css'
import axios from 'axios'
import { toast } from 'react-toastify'


const ViewAppointment = () => {

  //function to call server
  const appointment_base_url = "http://localhost:1001";
  const getAllAppointmentFromServer=()=>{
    axios.get(`${appointment_base_url}/appointment`).then(
      (response)=>{
        console.log(response.data);
        toast.success("Appointments has been loaded",{
          position:'bottom-center'
        })
        setAppointment(response.data);
      },
      (error)=>{
        console.log(error);
        toast.error("Server down",{
          position:'bottom-center'
        })
      }
    )
  }
  //calling loading appointment function
  useEffect(()=>{
    getAllAppointmentFromServer();
  },[]);

  const [appointment,setAppointment]=useState([

   
    // {title:"Appointment",patientId:"1",doctorId:"2",date:"11/06/2022",appointmentSlot:"12:00",message:"urgent"},
    // {title:"Appointment",patientId:"2",doctorId:"3",date:"12/10/2022",appointmentSlot:"3:00",message:"hello"},
    // {title:"Appointment",patientId:"3",doctorId:"1",date:"11/25/2022",appointmentSlot:"1:00",message:"urgent do it "}
  ])


  const removeAppointmentById=(appointmentId)=>{
      setAppointment(appointment.filter((a)=>a.appointmentId !=appointmentId))
  }

  
  return (
    <div>
      <h1 className='textdesign'>APPOINTMENTS LISTS</h1>
      

      {
        appointment.length>0? appointment.map((item)=>(
          <Appointment appointment={item} update={removeAppointmentById}/>
        )):"No Appointments"
      }
    </div>
  )
}

export default ViewAppointment