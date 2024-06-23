import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
       <footer className="flex flex-col space-y-10 justify-center m-10">



<div className="flex justify-center space-x-5">
    <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" alt="" />
    </Link>
    <Link to="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png"  alt=""/>
    </Link>
    <Link to="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" alt="" />
    </Link>
    <Link to="https://messenger.com" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png"  alt=""/>
    </Link>
    <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/fluent/30/000000/twitter.png"  alt=""/>
    </Link>
</div>
<p className="text-center text-gray-700 font-medium">&copy; 2022 Company Ltd. All rights reservered.</p>
</footer>
    </div>
  )
}

export default Footer
