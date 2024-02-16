import React from "react";
import heroImage from '../../assets/3d-illustration-boy-with-camera-his-hand.jpg';


function Card(props) {
    return (
        <div className=" flex justify-center flex-wrap gap-2 px-0 py-0">
            <div className="text-center border-[length:var(--border)] p-10">
                <img className="h-40 rounded-xl" src={props.imgsrc} alt="screenshot" />
                <h3 className="text-white text-[2rem] px-0 py-0">{props.name}</h3>
                <div className="text-[#d3ad7f] text-[1rem] px-0 py-0">
                    Skills:   
                    <span className="text-white text-[1rem]">{props.skills}</span>
                </div>
                <a href='' className="inline-block text-[1rem] text-white cursor-pointer mt-4 px-6 rounded-md bg-[#d3ad7f] hover:tracking-[0.2rem] py-0">Link</a>
            </div>
        </div>
    )
}

export default Card;