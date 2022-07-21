import React from 'react'
import Nav from './Nav'



const Net = ( props) => {
    const blogs = props.blogs
    const title = props.title
   

    
  return (
    <div>
      {blogs.map((blog)=>(<li className='joe' key={blog.id}>
     <h1>{title}</h1>
     <h1>{blog.name}</h1>
     <p>{blog.age}</p>
 </li>))}
    </div>
  )
}

export default Net