import React from "react";
import Image from "../../images/friendly-cafeteria.jpg";

const Cafeteria = () => {
  return (
    <div>
      <section className="about_story">
        <div className="container1 about__section-container">
          <div className="about__section-image">
            <img src={Image} alt="Story " />
          </div>
          <div className="about__section-content">
            <h1 className="name1">Eco- friendly Cafeteria</h1>

            <p>
              Balco Medical Centre has a very clean, picturesque and spacious
              cafeteria manned by the Food & Beverage (F&B) department. The
              cafeteria has a comfortable seating capacity for 100 people and
              serves hygienic and nutritious snacks & meals. The F&B department
              of Balco Medical Centre is the only one in Chhattisgarh to be
              awarded Eat Right Campus and 5-star Hygiene Rating by FSSAI.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cafeteria;
