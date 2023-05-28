import React from 'react'
import '../../pages/style.css';
import { Container } from 'react-bootstrap'

function Contactpage() {
  return (
    <div className='contactbackground'>
      <Container>
        <h2 className='contacthead'>Get In Touch</h2>
        <p className='contactpara'> I’m currently searching for opportunities for a software engineering  role. <br /> If there is any vacancy my inbox is always open. <br /> If you have any further questions you can inbox me anytime, <br /> I’ll get back to you as soon as possible!</p>
        <button
          className='contactbtn'
          onClick={() => {
            window.open("https://wa.me/+14378331398");
          }}
        >Inbox Me Here</button>
        <span></span>
        <hr className='line' />
        <p className='copyright'>© Copyright 2023.  
        <br /> 
        Designed & Built by <span>Samia Jahan</span></p>
      </Container>
    </div>
  )
}

export default Contactpage