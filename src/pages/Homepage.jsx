import React from 'react'
import '../styles/Homepage.css'
import { Link } from 'react-router-dom'
import Dots from '../assets/Vector.svg'
import Photo from '../assets/profilePhoto.png'

function Homepage() {
  return (
    <div className='homepage'>
      <div className="homepage__header">
        <Link className='homepage__header-link' to='https://mail.google.com/mail/u/0/#inbox'>Gmail</Link>
        <Link className='homepage__header-link' to='https://www.google.com/imghp?hl=en&ogbl'>Images</Link>
        <button className='homepage__button-apps'>
          <img style={{height: 16}} src={Dots} alt='Dots'/>
          <img style={{height: 16}} src={Dots} alt='Dots'/>
          <img style={{height: 16}} src={Dots} alt='Dots'/>
        </button>
        <button className='homepage__button-profile'>
          <img style={{height: 32, borderRadius: 50}} src={Photo} alt="ProfilePhoto" />
        </button>
      </div>
      <div className="homepage__body">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  )
}

export default Homepage