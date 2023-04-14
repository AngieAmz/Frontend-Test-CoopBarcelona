import React from 'react'
import './about.css'
import image from '../../assets/image.png'

function About() {
  return (
    <section id='about'>
      <div className='container about__container'>
        <div className="about__us">
          <div className="about__us-image">
            <img src={image} alt='about'/>
          </div>
        </div>
        <div className="about__content">
          <p>Welcome to CryptoSave! Our cryptocurrency platform offers you a savings and lending experience 
          similar to a bank, but with the freedom that only cryptocurrencies can provide.<br/>

          At CryptoSave, you can securely and profitably save your cryptocurrencies in our savings pool, 
          where you will earn a competitive interest rate and have the opportunity to earn rewards in our 
          own cryptocurrency, CS-Coin. You can also choose flexible savings terms that suit your needs and 
          financial goals.<br/>

          But that's not all. At CryptoSave, you can also access loan options using your cryptocurrencies as 
          collateral. We offer competitive interest rates and the ability to obtain financing quickly and 
          conveniently, without going through the complex and slow processes of traditional banks.
          </p>
          <button className='btn btn-primary'>Start Saving!</button>
          <button className='btn'>Read Docs</button>
        </div>
      </div>
    </section>
  )
}

export default About
