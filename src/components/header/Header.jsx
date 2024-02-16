import React from "react";
import {Link, NavLink} from 'react-router-dom'
import heroImage from '../../assets/3d-illustration-boy-with-camera-his-hand.jpg';
import NavPointer from "./NavPointer";

function Header() {
    return (
      <header className = "bg-[#010103] flex items-center justify-between border-b-[length:var(--border)] px-[10%] pt-4 pb-3 inset-x-0 w-full fixed top-0">
        <Link to="#" className = "">
          <img className='h-16 rounded-full' src={heroImage} alt="Test Image" />
        </Link>

        <nav className = "">
          <NavPointer link = '/' name = 'Home' />
          <NavPointer link = '/about' name = 'About' />
          <NavPointer link = '/projects' name = 'Projects' />
          <NavPointer link = '/experience' name = 'Experience' />
          <NavPointer link = '/resume' name = 'Resume' />
          <NavPointer link = '/hobbies' name = 'Hobbies' />
          <NavPointer link = '/contact' name = 'Contact' />
        </nav>

        <div className = "flex">
          <div className = " flex text-white cursor-pointer text-[1.2rem] ml-2 hover:text-[color:#D3AD7F] fas fa-bars" id = "menu-btn"></div>
        </div>
        
      </header>
    );
}

export default Header;