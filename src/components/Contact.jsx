import React from "react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <div>
      <div className="contact" id="contact">
        <div>
          <b>Contact</b>
          <h1>Reach Artevol8 now!</h1>
          <p>Feel free to reach out to us using the contact form, and one of our team members will get back to you as soon as possible. Let's turn your ideas into reality together!</p>
          <div className="btn">
            <a href="#about" className="about-lmore">
              Learn More
            </a>
          </div>
        </div>
        <div className="wbox">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea name="" placeholder="Message" id="" cols="30" rows="3"></textarea>
          <button className="sendmsg">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
