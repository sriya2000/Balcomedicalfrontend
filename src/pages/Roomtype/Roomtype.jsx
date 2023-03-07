import React from "react";
import Image from "../../images/generalward.jpg";
import Image2 from "../../images/private-ward.jpg";
import Image3 from "../../images/super-deluxe-rooms.jpg";
import Image4 from "../../images/suite-rooms.jpg";

import "./roomtype.css";

const Roomtype = () => {
  return (
    <div>
      <section className="about_story">
        <div className="container1 about__section-container">
          <div className="about__section-image">
            <img src={Image} alt="Story " />
          </div>
          <div className="about__section-content">
            <h1 className="name1">General Ward</h1>

            <p>
              The general ward is a spacious, air-conditioned, multi-bed ward
              consisting of 44 beds. Steps are taken to maintain patient privacy
              while allowing patients to benefit from more affordable tariffs
              and still making available all other essential amenities such as
              common waiting area separate for male and female attendants,
              television, and individual side lockers and bedside visitor’s
              chairs, etc. Vedanta group companies have supported over 4,00,000
              women and children through education, nutrition and empowerment
              programmes. Additionally, hospitals, mobile health centres, and
              rural health posts supported by the group have provided healthcare
              for another 2.2 million people. Mr. Agarwal now intends to expand
              this medical support through the Vedanta Cancer Hospital and
              Research Centre.
            </p>
          </div>
        </div>
      </section>
      <section className="about_story">
        <div className="container1 about__section-container">
          <div className="about__section-image">
            <img src={Image2} alt="Story " />
          </div>
          <div className="about__section-content">
            <h1 className="name1">Private Ward</h1>

            <p>
              Private rooms are designed to meet all the basic requirements for
              a single patient with accommodation for one attendant with
              attached bathing facilities. These rooms provide ample space for
              both the patient and the attendant and are designed with large
              windows for natural light. Private rooms are equipped with
              television and an attendant couch with storage.
            </p>
          </div>
        </div>
      </section>
      <section className="about_story">
        <div className="container1 about__section-container">
          <div className="about__section-image">
            <img src={Image3} alt="Story " />
          </div>
          <div className="about__section-content">
            <h1 className="name1">Super Deluxe Rooms</h1>

            <p>
              Deluxe room is designed to give ample space for mobility to the
              patient and accommodation for one attendant with attached bathing
              facilities. The ambience of the room is enhanced by the windows
              that allow abundant natural light and picturesque view. To make
              you feel comfortable, our deluxe rooms are additionally equipped
              with a comfortable sofa, mini refrigerator, cupboard, dressing
              table, kettle, extra storage cabinet, and a centre table.
            </p>
          </div>
        </div>
      </section>
      <section className="about_story">
        <div className="container1 about__section-container">
          <div className="about__section-image">
            <img src={Image4} alt="Story " />
          </div>
          <div className="about__section-content">
            <h1 className="name1">Suite Rooms</h1>

            <p>
              Suite accommodation is designed to meet the privacy of patient and
              their attendants. This room type is a luxury room set with wooden
              finish that includes facilities like a comfortable sofa, mini
              refrigerator, cupboard, dressing table, kettle, television,
              telephone, extra air conditioner, storage cabinet, designer
              hanging pendant lights and a centre table. Additionally, laundry
              services and in-room meals and snacks for one attendant are
              included in the room facilities.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Roomtype;
