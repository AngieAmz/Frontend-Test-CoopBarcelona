import React from 'react'
import './services.css'

function Services() {
  return (
    <section id='services'>
    <div>
      <h1>~What we have for you!~</h1>
         <div className='cards'>
            <div className='card'>
              <h2>High interest rate</h2>
              <p>We offer a competitive interest rate on your cryptocurrency savings, 
              allowing you to earn more CS-Coin while saving on our platform. 
              The more you save, the more you will earn in rewards.</p>
            </div>
            <div className='card'>
              <h2>Exclusive CS-Coin rewards</h2>
              <p>As a member of our savings pool, you will receive rewards in CS-Coin, our own 
              cryptocurrency. These rewards are regularly awarded and deposited directly into your account, 
              allowing you to increase your CS-Coin balance and make the most of your savings.</p>
            </div>
            <div className='card'>
              <h2>Flexibility in savings terms</h2>
              <p>We adapt to your savings needs. You can choose flexible savings terms, from short-term to long-term, 
              according to your preferences and financial goals.</p>
            </div>
            <div className='card'>
              <h2>Security and reliability</h2>
              <p>Our platform is backed by cutting-edge technology and has advanced 
              security measures in place to protect your assets and data. You can trust that 
              your savings will be secure and your transactions will be reliable.</p>
            </div>
         </div>
    </div>
      
    </section>
  )
}

export default Services
