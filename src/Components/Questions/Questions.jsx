import React from 'react'
import './questions.css'

const Questions = () => {
  return (
    <div>
        <h2 className='blog-title_1'>Blogs</h2>
        <div className='questions'>
            <h3>1. What is the difference between Props vs state? </h3>
            <p><span>Props (short for "properties") </span>are used to pass data from a parent component to a child component. They are immutable and read-only, meaning that they cannot be modified by the child component that receives them. Instead, the child component can use the props passed down to it to render its own UI or pass them on to other child components.</p>
            <p><span>State</span> on the other hand, is used to manage data that changes within a component. Unlike props, state is mutable and can be changed by the component itself through a method called setState(). When the state changes, React will automatically re-render the component to reflect the updated data.</p>
        </div>
        <div className='questions'>
            <h3>2. How does useState work?</h3>
            <p><span>useState</span> is a React Hook that lets you add a state variable to your component. It returns an array with two values: the current state and a function to update it. You can use the function to change the state value and trigger a re-render of your component. You can also pass a function as an argument to useState to initialize the state based on some calculation.</p>
            
        </div>
    </div>
  )
}

export default Questions