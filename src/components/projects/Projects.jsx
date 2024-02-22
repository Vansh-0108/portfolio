import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bgimage from "../../assets/designer-work-office.jpg"
import Card from "../card/Card";
import Card2 from "../card/Card2";
import Content from "./Content";

function Projects() {
    const [domain, setDomain] = useState('WebD');

    // useEffect(() => {

    // }, [domain])

    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-center text-white text-7xl py-14"></h1>
            <nav className="flex justify-between w-[60%] my-10 text-xl border-2 p-3 rounded-2xl px-[5rem] text-white">
                <button 
                    className = {`hover:text-[var(--main-color)] ${domain === 'WebD' ? "text-[var(--main-color)]" : ""}`}
                    onClick={() => {setDomain('WebD')}}>
                        Web Development
                </button>
                <button className={`hover:text-[var(--main-color)] ${domain === 'GD' ? "text-[var(--main-color)]" : ""}`} onClick={() => {setDomain('GD')}}>Graphic Designing</button>
                <button className={`hover:text-[var(--main-color)] ${domain === 'Photo' ? "text-[var(--main-color)]" : ""}`} onClick={() => {setDomain('Photo')}}>Photography</button>
            </nav>
            {/* <h1 className="text-center text-white text-4xl py-14 capitalize"> My <span className="text-[color:var(--main-color)]">Projects</span></h1> */}
            <Content domain = {domain} />
        </div>
    );
}

export default Projects