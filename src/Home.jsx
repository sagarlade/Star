import React from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';
import '../src/style/homes.css';
function Home() {
  return (
    <>
      <section>
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-12 mx-auto h_1">

              <div className="col-md-12 pt-5 pt-lg-0 order-2 order-lg-1 h_2">
              <h3 className="h3_head text-center fw-bold">Grow your Business  With </h3>
                <h1 className='text-center'>StarTechno</h1>

                <h6 className='text-center mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.magnam aliquid veniam.</h6>
                <div className="mt-3 button text-center">
                  <NavLink to="#" className="btn-get-started btn btn-info">Get Started </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION START */}

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
                    <img src="https://mobirise.com/extensions/cyberm5/assets/images/features6.svg" alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* ABOUT SECTION END */}


{/* SERVICE SECTION START */}
      <section>

        <div className="container card-container">
          <div className="headtext">
            <h1 className="service-heading">Service</h1>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="profile-card-4 text-center"><img src="https://mobirise.com/extensions/solutionm4/websolution/assets/images/02.jpg" className="img img-responsive" alt="img" />
                <div className="profile-content">
                  <div className="profile-name">Digital Marketing
                  </div>
                  <div className="profile-description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</div>

                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="profile-card-4 text-center"><img src="https://mobirise.com/extensions/solutionm4/websolution/assets/images/03.jpg" className="img img-responsive" alt="img" />
                <div className="profile-content">
                  <div className="profile-name">Idea & Plans
                  </div>
                  <div className="profile-description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</div>

                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="profile-card-4 text-center"><img src="https://mobirise.com/extensions/solutionm4/websolution/assets/images/04.jpg" className="img img-responsive" alt="img" />
                <div className="profile-content">
                  <div className="profile-name">Prompt Strategies
                  </div>
                  <div className="profile-description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* SERVICE SECTION END */}


{/* TEAM SECTION START */}

      <section>
        <div class="container">
          <h1 className="our_team">OUR TEAM</h1>
          <div class="row mb-5">

            <div class="col-md-4">
              <div class="card profile-1">
                <img src="https://images.pexels.com/photos/946351/pexels-photo-946351.jpeg?w=500&h=650&auto=compress&cs=tinysrgb" alt="profile-sample1" class="background" />
                <img src="https://randomuser.me/api/portraits/women/20.jpg" alt="profile-image" class="profile" />
                <div class="card-content">
                  <h2 className="name">Savannah Fields<small>Front-end Engineer</small></h2>
                  <div class="icon-block">
                    <a href="#"><i class="fa-brands fa-facebook"></i></a>
                    <a href="#"> <i class="fa-brands fa-twitter"></i></a>
                    <a href="#"> <i class="fa-brands fa-google-plus"></i></a>
                    </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card profile-1">
                <img src="https://images.pexels.com/photos/946351/pexels-photo-946351.jpeg?w=500&h=650&auto=compress&cs=tinysrgb" alt="profile-sample1" class="background" />
                <img src="https://mobirise.com/extensions/solutionm4/websolution/assets/images/face2.jpg" alt="profile-image" class="profile" />
                <div class="card-content">
                  <h2 className="name">Lara Dutta<small>UI/UX Designer</small></h2>
                  <div class="icon-block">
                    <a href="#"><i class="fa-brands fa-facebook"></i></a>
                    <a href="#"> <i class="fa-brands fa-twitter"></i></a>
                    <a href="#"> <i class="fa-brands fa-google-plus"></i></a>
                    </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card profile-1">
                <img src="https://images.pexels.com/photos/946351/pexels-photo-946351.jpeg?w=500&h=650&auto=compress&cs=tinysrgb" alt="profile-sample1" class="background" />
                <img src="https://mobirise.com/extensions/solutionm4/websolution/assets/images/face4.jpg" alt="profile-image" class="profile" />
                <div class="card-content">
                  <h2 className="name">John Cena<small>software Engineer</small></h2>
                  <div class="icon-block">
                    <a href="#"><i class="fa-brands fa-facebook"></i></a>
                    <a href="#"> <i class="fa-brands fa-twitter"></i></a>
                    <a href="#"> <i class="fa-brands fa-google-plus"></i></a>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* TEAM SECTION END */}

    </>
  );
}

export default Home;
