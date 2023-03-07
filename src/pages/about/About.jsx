import React from 'react'
import Header from '../../components/Header'
import HeaderImage from '../../images/about_slider-1.png'
import Image from '../../images/anil-agarwal.png'
import Image2 from '../../images/joyti-agarwal.png'
import Image0 from '../../images/logo-11.png'
import './about.css'

const About = () => {
  return (
    <div className='background'>
    <Header title="Welcome to Balco Medical Centre" image={HeaderImage}>
     <h4 className="fost">A Premier Cancer Hospital</h4>
     Balco Medical Centre (BMC), a 170 bedded state-of-the-art tertiary care Oncology facility in Naya Raipur, is the first flagship initiative of Vedanta Medical Research Foundation (VMRF). VMRF, a non-profit organization, is an initiative of Vedanta Resources and Bharat Aluminium Company Ltd. (BALCO) to contribute towards prevention of cancer and its related illnesses. BMC has brought ultra-modern, multi-modality diagnostic and therapeutic facilities within easy reach of India’s population at an affordable cost. Currently, it is fast emerging as a national leader in India’s oncology space including medical, surgical, radiation, haematological and palliative care.
    </Header>
    <div className='leader'>
      OUR LEADER
      <img className='logo2' src={Image0} alt=""/>
    </div>
  <section className='about_story'>
    <div className="container1 about__section-container">

    <div className="about__section-image">
      <img src={Image} alt='Story '/>
  
    </div>
    <div className="about__section-content">
      <h1 className='name1'>ANIL AGARWAL</h1>
      <h3 className='chairman'>Chairman - Vedanta Resources</h3>
      <p>A first-generation industrialist, Anil Agarwal has built Vedanta into a globally diversified natural resources group committed to sustainable development.Throughout his career he has fostered a work philosophy that marries stakeholder value with inclusive growth of local communities.

       Vedanta group companies have supported over 4,00,000 women and children through education, nutrition and empowerment programmes. Additionally, hospitals, mobile health centres, and rural health posts supported by the group have provided healthcare for another 2.2 million people. Mr. Agarwal now intends to expand this medical support through the Vedanta Cancer Hospital and Research Centre.</p>
     </div>
    </div>
  </section>
  <section className='about_story'>
    <div className="container1 about__section-container1">

    <div className="about__section-content1">
      <h1 className='name2'>JYOTI AGARWAL</h1>
      <h3 className='chairperson'>Chairperson - Vedanta Medical Research Foundation</h3>
      <p>For over 20 years, Mrs. Jyoti Agarwal has been involved in the delivery of sustainable solutions that make a genuine difference to individuals and society. An experienced, strategic philanthropist, she has played a lead role in building the Sterlite Tech Foundation and the Agarwal family trust by combining her passion for empowerment and upliftment with a rigorous approach to driving impact.

       Mrs. Agarwal spearheaded the development of BALCO Medical Centre. Her vision has been critical in driving the Centre's ambition to create a world class oncology facility that provides superior-quality treatment at an affordable price for all.</p>
     </div>
     <div className="about__section-image">
      <img src={Image2} alt='Story '/>
  
    </div>
    </div>
  </section>
    </div>
  )
}

export default About