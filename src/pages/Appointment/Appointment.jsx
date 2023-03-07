import React from 'react'
import { Container } from 'react-bootstrap'
import {CardSubtitle, CardText,Card,CardBody,Button } from 'reactstrap'
import './appointment.css'
import axios from 'axios'
import { toast } from 'react-toastify'

const Appointment = ({appointment,update}) => {

  // const updateAppointment=(appointmentId)=>{
  //   axios.update(`${appointment_base_url}/appointment/${appointmentId}`).then(
  //     (response)=>{
  //       console.log(response.data);
  //     }
  //   )
  // }

  const appointment_base_url = "http://localhost:1001";
  const deleteAppointment=(appointmentId)=>{
     axios.delete(`${appointment_base_url}/appointment/${appointmentId}`).then(
      (response)=>{
        toast.success("Appointment is Deleted")
        update(appointmentId);

      },
      (error)=>{
        toast.error("Appointment not deleted!!Server problem");

      }
     )
  }
  return (
    <Card>
        <CardBody className='text-center'>
            <CardSubtitle className='font-weight-bold'>{appointment.title}</CardSubtitle>
            <CardText><h4>Patient id:</h4>{appointment.patientId}<br></br>
            <h4>Doctor id:</h4>{appointment.doctorId}<br></br>
            <h4>Appointment Date:</h4>{appointment.appointmentDate}<br></br>
            <h4>Appointment Slots:</h4>{appointment.appointmentSlot}<br></br>
            <h4>Message:</h4>{appointment.message}<br></br>
            </CardText>
            <Container className='text-center'>
                <Button className='btn3' color='danger' onClick={()=>{
                  deleteAppointment(appointment.appointmentId);
                }}>Delete</Button>
                <Button className='btn4' color='warning' 
                >Update</Button>
            </Container>
        </CardBody>
    </Card>
  )
}

export default Appointment