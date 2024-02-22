import React from "react";
import { Link } from "react-router-dom";
import bgimage from "../../assets/designer-work-office.jpg"
import Card from "../card/Card";
import Card2 from "../card/Card2";
import LeftCard from "./LeftCard";
import RightSide from "./RightSide";
import Container from "./Container";
import Container2 from "./Container2";

function Resume() {
    return (
        <div className="">
            <Link to="https://bit.ly/vanshmahajan">
                <div  className=" group left-6 top-[135px] rounded-xl flex items-center justify-between fixed h-[50px] w-[50px] hover:w-[150px] hover:bg-[var(--main-color)] border-2">
                    <i className="pl-[0.65rem] fa-solid fa-download text-2xl text-[var(--main-color)] group-hover:text-[var(--black)]"></i>
                    <h1 className="opacity-0 group-hover:opacity-100 text-[var(--black) pr-1 font-bold text-nowrap">Download PDF</h1>
                </div>
            </Link>
            <h1 className="text-center text-white text-7xl py-14"></h1>
            <div className="flex justify-center border-[2px] m-3 pt-5 rounded-3xl">
                <LeftCard />
                <RightSide />
            </div>
        </div>
    );
}

export default Resume