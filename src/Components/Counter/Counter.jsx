import { counter } from '@fortawesome/fontawesome-svg-core'
import React from 'react'
import './counter.css'

const Counter = (props) => {
    const counter=props.counter;
    //const passDataCounter=props.passDataCounter;
    //const passDataCounter=props
//     console.log(props)
//    const blogs=props.blogs;
//    for(let blog of blogs){
//     console.log(blog);
//    }
    let read_Time=0;
    for(let blog of counter){
        read_Time=read_Time+blog.readTime;
    }
  return (
    <div>
        <h2 className='counter'>Spent time on read : {read_Time}</h2>
    </div>
  )
}

export default Counter