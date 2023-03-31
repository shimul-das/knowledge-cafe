import React, { useEffect, useState } from 'react'
import Blog from '../Blog/Blog';
import Bookmark from '../Bookmark/Bookmark';
import Counter from '../Counter/Counter';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Counter from '../Bookmark/Bookmark';
import './blogs.css'
const Blogs = () => {
const [blogs,setblogs]=useState([])
const [counter,setCounter]=useState([])
const [bookmark,setbookmark]=useState([])
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
const passDataBookmark=(blog)=>{
    // console.log(blog);
    // const newbookmark=[...bookmark, blog]
    // setbookmark(newbookmark);
    if (bookmark.find((bookmark) => bookmark.id === blog.id)) {
        toast.success('ID is present in bookmarks!');
      } else {
        toast.error('ID is not present in bookmarks.');
        const newbookmark=[...bookmark, blog]
        setbookmark(newbookmark);
      }
}
return (
<div className='shopContainer'>
    <div className='productContainer'>
    {
        blogs.map(blog=><Blog key={blog.id} blog={blog} passDataCounter={passDataCounter} passDataBookmark={passDataBookmark} ></Blog>)
        }
    </div>
    <div className='cartContainer'>
        {/* <Counter blogs={blogs} ></Counter> */}
        {/* <p>Summary:{counter.length}</p> */}
        <Counter counter={counter}></Counter>
        <div className='bookmark_container'>
            <h3 className='bookmark-title'>Bookmarked Blogs : {bookmark.length}</h3>
            <div> {bookmark.map(book=><Bookmark book={book}></Bookmark>)}</div>
        </div>
        <ToastContainer />
        
       
        {/* <Bookmark counter={counter}></Bookmark> */}

       
    </div>

</div>
)
}

export default Blogs