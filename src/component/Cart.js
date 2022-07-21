import React from 'react'
import './Cart.css'
import  img1 from './images/wrap-fajita-burrito-shawarma-hamburger-grilled-food-e38298b99f4f8ccc94ee73cf211a562d.png'
import  img2 from './images/pngegg (3).png'
import  img3 from './images/pngegg.png'
import  img4 from './images/pngegg (1).png'
import  img5 from './images/hawaiian-pizza-ham-pepperoni-meat-pizza-b00b8a822b46a542a8daa653175f86b2.png'
import  img6 from './images/french-fries-pizza-sushi-potato-hamburger-french-fries-aedc768d793440c4eb2a83bf6d415beb.png'
import  img7 from './images/rirri-R4zSXgDZLEU-unsplash.jpg'
import  img8 from './images/rirri-R4zSXgDZLEU-unsplash.jpg'
import { Link } from 'react-scroll'

const Cart = () => {
  return (
    <>
  
  
    <div className='featured'>
<h1  className='featured-item'>Featured item</h1>
<div className='featured-container' >
        
             <div class="featured-img-container">
                 <div class="cat-image ">
                 <img src={img1} className="featured-img" />
                 <h5 className=' featured-img-container-title'>ice-cream with flavour</h5>
                 <p className='amount'><span className='span'>$</span>600</p>
                 <Link><button className='featured-btn'>Order</button></Link>
                 </div>
                
             </div>
             
             
                  <div  class="featured-img-container">
                 <div >   
               <img src={img2}  className="featured-img" />
               <h5 className=' featured-img-container-title'>ice-cream with flavour</h5>
               <p className='amount'><span className='span'>$</span>500</p>
               <Link><button className='featured-btn'>Order</button></Link>
                 </div>
  
                 </div>



             <div class="featured-img-container">
                 <div>
                 <img src={img3}  className="featured-img  spech" />
                 <h5 className=' featured-img-container-title'>ice-cream with flavour</h5>
                <p className='amount'><span className='span'>$</span>500</p>
                  <Link><button className='featured-btn'>Order</button></Link>
                 </div>
                 
             </div>
        
      
        
             <div  class="featured-img-container">
                 <div>
                 <img src={img4}   className="featured-img spech2"  />
                 <h5 className=' featured-img-container-title'>ice-cream with flavour</h5>
             <p className='amount'><span className='span'>$</span>500</p>
             <Link><button className='featured-btn'>Order</button></Link>
                 </div> 
                
             </div> 

       
             <div  class="featured-img-container">
                 <div >
                 <img src={img5}   className="featured-img spech2" />
                 <h5 className=' featured-img-container-title'>ice-cream with flavour</h5>
                 <p className='amount'><span className='span'>$</span>500</p>
                 <Link><button className='featured-btn'>Order</button></Link>
                 </div>
                
             </div>
        

        
             <div  class="featured-img-container">
                 <div >
                 <img src={img6}   className="featured-img spech2" />
                 <h5 className=' featured-img-container-title'>ice-cream with flavour</h5>
                <p className='amount'><span className='span'>$</span>500</p>
                <Link><button className='featured-btn'>Order</button></Link>
                 </div> 
                
             </div>
         </div>
           </div>
        
   

    </>
  )
}

export default Cart