import React from "react";
import "./About.css";
import about_img from "../../img/banner-4.webp";
import about_img2 from "../../img/banner-3.webp";
import Service_top_section from "../Service_Page/service_mid_section/Service_top_section";
const About_section = () => {
  return (
    <div className="about_page">
      <div className="container">
        <div className="row">
          
          <div className="col-lg-6">
            <h3>About Us</h3>
            <h2>Teapot with black  <span className='theme-color'>TEA</span></h2>
            <br />

            <p>
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum omnis voluptas assumenda.
            </p>
            

            <li>Fully padded back panel, web hauded handle</li>
            <li>Internal padded sleeve fits 15″ laptop</li>
            <li>Internal tricot lined tablet sleeve</li>
            <li>One large main compartment and zippered</li>
            <li>Premium cotton canvas fabric</li>
          </div>
          <div className="col-lg-6 pt-5">
            <img className="img-fluid" src={about_img} alt="" />
          </div>
        </div>

        <div className="row">
            <Service_top_section></Service_top_section>
        </div>

        <div className="row mb-5 mt-5 pt-5">
        
          <div className="col-lg-6">
            <img className="img-fluid" src= {about_img2} alt="" />
          </div>
          <div className="col-lg-6">
            <h4 className='theme-color'>ARRIVLE SUNGLASSES</h4>
            <h2>Customize you chasmish</h2>
            <br />

            <p>
            When an unknown printer took a galley of type and scrambled it to make a type specimen book. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.
            </p>
            
        <br />
      
        <a href="#" className='btn btn-primary btn-lg'>Learn More</a>
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default About_section;
