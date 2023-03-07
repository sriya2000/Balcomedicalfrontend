import React from "react";
import Image from "../../images/free-pick-drop.jpg";
import './pick.css'

const Pickdrop = () => {
  return (
    <div>
      <section className="about_story">
      <div className="about__section-content">
            <h1 className="name1">Free Pick & Drop</h1>
          </div>

            <p className="text1">
              Many patients those who’re travelling from outside Raipur and
              travelling from city to Balco Medical Centre at Naya Raipur, the
              hospital offers free pick up and drop facility from Raipur City
              railway station. Additionally, for needy patients, hospital also
              offers subsidized lodging facility called ‘Sukh Saray’ within the
              hospital premises.
            </p>
            <div className="container1 about__section-container2">
          <div className="about__section-image3">
            <img src={Image} alt="Story " />
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Pickdrop;
