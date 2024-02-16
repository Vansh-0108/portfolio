import React from "react";
import {Link, NavLink} from 'react-router-dom'

function NavPointer(props) {
    return (
          <NavLink 
            className = { ({isActive}) => `text-[1.2rem] capitalize mx-4 my-0 ${isActive ? "text-[#d3ad7f]" : "text-white"} hover:text-[color:#d3ad7f] hover:border-b-[color:var(--main-color)] hover:pb-2 hover:border-b-[0.1rem] hover:border-solid`}
            to = {props.link} >
          {props.name}
          </NavLink>
    );
}

export default NavPointer;