import React from 'react'
import { FaBars } from 'react-icons/fa'
import Media from 'react-media';
import "../Navbar.css"

const Navbar = () => {
  return (
    <nav>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <Media query="(max-width: 851px)" render={() =>
          (
          <div className='sidebarMenu'>
              <h2><FaBars id = 'bar' color="black" /></h2>
              <ul className='list'>
              <li className='items'><a href='#home'>Home</a></li>
              <li className='items'><a href='#aboutus'>About Us</a></li>
              <li className='items'><a href='#services'>Services</a></li>
              <li className='items'><a href='#ourteam'>Our Team</a></li>
              <li className='items'><a href='#careers'>Careers</a></li>
              <li className='items'><a href='#contactus'>Contact Us</a></li>
              </ul>
          </div>
          )}
        />
    </nav>
  )
}

export default Navbar
