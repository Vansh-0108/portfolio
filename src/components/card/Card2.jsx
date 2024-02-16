import React from "react";
import heroImage from '../../assets/3d-illustration-boy-with-camera-his-hand.jpg';
import image from '../../assets/designer-work-office.jpg'

function Card2(props) {
    return (
        <div className="border-[length:var(--border)] items-center">
            <div className="overflow-hidden w-full">
                <img className="h-full object-cover" src={props.imgsrc} alt="Image" />
            </div>
            <div className="p-8">
                <a href="#" className="text-[1rem] leading-6 text-white hover:text-[color:var(--main-color)]">{props.skills}</a>
                <span className="text-[color:var(--main-color)] block text-[1.8rem] pt-0">{props.name}</span>
                <p className="text-[1rem] text-[#ccc] leading-[1.8rem] px-0 py-0">{props.desc}</p>
                <a href="#" class="btn pt-0 rounded-md">Read More</a>
            </div>
        </div>
    );
}

export default Card2