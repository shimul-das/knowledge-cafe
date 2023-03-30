import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './blog.css'

const Blog = (props) => {
const {authorName,blogTitle,blogCoverImage,authorImage,readTime,publishDate} =props.product;
// const handleAddtoCart=props.handleAddtoCart
console.log(props)

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
            <h2>John Doe</h2>
                <p class="date">March 31, 2023 <span>(4 Days ago)</span></p>
            </div>
                
            </div>
            <div class="icon">
                <img src="icon-image.jpg" alt="Icon"></img>
            </div>
        </div>


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