import React from 'react'
import NavBar from './components/navbar/NavBar'
import Header from './components/header/Header'
import About from './components/about/About'
import Services from './components/services/Services'
import Subscribe from './components/subscribe/Subscribe'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <About />
      <Services />
      <Subscribe/>
      <Footer/> 
    </div>
  )
}

export default App
