import React from 'react'
import Burger1 from '../assets/burger1.jpg'

function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{backgroundImage:`url(${Burger1})`}}></div>
        <div className='aboutBottom'>
            <h1>About Us</h1>
            <p>We have a so tasty hamburgers... They are delicious... Will you try it!</p>
        </div>
    </div>
  )
}

export default About