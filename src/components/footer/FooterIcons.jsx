import React from "react";
import {Link, NavLink} from 'react-router-dom'

function FooterIcons(props) {
    return (
        <NavLink 
            to={props.link}
            className = {() => `text-[1rem] h-10 w-10 leading-[2.5rem] text-white border-[length:var(--border)] m-[0.3rem] rounded-[50%] hover:bg-[color:var(--main-color)] hover:text-[color:var(--black)] hover:scale-110 ${props.icon}`}>
        </NavLink>
    );
}

export default FooterIcons;