import React from 'react'
import './header.css'
import CountDownTimer from './CountDownTimer'

function Header() {
  return (
    <section id='header'>
    <div className='banner'>
      <div className='countdown-banner'>
        <CountDownTimer/>
        <button className='btn btn-primary'>
          JOIN NOW
        </button>
      </div>
        <div className='text-banner'>
            <h1>Earn More with Your Money in Our CS-Coin Savings Pool</h1>
            <p>Looking to maximize your cryptocurrency earnings? 
              Then take advantage of our limited-time offer and 
              receive an additional reward for your savings.
              Deposit any amount and you will get an APR of 40% of your savings, ¡Don't Miss the opportunity! </p>
        </div>
    </div>
        
    </section>
  )
}

export default Header
