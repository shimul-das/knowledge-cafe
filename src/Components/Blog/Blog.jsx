import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import './blog.css'

const Blog = (props) => {
    console.log(props)
const {authorName,blogTitle,blogCoverImage,authorImage,readTime,publishDate} =props.blog;
const passDataCounter=props.passDataCounter;
//const passDataCounter=props.passDataCounter; 
// const handleAddtoCart=props.handleAddtoCart
//console.log(props)


return (
<div className='product'>
    <img className='blogCoverImage' src={blogCoverImage} alt="" />
    <div className='product-info'>
        <div class="author-info">
            <div class="author-text">
                <div className='authimage'>
                <img src={authorImage} alt="Author Image"></img>
                </div>
            <div>
            <h2>{authorName}</h2>
                <p className="date">{publishDate} <span>(4 Days ago)</span></p>
            </div>
                
            </div>
            <div className="icon">
            <p>{readTime} min read<button className='bookmark-btn' onClick={()=>handleAddtoCart(props.product)} ><FontAwesomeIcon icon={ faBookmark} /></button></p>
            </div>
        </div>
        <h2 className='blog-title'>{blogTitle}</h2>
        <p className='post-tagline'>#beginners #programming</p>
        <a onClick={()=>passDataCounter(props.blog)} className='mark-as-read' href="">Mark as read</a>


        {/* <h5 className='product-name'>{name}</h5>
        <p className='product-price'>Price: ${price}</p>
        <p className='product-manufacturer'>Manufacturer: {seller}</p>
        <p className='product-rattig'>Rattings:{ratings}Stars</p> */}
    </div>
    {/* <button onClick={()=>handleAddtoCart(props.product)} className='btn-cart'>Add To Cart
        <FontAwesomeIcon icon={ faShoppingCart} /></button> */}

</div>
)
}

export default Blog