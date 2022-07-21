import React from 'react'
import './Testimony.css'
import lady from './images/unsplash__H6wpor9mjs.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
const Testimony = () => {
  return (
      <>
    <div className='testimony' id='testimony'>
        <h2 className='testimony-title'>Testimonial</h2>
        <div className='test-main-cont'>
        <div className='test-img-cont1'><img src={lady} className="test-img" />
        <div className='line'></div>
        <p className='test-text'>Ordering food here is 100% swift</p>
        </div>
        <div className='test-img-cont2'><img src={lady} className="test-img" />
        <div className='line'></div>
        <p className='test-text'>My food is well cooked.</p>
        </div>
        
    </div>
    <p className='read-more'>Read More..</p>
    </div>
    </>
  )
}

export default Testimony