import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Projects() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2300,
    arrows: true,
    pauseOnHover: true,
  };

  
  const [activeDescriptions, setActiveDescriptions] = useState({
  0: false,
  1: false,
  2: false,
});

const toggleDescription = (index) => {
  setActiveDescriptions((prev) => ({
    ...prev,
    [index]: !prev[index],
  }));
};

  return (
    <section className="projects">
      <h1 className="aname">Projects</h1>

      <div className="project-grid">
        <div className="project-card">
          <button className="add-btn" onClick={() => toggleDescription(0)}>+</button>
          <div className={`description-box ${activeDescriptions[0] ? 'show' : ''}`}>
            <p style={{ fontWeight: "bold", fontSize: "1.5rem" }}>Python, Streamlit, SQL</p>
            <p>Developed a FCFS-based parking system using python with automated slot allocation and real-time fee calculation. Managed vehicle logs using   SQL and optimized queue handling to reduce manual effort.</p>
          </div>

          <h3>Queue Optimizer</h3>
          <Slider {...settings} className="slider">
            <img src="Q1.png" alt="Slide 1" className="carousel-image" />
            <img src="Q2.png" alt="Slide 2" className="carousel-image" />
            <img src="Q3.png" alt="Slide 3" className="carousel-image" />
          </Slider>
        </div>

        <div className="project-card">
          <button className="add-btn" onClick={() => toggleDescription(1)}>+</button>
          <div className={`description-box ${activeDescriptions[1] ? 'show' : ''}`}>
            <p style={{ fontWeight: "bold", fontSize: "1.5rem" }}>HTML, CSS, MongoDB, Python </p>
            <p>Developed an interest-based career prediction system using Python, scikit-learn, and MongoDB. Trained ML models on a custom dataset and built a static questionnaire UI using HTML and CSS with real-time predictions.</p>
          </div>

          <h3>Future YOU</h3>
          <Slider {...settings} className="slider">
            <img src="C1.png" alt="Slide 1" className="carousel-image" />
            <img src="C2.png" alt="Slide 2" className="carousel-image" />
            <img src="C3.png" alt="Slide 3" className="carousel-image" />
          </Slider>
        </div>
          
          
          
        

        <div className="project-card">
          <button className="add-btn" onClick={() => toggleDescription(2)}>+</button>
          <div className={`description-box ${activeDescriptions[2] ? 'show' : ''}`}>
            <p style={{ fontWeight: "bold", fontSize: "1.5rem" }}>ReactJS, TailwindCSS, Javascript, Solidity</p>
            <p>Built a decentralized task management system using Smart contract, Truffle Suite Ganache, React.js, and Metamask with role-based access. Deployed smart contracts for task workflows, integrated IPFS for secure storage, and simulated real-time updates on local network Ganache.</p> 
          </div>

          <h3>DeTaskify</h3>
          <Slider {...settings} className="slider">
            <img src="D1.png" alt="Slide 1" className="carousel-image" />
            <img src="D2.png" alt="Slide 2" className="carousel-image" />
            <img src="D3.png" alt="Slide 3" className="carousel-image" />
          </Slider>
        </div>
        

      </div>
    </section>
  );
}

export default Projects;
