import React from "react";
import { Link } from "react-router-dom";
import bgimage from "../../assets/designer-work-office.jpg"
import Card from "../card/Card";
import Card2 from "../card/Card2";
import Timeline from "./Timeline";

function Experience() {
    return (
        <div>
            <h1 className="text-center text-white text-7xl py-14"></h1>
            <Timeline />
        </div>
    );
}

export default Experience  ;