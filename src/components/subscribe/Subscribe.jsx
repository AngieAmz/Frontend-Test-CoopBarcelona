import React from 'react'
import './subscribe.css'

function Subscribe() {
  return (
    <div className="container newsletter-container">
      <h3 className="newsletter-title">~Subscribe to our newsletter~</h3>
      <p className="newsletter-description">Stay up-to-date with the latest news and 
      updates. Receive timely information directly in your inbox, including important announcements, new features, and exclusive 
      promotions. </p>
      <form className="newsletter-form">
        <input type="email" className="newsletter-input" placeholder="Enter your email" />
        <button type="submit" className="btn btn-primary">Suscribe</button>
      </form>
    </div>
  )
}

export default Subscribe
