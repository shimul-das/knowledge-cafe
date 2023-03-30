import React, { useEffect, useState } from 'react'
import Blog from '../Blog/Blog';
import './blogs.css'
const Blogs = () => {
const [blogs,setblogs]=useState([])
useEffect(()=>{
fetch('blogs.json')
.then(res=>res.json())
.then(data=>setblogs(data))
},[]);
return (
<div className='shopContainer'>
    <div className='productContainer'>
    {
        blogs.map(blog=><Blog key={blog.id} product={blog}></Blog>)
        }
    </div>
    <div className='cartContainer'>
        <h1>Summary</h1>
       
    </div>

</div>
)
}

export default Blogs