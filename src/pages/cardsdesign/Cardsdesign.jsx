import React from "react";
import Image from "../../images/dr-ashish-mazumdar.jpg";
import Image1 from "../../images/dr-manisa-sahu.jpg";
import Image2 from "../../images/dr-shilpameshram.jpg";
import Image3 from "../../images/dr-santosh.jpg";
import Image4 from "../../images/dr-shishiragrawal.jpg";
import Image5 from "../../images/dr-shreshtha-tiwari.jpg";
import Image6 from "../../images/dr-jayesh-sharma.jpg";
import Image7 from "../../images/dr-jay-kumar-rai.jpg";
import Image8 from "../../images/dr-sandeep-ojha.jpg";
import Spl from "../../images/logo-11.png";
import "./cardsdesign.css";

const Cards = () => {
  return (
    <div>
      <h1 className="style6">OUR SPECIALITIES</h1>
      <div className="logo6">
        <img src={Spl} alt="" />
      </div>

      <div class="row">
        <div class="col-sm-6 col-lg-4">
          <div className="mac">
            <div className="cardsde">
              <div className="imgbox">
                <img className="imag1" src={Image} alt="" />
              </div>
              <div className="content">
                <h5>Dr. Ashish Mazumdar</h5>
                {/* <p>Pain and Palliativ Care</p> */}
                <div class="text-center ">
                  <button type="button" class="btn btn-dark btn-sm">
                  <h10><a href="/booking" >Book Appointment</a></h10>
                  </button>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-4">
          <div className="mac">
            <div className="cardsde">
              <div className="imgbox">
                <img className="imag1" src={Image1} alt="" />
              </div>
              <div className="content">
                <h5>Dr.Manisa Sahu</h5>
                <div class="text-center ">
                  <button type="button" class="btn btn-dark btn-sm">
                  <h10><a href="/booking" >Book Appointment</a></h10>
                  </button>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-4">
          <div className="mac">
            <div className="cardsde">
              <div className="imgbox">
                <img className="imag1" src={Image2} alt="" />
              </div>
              <div className="content">
                <h5>Dr. Shilpa Meshram</h5>
                <div class="text-center ">
                  <button type="button" class="btn btn-dark btn-sm">
                  <h10><a href="/booking" >Book Appointment</a></h10>
                  </button>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-4">
          <div className="mac">
            <div className="cardsde">
              <div className="imgbox">
                <img className="imag1" src={Image3} alt="" />
              </div>
              <div className="content">
                <h5>Dr.Santosh Tharwani</h5>
                <div class="text-center ">
                  <button type="button" class="btn btn-dark btn-sm">
                  <h10><a href="/booking" >Book Appointment</a></h10>
                  </button>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-4">
          <div className="mac">
            <div className="cardsde">
              <div className="imgbox">
                <img className="imag1" src={Image4} alt="" />
              </div>
              <div className="content">
                <h5>Dr.Shishir Agrawal</h5>
                <div class="text-center ">
                  <button type="button" class="btn btn-dark btn-sm">
                  <h10><a href="/booking" ></a>Book Appointment</h10>
                  </button>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-4">
          <div className="mac">
            <div className="cardsde">
              <div className="imgbox">
                <img className="imag1" src={Image5} alt="" />
              </div>
              <div className="content">
                <h5>Dr.Shreshtha Tiwari</h5>
                <div class="text-center ">
                  <button type="button" class="btn btn-dark btn-sm">
                  <h10><a href="/booking" >Book Appointment</a></h10>
                  </button>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-4">
          <div className="mac">
            <div className="cardsde">
              <div className="imgbox">
                <img className="imag1" src={Image6} alt="" />
              </div>
              <div className="content">
                <h5>Dr.Jayesh Sharma</h5>
                <div class="text-center ">
                  <button type="button" class="btn btn-dark btn-sm">
                  <h10><a href="/booking" >Book Appointment</a></h10>
                  </button>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-4">
          <div className="mac">
            <div className="cardsde">
              <div className="imgbox">
                <img className="imag1" src={Image7} alt="" />
              </div>
              <div className="content">
                <h5>Dr.Jay Kumar Rai</h5>
                <div class="text-center ">
                  <button type="button" class="btn btn-dark btn-sm">
                  <h10><a href="/booking" >Book Appointment</a></h10>
                  </button>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-4">
          <div className="mac">
            <div className="cardsde">
              <div className="imgbox">
                <img className="imag1" src={Image8} alt="" />
              </div>
              <div className="content">
                <h5>Dr.Sandeep Ojha</h5>
                <div class="text-center ">
                  <button type="button" class="btn btn-dark btn-sm">
                  <h10><a href="/booking" >Book Appointment</a></h10>
                  </button>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
