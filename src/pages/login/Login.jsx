import React from 'react'
import {Form,FormGroup,Label,Input,Button,Row,Col,CardHeader} from 'reactstrap'
import { Container } from 'reactstrap'
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from "react-toastify";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './login.css'


const Login = () => {
  const navigate = useNavigate();


  const [user, setUser] = useState({});
  //creating handler function
  const handleForm = (e) => {
    console.log(user);
    saveLogin(user);
    e.preventDefault();
  };

  //creating function to post data on server
  const login_base_url = "http://localhost:1003";
  const saveLogin = (data) => {
    axios.post(`${login_base_url}/auth/login`, data).then(
      (response) => {
        console.log(response);
        toast.success("Logged in");
        navigate('/booking');
      },
      (error) => {
        console.log(error);
        toast.error("Something went wrong");
      }
    )
  }
  

  return (

    <div className='form'>
    <ToastContainer></ToastContainer>
        <Container>
        <Row className='mt-4'>
        <Col sm={{size:6,offset:3}} >
        <CardHeader className="text-center">
            <h3 className='register'>LOGIN</h3>
        </CardHeader>
        <Form onSubmit={handleForm}>
    <FormGroup floating>
      <Input
        id="exampleEmail"
        name="email"
        placeholder="Email"
        type="email"
        onChange={(e) => {
                        setUser({ ...user,email: e.target.value });
                      }}
      />
      <Label for="exampleEmail">
        Email
      </Label>
    </FormGroup>
    {' '}
    <FormGroup floating>
      <Input
        id="examplePassword"
        name="password"
        placeholder="Password"
        type="password"
        onChange={(e) => {
                        setUser({ ...user,password: e.target.value });
                      }}
      />
      <Label for="examplePassword">
        Password
      </Label>
    </FormGroup>
    
    <Button type="submit" className='btn1' color='success'>
      <a className='a1' >LOGIN</a>
    </Button>
    
  </Form>
  </Col>
  </Row>
  </Container>
  
  </div>
  
  )
}

export default Login