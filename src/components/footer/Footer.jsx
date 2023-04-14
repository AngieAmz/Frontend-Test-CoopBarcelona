import React from 'react'
import './footer.css'
import {BsFacebook, BsTwitter, BsInstagram, BsLinkedin} from 'react-icons/bs'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-links">
          <ul className="footer-list">
            <li><a href="/documentation">Documentation</a></li>
            <li><a href="/faqs">FAQs</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
          </ul>
          <div className="social-media">
            <p className='cta'>Follow us on social media:</p>
            <ul className="social-media-list">
              <li><a href="https://www.facebook.com/CryptoSave"><BsFacebook/></a></li>
              <li><a href="https://twitter.com/CryptoSave"><BsTwitter/></a></li>
              <li><a href="https://www.instagram.com/CryptoSave"><BsInstagram/></a></li>
              <li><a href="https://www.linkedin.com/company/CryptoSave"><BsLinkedin/></a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 CryptoSave. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
