import React from 'react';
import { Link } from 'react-scroll';
const Next = () => {
  return (
    <div>
    <footer id='about'>
<div className='footer'>

        <div class="re"><p class="last-title">About Us</p>
          <ul class="remove mt-3">
            <Link to='/' className="info"> <li>Our Story</li></Link>
             <a href="#" className="info"><li>What we do</li></a>
             <a href="#" className="info" > <li>Our goal</li></a>
              <a href="#"  className="info"><li>Partners</li></a>
</ul>
</div>
        <div class=" re">
          <p class="last-title">Shop info</p>
          <ul class="remove ">
        <a href="#"  className="info"> <li>Our Story</li></a>
         <a href="#"  className="info"><li>Policy</li></a>
         <a href="#" className="info"> <li>Career</li></a>
         
</ul>
        </div>
        <div class=" re"><p class="last-title"> Customer Support</p>
        <ul class="remove mt-3">
          <a href="#"  className="info"> <li>complaint</li></a>
           <a href="#"  className="info"><li>Policy</li></a>
           <a href="#" className="info"> <li>talk to an Agent</li></a>
          </ul></div>
        <div class=" re"><p class="last-title">Contact Us</p>
          <ul class="remove mt-3">
            <a href="#"  className="info"> <li>office</li></a>
             <a href="#"  className="info"><li>Address</li></a>
             <a href="#" className="info"> <li>Tel-No</li></a>
          
          
          
</ul>
   </div>
    </div>

 
 
 
    
    </footer>
    <div className='taste'>
<p>&copy; tastymeal</p>
</div>

    </div>
  )
}

export default Next


