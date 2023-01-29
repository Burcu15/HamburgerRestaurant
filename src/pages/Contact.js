import React from 'react'
import Burger5 from '../assets/burger5.jpg'

function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide' style={{backgroundImage:`url(${Burger5})`}}></div>
        <div className='rightSide'>
            <h1>Contact</h1>
            <form Id='contact-from'>
                <label htmlfor='name'>Full Name</label>
                <input name='name' placeholder='Enter Full Name...' type="text"/>
                <label htmlfor='email'>E-mail Adress</label>
                <input name='email' placeholder='Enter an email...' type="email"/>
                <label htmlfor='message'>Massage</label>
                <textarea name='message' placeholder='Enter your message...'></textarea>
                <button type='submit'>Send Message</button>

            </form>
        </div>
    </div>
  )
}

export default Contact