import React from "react";

const Contact = () => {
  return (
    <div>
      <aside>
        <div>
          <h1 className="aside-h1 text-center pt-5 ">Locate Us</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d938.968731603364!2d3.336256944913807!3d6.628058608452783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b91672d335d93%3A0x3aa49ed571588ce0!2sIjaiye%20Rd%2C%20Lagos!5e0!3m2!1sen!2sng!4v1776678513581!5m2!1sen!2sng"
            width=""
            height=""
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
         className="map" ></iframe>
        </div>
        <div>
            <form action="" className="message">
                <input type="text"  placeholder=" Your Name"/><br />
                <input type="email"  placeholder="Your Email"/><br />
                <input type="text"   placeholder="Your Message"/>
                <input type="submit" value="Send Message" />
            </form>
        </div>
      </aside>
    </div>
  );
};

export default Contact;
