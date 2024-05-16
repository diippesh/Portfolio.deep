import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/logoo2.png'
import user_icon from '../../assets/user_icon.svg'
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="" style={{ width: "70px" }} />
          <span>Deepesh</span>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder='Enter Your Email' />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          &#169; 2023 Deepesh Bhatiya.All rights reserved
        </p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect With Me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer