import React from "react";
import heroImage from '../../assets/3d-illustration-boy-with-camera-his-hand.jpg';
import image from '../../assets/designer-work-office.jpg'
import { Link } from "react-router-dom";

function Card2(props) {
    return (
        // <div className="border-[length:var(--border)] items-center">
        //     <div className="overflow-hidden w-full">
        //         <img className="h-full object-cover" src={props.imgsrc} alt="Image" />
        //     </div>
        //     <div className="p-8">
        //         <a href="#" className="text-[1rem] leading-6 text-white hover:text-[color:var(--main-color)]">{props.skills}</a>
        //         <span className="text-[color:var(--main-color)] block text-[1.8rem] pt-0">{props.name}</span>
        //         <p className="text-[1rem] text-[#ccc] leading-[1.8rem] px-0 py-0">{props.desc}</p>
        //         <a href="#" className="btn pt-0 rounded-md">Read More</a>
        //     </div>
        // </div>

        <div className="border-[length:var(--border)] rounded-lg">
            <div className="h-[98%] flex flex-col justify-between items-center">
                <img src={props.imgsrc} alt="Image" className="object-contain w-[98%] mt-1 rounded-lg "/>
                <div className="flow-root text-white p-2">
                    <Link to=''>
                        <button className="float-right font-bold px-2 py-2 text-xl mx-1 rounded-full text-[var(--black)] bg-main-color fa-solid fa-link"></button>
                    </Link>
                    <Link to=''>
                        <button className="float-right font-bold px-3 py-2 text-xl mx-1 rounded-full text-[var(--black)] bg-main-color fa-brands fa-github"></button>
                    </Link>
                    <h2 className="capitalize text-[1.3rem]">{props.skills}</h2>
                    <h1 className="text-3xl text-[var(--main-color)] uppercase">{props.name}</h1>
                    <p className="text-sm">{props.desc}</p>
                </div>
            </div>
        </div>
    );
}

export default Card2