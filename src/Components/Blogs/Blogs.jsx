import React, { useEffect, useState } from 'react'
import Blog from '../Blog/Blog';
import Counter from '../Counter/Counter';
import './blogs.css'
const Blogs = () => {
const [blogs,setblogs]=useState([])
const [counter,setCounter]=useState([])
useEffect(()=>{
fetch('blogs.json')
.then(res=>res.json())
.then(data=>setblogs(data))
},[]);
const passDataCounter=(blog)=>{
    event.preventDefault();
    // console.log(blog);
    const newcounter=[...counter, blog]
    setCounter(newcounter);
}
return (
<div className='shopContainer'>
    <div className='productContainer'>
    {
        blogs.map(blog=><Blog key={blog.id} blog={blog} passDataCounter={passDataCounter}></Blog>)
        }
    </div>
    <div className='cartContainer'>
        {/* <Counter blogs={blogs} ></Counter> */}
        {/* <p>Summary:{counter.length}</p> */}
        <Counter counter={counter}></Counter>

       
    </div>

</div>
)
}

export default Blogs