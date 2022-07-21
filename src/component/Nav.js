import React from 'react';
import peg from  './images/peg.png'
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const Nav = () => {
  function bar(){
  var bars=  document.querySelector('.nav-item')
 
  bars.classList.toggle('ba')
  
  }
  return (
    
    <nav>
      <Link to='/'><img src={peg} className='image' alt='de'/></Link>
     
     
      <ul className='nav-item'>
       <Link to='/'  smooth='true'> <li className='li' >HOME</li></ Link>
       <Link to='menu' smooth='true'> <li className='li' >ORDER</li></ Link>
       <Link to='explore' smooth='true'> <li className='li'>EXPLORE</li></ Link>
       <Link to='testimony'  smooth='true'> <li  className='li'>TESTIMONIES</li></ Link>
       <Link to='about'  smooth='true'> <li  className='li'>ABOUT</li></ Link>
      </ul>
       
       <div className='bars' onClick={bar}><FontAwesomeIcon icon={faBars} /></div>
    </nav>
  )
}

export default Nav