import React from "react";
import Image from "../../images/blood-centre.jpeg";
import './bloodcenter.css'

const Bloodcentre = () => {
  return (
    <div>
      <section className="about_story">
      <div className="about__section-content">
            <h1 className="name2">Blood Centre</h1>

          </div>
            <p className="text2">
              Balco Medical Centre’s advanced Blood Centre is equipped with many
              state-of-the-art equipment like Fresenius Comtec Apheresis machine
              with latest cell separation technology, Refrigerated Centrifuge
              for precise blood components separation, Deep freezer’s (-80
              degree centigrade) for FFP and Cryopreservation, Cryobath for
              optimal thawing of blood components and stem cells. It also has
              four automatically adjusted blood Donor couches, ortho workstation
              with glass beads technology based IH work up, Vitros Eci for
              Chemiluminescence-based TTI testing, platelets incubator for
              optimal storage of RDP/SDP, Pneumatic suit system for rapid
              delivery of various blood components, automated blood components
              extractor and laminar airflow system to ensure optimal safety
              while components preparation. The centre follows stringent quality
              norms and is manned by qualified technicians. It is considered one
              of the best and technologically advanced blood centres of
              Chhattisgarh state owing to facilities provided.
            </p>
            <div className="container1 about__section-container4">
          <div className="about__section-image4">
            <img src={Image} alt="Story " />
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Bloodcentre;
