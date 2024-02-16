import React from "react";
import { Link } from "react-router-dom";
import bgimage from "../../assets/designer-work-office.jpg"
import Card from "../card/Card";
import Card2 from "../card/Card2";

function Projects() {
    return (
        <div>
            <h1 className="text-center text-white text-7xl py-14"></h1>
            <h1 className="text-center text-white text-4xl py-14"> My <span className="text-[color:var(--main-color)]">Projects</span></h1>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(30rem,1fr))] gap-6 m-4">
                <Card2
                    name = "My Project 1"
                    imgsrc = 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202109/dark_mode_%281%29.jpg?size=1200:675'
                    desc = "Lorem Ipsum Dolor, Sit Amet Consectetur Adipisicing Elit. Minus At Repellat Perferendis Dolorem, Temporibus Placeat Exercitationem, Ratione Odit Eligendi Ipsa Consequuntur Tempore Accusantium Quasi Modi, Debitis Delectus Architecto Alias Ullam."
                    skills = "React Javascript"
                />
                <Card2
                    name = "My Project 2"
                    imgsrc = 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202109/dark_mode_%281%29.jpg?size=1200:675'
                    desc = "Lorem Ipsum Dolor, Sit Amet Consectetur Adipisicing Elit. Minus At Repellat Perferendis Dolorem, Temporibus Placeat Exercitationem, Ratione Odit Eligendi Ipsa Consequuntur Tempore Accusantium Quasi Modi, Debitis Delectus Architecto Alias Ullam."
                    skills = "React Javascript"
                />
                <Card2
                    name = "My Project 3"
                    imgsrc = 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202109/dark_mode_%281%29.jpg?size=1200:675'
                    desc = "Lorem Ipsum Dolor, Sit Amet Consectetur Adipisicing Elit. Minus At Repellat Perferendis Dolorem, Temporibus Placeat Exercitationem, Ratione Odit Eligendi Ipsa Consequuntur Tempore Accusantium Quasi Modi, Debitis Delectus Architecto Alias Ullam."
                    skills = "DontReact Typescript"
                />
            </div>
        </div>
    );
}

export default Projects;