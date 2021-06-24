import React from 'react'
import {
  Link 
} from 'react-router-dom'


const Header = () => {
  return (
    <>
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link active" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/forms">Forms</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/faqs" >Faqs</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/plots" >Plots</Link>
        </li>
</ul>
    </>
  )
}

export default Header
