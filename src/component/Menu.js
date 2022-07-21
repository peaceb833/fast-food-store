import React from 'react'
 import ivan from './images/ivan-torres-MQUqbmszGGM-unsplash.jpg';
 import giorgi from './images/giorgi-iremadze-5ZR4DxAG3RQ-unsplash.jpg';
 import dennis from './images/dennis-klein-FzB_512zvP0-unsplash.jpg';
 import lucas from './images/lucas-andrade-3Uj0GwVmOeY-unsplash.jpg';
 import juice from './images/wesual-click-eXdKs9d37Sc-unsplash.jpg';
  import  chicken from './images/meelan-bawjee-A_tPBct4tz8-unsplash.jpg';
  import smoothie from './images/rirri-R4zSXgDZLEU-unsplash.jpg';
  import toast from './images/jonathan-pielmayer-XZUqPMLHvzw-unsplash.jpg';
import {Link} from 'react-scroll';
const Menu = () => {
  return (
     

<div id="menu">
    <h2 className="our-menu-title" id="menu">Our Menu</h2>
        <div className=" list">
            <div  className='' >
                <div class="cat  px-1  text-center">
                    <Link to='pizza'>
                        <div class="cat-image ">
                            <img className=" img"  width="80px" height="70px"  src={ivan} alt="" />
                                </div>
                                    <a href="pizza.html" class="menu-title"> pizza</a></Link>
                                        </div>
                                            </div>
                  
                  <div>
                 <div >
                 <img className="img" src={giorgi} alt="" />
                 </div>
                
                 <a href="#" class="menu-title"> burger</a>
  
                 </div>


         <div>
             <div>
                 <div>
                 <img className="img-special img" src={dennis} alt="" />
                 </div>
                 <a href="#" class="menu-title"> sauce</a>
             </div>
         </div>
      
         <div  >
             <div>
                 <div>
                <img className=" img" src={lucas} alt="" />
                 </div> 
                 <a href="#"  class="menu-title" > fried chicken</a>
             </div>
         </div>

         <div  >
             <div >
                 <div class="cat-image ">
                     <img class=" img"  src={juice} alt=""/>
                 </div>
                 <a href="#" class="menu-title">juice</a>
             </div>
         </div>

         <div  >
             <div >
                 <div class="cat-image ">
                    <img class=" img" src={chicken} alt="" />
                 </div> 
                 <a href="#" class="menu-title">chicken/chips</a>
             </div>
         </div>
         <div  >
             <div class="cat">
                 <div class="cat-image ">
      <img class="img"  src={smoothie} alt="" />
                 </div> 
                 <a href="#" class="menu-title"> smoothie</a>
             </div>
         </div>
         <div  >
            
         <div >
    <div class="cat    text-center">
        <div class="cat-image ">
           <img class=" img"  src={toast} alt=""/>
        </div>
        <a href="#" class="menu-title"> toast</a>
    </div>
</div>
            
            
            
            
            </div>
            </div>
        </div>
   



  
  )
}

export default Menu