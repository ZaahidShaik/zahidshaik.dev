import React from 'react'
import '../styles/Greeting.css'


function Greeting() {
  return (
    <div className='greeting_div'>
        <h1 className='greeting_style'>Hi, I'm Zahid!</h1>
        <p className='intro_style'>
            <strong>Software Engineer</strong> based in Washington. 
            <br />
            <br />
            I'm passionate about designing and building software to make positive impact,constantly striving to improve and learn new skills.

        </p>
        <p className='intro_style2'>
            I've experience working in different domains including E-commerce and Genomics.  
          </p>
    </div>
  )
}

export default Greeting