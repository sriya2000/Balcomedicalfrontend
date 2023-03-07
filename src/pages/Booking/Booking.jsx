import React, { useState } from "react";
import {
  Card,
  CardHeader,
  Button,
  Col,
  Row,
  Form,
  CardBody,
  FormGroup,
  Container,
  Label,
  Input,
} from "reactstrap";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from "react-toastify";
import './booking.css'


const Booking = () => {
  const [user, setUser] = useState({});

  
  //creating handler function
  const handleForm = (e) => {
    console.log(user);
    saveLogin(user);
    e.preventDefault();
  };

  //creating function to post data on server
  const appointment_base_url = "http://localhost:1001";
  const saveLogin = (data) => {
    axios.post(`${appointment_base_url}/appointment`, data).then(
      (response) => {
        console.log(response);
        toast.success("Appointment Booked",{
          position:'bottom-center'});
      },
      (error) => {
        console.log(error);
        
        toast.error("Appointment not Booked",{
          position:'bottom-center'
        });
      }
    )
  }

  return (
    <div>
      <ToastContainer></ToastContainer>
      <Container className="form">
        <Row className="mt-4">
          <Col sm={{ size: 12, offset: 1 }}>
            <Card color="secondary" inverse>
              <CardHeader className="text-center">
                <h3>Book Appointment</h3>
              </CardHeader>
              <CardBody>
                <Form onSubmit={handleForm}>
                  <FormGroup>
                    <Label for="number">Patient Id</Label>
                    <Input
                      type="text"
                      placeholder="Enter your Patient id"
                      id="patientId"
                      onChange={(e) => {
                        setUser({ ...user, patientId: e.target.value });
                      }}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="number">Doctor Id</Label>
                    <Input
                      type="number"
                      placeholder="Enter your Doctor id"
                      id="doctorId"
                      onChange={(e) => {
                        setUser({ ...user, doctorId: e.target.value });
                      }}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="date">Date</Label>
                    <Input
                      type="date"
                      placeholder="Enter Appointment Date"
                      id="appointmentDate"
                      onChange={(e) => {
                        setUser({ ...user, appointmentDate: e.target.value });
                      }}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="radio">Appointment Slots</Label>
                    <div className="form-check">
                      <input
                        type="radio"
                        className="form-check-input"
                        id="appointmentSlot"
                        name="appointmentSlot"
                        value="12:00"
                        onChange={(e) => {
                          setUser({ ...user, appointmentSlot: e.target.value });
                        }}
                      />
                      12:00
                    </div>
                    <div className="form-check">
                      <input
                        type="radio"
                        className="form-check-input"
                        id="appointmentSlot"
                        name="appointmentSlot"
                        value=" 1:00"
                        onChange={(e) => {
                          setUser({ ...user, appointmentSlot: e.target.value });
                        }}
                      />
                      1:00
                    </div>
                    <div className="form-check">
                      <input
                        type="radio"
                        className="form-check-input"
                        id="appointmentSlot"
                        name="appointmentSlot"
                        value="1:30"
                        onChange={(e) => {
                          setUser({ ...user, appointmentSlot: e.target.value });
                        }}
                      />
                      1:30
                    </div>
                    <div className="form-check">
                      <input
                        type="radio"
                        className="form-check-input"
                        id="appointmentSlot"
                        name="appointmentSlot"
                        value="3:00"
                        onChange={(e) => {
                          setUser({ ...user, appointmentSlot: e.target.value });
                        }}
                      />
                      3:00
                    </div>
                    <div className="form-check">
                      <input
                        type="radio"
                        className="form-check-input"
                        id="appointmentSlot"
                        name="appointmentSlot"
                        value="3:30"
                        onChange={(e) => {
                          setUser({ ...user, appointmentSlot: e.target.value });
                        }}
                      />
                      3:30
                    </div>
                  </FormGroup>
                
                  <FormGroup>
                    <Label for="text">Message</Label>
                    <Input
                      type="text"
                      placeholder="Enter any message"
                      id="message"
                      onChange={(e) => {
                        setUser({ ...user, message: e.target.value });
                      }}
                    />
                  </FormGroup>
                  <Container className="text-center">
                    <Button color="success" type="submit">
                      Book Appointment
                    </Button>
                    <Button color="danger" type="reset" className="ms-2">
                      Reset
                    </Button>
                    <Button color="success" type="reset" className="ms-2" >
                    <a className="ms" href="/viewappointment">View Appointment</a>
                      
                    </Button>
                  </Container>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Booking;
