import React from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';
import web from './images/about_img.png';
function About() {
  return (
    <>
      <section className="about">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 mt-5 titlepage">
                  <h1 className="head_title1">
                    About Us
                  </h1>
                  <p className="about_page">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo </p>
                  <div className="mt-3 button">
                    <NavLink to="#" className="btn btn-info">Read More </NavLink>
                  </div>
                </div>
                <div className="col-md-5 pt-5 pt-lg-0 order-2 order-lg-1 mx-auto">
                  <div className="about_img">
                    <img src="https://mobirise.com/extensions/cyberm5/digital-agency/assets/images/undraw-web-devices-re-m8sc.svg" alt="img" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 mt-5">
              <div className="row">
                <div className="col-md-5 pt-5 pt-lg-0 order-2 order-lg-1">
                  <div className="about_img">
                    <img src={web} alt="img" />
                  </div>
                </div>
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 mt-5 mx-auto titlepage_1">
                  <h1 className="head_title1">
                    Technology
                  </h1>
                  <p className="about_page">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo </p>
                  <div className="mt-3 button">
                    <NavLink to="#" className="btn btn-info">Read More </NavLink>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
