   import React from 'react'


import {Card,CardHeader,Button,Col, Row,Form,CardBody,FormGroup,Container,Label,Input} from 'reactstrap'

import { useState } from 'react'
import axios from 'axios'
import patient_base_url from '../Services/Helper'
import{ toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'

const Register1 = () => {

        const [user,setUser]= useState({});
        const handleForm=(e)=>   {
            console.log(user);
            saveLogin(user)
            e.preventDefault();
        }
        //const patient_base_url ="http://localhost:1003";
        const saveLogin=(data)=> {
            axios.post(`${patient_base_url}/auth/signin/patient`,data).then(
                (response)=>{
                    console.log(response);
                   toast.success("Registered");
                },
                (error)=>{
                    console.log(error);
                    toast.error("Not Registered")
                } 
            )
        }
  return (
    <div>
        
        <ToastContainer></ToastContainer>
    <Container>
    <Row className='mt-4'>
        <Col sm={{size:6,offset:3}} >
        <Card color='light' >
            <CardHeader className="text-center">
                <h3>Register</h3>
            </CardHeader>
            <CardBody>
                <Form  onSubmit={handleForm}>
                    <FormGroup>
                        <Label for="name">Patient Name</Label>
                        <Input type="text"
                        placeholder="Enter your name" 
                        id="name"
                        onChange={(e)=>{
                            setUser({...user,patientName:e.target.value})
                        }
                    }
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email Id</Label>
                        <Input type="email"
                        placeholder="Enter your email-id" 
                        id="email"
                        onChange={(e)=>{
                            setUser({...user,emailId:e.target.value})
                        }
                    }
    
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="number">Phone Number</Label>
                        <Input type="number"
                        placeholder="Enter your phone number" 
                        id="number"
                        onChange={(e)=>{
                            setUser({...user,mobileNo:e.target.value})
                        }
                    }
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password"
                        placeholder="Enter a valid password" 
                        id="password"
                        onChange={(e)=>{
                            setUser({...user,password:e.target.value})
                        }
                    }
                        />
                    </FormGroup>
                    <Container className="text-center">
                    <Button  color="primary" type='submit'>  Register</Button>
                    <Button color="danger" type="reset" className='ms-2'> Reset</Button>
                    </Container>
                    
                </Form>

            </CardBody>
        </Card>
      </Col>
      </Row> 
    </Container>
    </div>
  )
}
  


export default Register1