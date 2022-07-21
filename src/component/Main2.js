import React from 'react'
import  denis  from './images/dennis-klein-FzB_512zvP0-unsplash.jpg'
import  engin  from './images/engin-akyurt-g1MG9i0ux8Y-unsplash.jpg'
import './Main.css'


const Main2 = () => {
  return (
    <div>

<div className="explore-food" >
     
     <h2 class=" explore">Explore Our Food </h2>
     <p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quaerat <br />pariatur perferendis enim. Eius debitis, iure rem accusantium quasi quibusdam ratione nobis omnis reiciendis natus! Veniam incidunt voluptate unde id?</p>
  </div>


  <div className="main-container">

    
      <div className="cont1">
                   <div class="">
                   <img class="img-fluid" src={denis} alt="" />
                 </div>
              
       <div className='text'>
         <h6  className='reason'><b>reason you should try out our weight gain sauce</b></h6> 
          <p className='sub-reason'>  Lorem ipsum dolor sit amet consectetur adipisicing elit.  fugiat culpa non assumenda. Laboriosam id sod ex?</p>
            <button class="read-more-btn">Read more</button>
              </div>
                 </div>

         
            <div className="cont1">
               <div class="">
                 <img class="img-fluid" src={engin} alt="" />
                   </div>
                      <div  className='text'>
                         <h6 className='reason'><b>have you tried out our burger  </b></h6> 
                        <p class=" sub-reason"> Lorem ipsum dolor sit amet adipisicing elit fugiat culpa non assumenda. Laboriosam id saepe quod ex?</p>
                      <button class="read-more-btn   read">Read more</button>
                     </div>
                       </div>
                        </div>
                          
                </div>
  )
}

export default Main2