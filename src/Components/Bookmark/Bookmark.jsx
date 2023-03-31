import { counter } from '@fortawesome/fontawesome-svg-core'
import React from 'react'
import './bookmark.css'

const Bookmark = (props) => {
    const bookmark=props.book;
  return (
    <div className='bookmark'> 
        <p>{bookmark.blogTitle}</p>
    </div>
  )
}

export default Bookmark