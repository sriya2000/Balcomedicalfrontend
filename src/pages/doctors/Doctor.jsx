import React from "react";
import Spl from "../../images/logo-11.png";
import {Card,CardGroup,CardImg,CardBody,CardTitle} from 'reactstrap'
import { Button } from 'reactstrap'
import img1 from "../../images/dr-ashish-mazumdar.jpg";
import img2 from "../../images/dr-bhawna-sirohi.jpg";
import img3 from "../../images/dr-deba-dulal-biswal.jpg";
import img4 from "../../images/dr-dibyendu-de.jpg";
import img5 from "../../images/dr-gourav-gupta.jpg";
import img6 from "../../images/dr-harsha-k-n.jpg";
import img7 from "../../images/dr-jay-kumar-rai.jpg";
import img8 from "../../images/dr-gourav-gupta.jpg";
import img9 from "../../images/dr-manisa-sahu.jpg";
import img10 from "../../images/dr-poulami-choudhury.jpg";
import "./doctor.css";

const Doctor = () => {
  return (
    <div>
      <h1 className="style1">OUR DOCTORS</h1>
      <div className="logo1">
        <img src={Spl} alt="" />
      </div>
      <div>
           {" "}
        <div>
          
          <CardGroup className="cd">
               
            <Card className="cd1">
                 {" "}
              <div className="cimg">
                <CardImg alt="Card image cap" src={img1} top width="80%" /> 
                {" "}
              </div>
                {" "}
              <CardBody>
                  {" "}
                <CardTitle tag="h5">
                   Dr.Ashish mazumdar
                   {" "}
                  <Button className="button">
                     <a href="/booking" >Book Appointment </a>
                  </Button>
                   {" "}
                </CardTitle>
                {" "}
              </CardBody>{" "}
               {" "}
            </Card>
               {" "}
            <Card className="cd1">
               {" "}
              <div className="cimg">
                    <CardImg alt="Card image cap" src={img2} top width="80%" />{" "}
                     {" "}
              </div>
                 {" "}
              <CardBody>
                     {" "}
                <CardTitle tag="h5">
                          Dr.Bhawna Sirohi        {" "}
                  <Button className="button">
                            Book Appointment      {" "}
                  </Button>
                       {" "}
                </CardTitle>
                     {" "}
              </CardBody>{" "}
                   {" "}
            </Card>
             {" "}
            <Card className="cd1">
               {" "}
              <div className="cimg">
                    <CardImg alt="Card image cap" src={img3} top width="80%" /> 
                 {" "}
              </div>
                 {" "}
              <CardBody>
                     {" "}
                <CardTitle tag="h5">
                         Dr.Deba Dulal Biswal        
                  <Button className="button">
                            Book Appointment      {" "}
                  </Button>
                       {" "}
                </CardTitle>
                     {" "}
              </CardBody>{" "}
                       {" "}
            </Card>
             {" "}
            <Card className="cd1">
               {" "}
              <div className="cimg">
                    <CardImg alt="Card image cap" src={img4} top width="80%" /> 
                 {" "}
              </div>
                 {" "}
              <CardBody>
                     {" "}
                <CardTitle tag="h5">
                        Dr.Gaurav Gupta      {" "}
                  <Button className="button">
                            Book Appointment      {" "}
                  </Button>
                       {" "}
                </CardTitle>
                     {" "}
              </CardBody>{" "}
                     {" "}
            </Card>
          </CardGroup>
             {" "}
        </div>
         {" "}
        <div>
             {" "}
          <CardGroup className="cd">
             {" "}
            <Card className="cd1">
               {" "}
              <div className="cimg">
                    <CardImg alt="Card image cap" src={img5} top width="80%" /> 
                 {" "}
              </div>
                 {" "}
              <CardBody>
                     {" "}
                <CardTitle tag="h5">
                         Dr.Harsha K N        
                  <Button className="button">
                            Book Appointment      {" "}
                  </Button>
                       {" "}
                </CardTitle>
                     {" "}
              </CardBody>{" "}
                       {" "}
            </Card>
             {" "}
            <Card className="cd1">
               {" "}
              <div className="cimg">
                    <CardImg alt="Card image cap" src={img6} top width="80%" />{" "}
                     {" "}
              </div>
                 {" "}
              <CardBody>
                     {" "}
                <CardTitle tag="h5">
                          Dr.Jayesh Sharma        {" "}
                  <Button className="button">
                            Book Appointment      {" "}
                  </Button>
                       {" "}
                </CardTitle>
                     {" "}
              </CardBody>{" "}
                     {" "}
            </Card>
                   
            <Card className="cd1">
                 {" "}
              <div className="cimg">
                    <CardImg alt="Card image cap" src={img7} top width="80%" /> 
                 {" "}
              </div>
                 {" "}
              <CardBody>
                     {" "}
                <CardTitle tag="h5">
                          Dr.Jay Kumar Rai        {" "}
                  <Button className="button">
                            Book Appointment      {" "}
                  </Button>
                       {" "}
                </CardTitle>
                     {" "}
              </CardBody>{" "}
                       {" "}
            </Card>
             {" "}
            <Card className="cd1">
               {" "}
              <div className="cimg">
                    <CardImg alt="Card image cap" src={img8} top width="80%" />{" "}
                     {" "}
              </div>
                 {" "}
              <CardBody>
                     {" "}
                <CardTitle tag="h5">
                          Dr.Dibyendu De        {" "}
                  <Button className="button">
                            Book Appointment      {" "}
                  </Button>
                       {" "}
                </CardTitle>
                     {" "}
              </CardBody>{" "}
                   {" "}
            </Card>
             {" "}
          </CardGroup>
             {" "}
        </div>
        
      </div>
    </div>
  );
};

export default Doctor;
