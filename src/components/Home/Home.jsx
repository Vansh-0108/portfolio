import React from "react";
import { Link } from "react-router-dom";
import bgimage from "../../assets/designer-work-office.jpg"
import Resume from "../Resume/Resume";
import Projects from "../projects/Projects";

function Home() {
    return (
        <div>
            <div className="min-h-screen flex items-center bg-cover bg-center bg-[url('./src/assets/designer-work-office.jpg')] align-center overflow-hidden" >
            {/* <div className={ () => `min-h-screen flex items-center bg-cover bg-center background: url(${bgimage}) no-repeat`}> */}
                <div className="m-2 pl-10 min-w-screen text-center">
                    <h3 className="text-6xl capitalize text-white">Vansh Mahajan</h3>
                    <p className="text-xl font-[lighter] leading-[1.8] text-[#eee] py-4 max-w-[750px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus at repellat perferendis dolorem, temporibus placeat exercitationem, ratione odit eligendi ipsa consequuntur tempore accusantium quasi modi, debitis delectus architecto alias ullam.</p>
                    <a className="btn rounded-md" href="#contact">Contact Now</a>
                </div>
            </div>
            <Projects />
            <Resume />
        </div>
    );
}

export default Home;