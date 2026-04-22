import React from "react";
import { FaHome } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineLaptop } from "react-icons/ai";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      <div className="footer-section d-flex justify-content-evenly bg-black text-light p-3">
        <div>
          <h3>Vado Tech</h3>
          <p>
            your trusted hub for gadgets,<br /> tech solutions, and innovation. <br /> We
            deliver Quality and reliability.
          </p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Service</li>
            <li>About </li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <p><FaHome /> Lagos, Nigeria</p>
          <p><MdEmail /> adeboyekayode112@gmail.com</p>
          <p><FaPhoneAlt /> 09010194473</p>
        </div>
        <div>
          <h3>Follow Us</h3>
          <p className="footer-p"><FaSquareFacebook /><AiFillTikTok /><FaTwitter /><FaInstagram /></p>
        </div>
      </div>
      <div>
        <div className="footer bg-dark text-light d-flex justify-content-between fs-5 p-2">
          <h5>@ 2026 VADO TECHNOLOGY</h5>
          <h5>Design by Vado <AiOutlineLaptop /></h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;
