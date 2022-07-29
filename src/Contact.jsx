import React from 'react';
import './style/contact.css';
function Contact() {
  return (
    <>
      <div className="cont">
        <form class="form">
          <h4 className="Contact_us">CONTACT US</h4>
          <p type="Name:" className="n"><input placeholder="Enter Your Name.." required></input></p>
          <p type="Email:" className="n"><input placeholder="Enter Your Email.." required></input></p>
          <p type="Message:" className="n"><input placeholder="What would you like to tell us.."></input></p>
          <button className="sub">Send Message</button>
          <div className="contact_h">
            <span class="fa fa-phone"></span>001 1023 567
            <span class="fa fa-envelope-o"></span> contact@company.com
          </div>
        </form>
      </div>
    </>

  );
}

export default Contact;
