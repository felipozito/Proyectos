import React from "react";
import img from "../assets/contact.jpg";
import emailjs from "@emailjs/browser";

const Footer = () => {
      const sendMail = (e) => {
            e.preventDefault();
            emailjs.sendForm("service_80g1n0f", "template_20aqr3g", e.target, "m3BLEhMPMsDNK2bRE").then(
                  () => {
                        console.log("Sent!");
                  },
                  (err) => {
                        console.log(JSON.stringify(err));
                  }
            );
            e.target.reset();
      };
      return (
            <section id="contact">
                  <div className="contact">
                        <div className="contact-form">
                              <h2>Hire Me</h2>
                              <p>I'm availble for Freelance work, Connect with me via phone: 098344314 of felipeasimbaya31@gmail.com</p>
                              <form onSubmit={sendMail}>
                                    <input type="" placeholder="Your Name" required id="name" name="user_name" />
                                    <input type="email" id="mail" name="user_mail" placeholder="Your Email" required />
                                    <input type="phone" name="user_phone" id="phone" placeholder="Your Phone" required />
                                    <textarea id="text_mail" cols="30" rows="10" name="user_messages" placeholder="Your Message" required></textarea>
                                    <button className="send">Submit</button>
                              </form>
                        </div>
                        <div className="contact-img">
                              <img src={img} alt="footerImg" />
                        </div>
                  </div>
            </section>
      );
};

export default Footer;
