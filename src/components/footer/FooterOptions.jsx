import React from "react";
import {Link, NavLink} from 'react-router-dom'

function FooterOptions(props) {
    return (
        <NavLink 
            className = {({isActive}) => `${isActive ? "bg-[color:var(--main-color)]" : "text-white"} text-[1rem] border-[length:var(--border)] px-3 py-[0.2rem] hover:bg-[color:var(--main-color)] hover:text-[color:var(--black)] hover:scale-110`}
            to={props.link}>
            {props.name}
        </NavLink>

    );
}

export default FooterOptions;