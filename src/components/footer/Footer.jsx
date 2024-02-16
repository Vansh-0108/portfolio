import React from "react";
import { Link, NavLink } from "react-router-dom";
import FooterIcons from "./FooterIcons";
import FooterOptions from "./FooterOptions";

function Footer() {
    return (              
            <footer className="w-full absolute inset-x-0 bg-[#010103]">
                <div className="text-center background: var(--black) pt-0">
                    <hr className="pt-0"/>
                    <div className="px-0 py-1">
                        <FooterIcons icon = 'fab fa-github' link = 'https://github.com/Vansh-0108'/>
                        <FooterIcons icon = 'fa-solid fa-code' link = 'https://leetcode.com/vansh0108'/>
                        <FooterIcons icon = 'fab fa-instagram' link = ''/>
                        <FooterIcons icon = 'fab fa-linkedin' link = ''/>
                        <FooterIcons icon = 'fab fa-twitter' link = ''/>
                    </div>
                    <div className="flex justify-center flex-wrap gap-1.5 px-0 py-2">
                        <FooterOptions name = "Home" link = "/" />
                        <FooterOptions name = "About" link = "/about" />
                        <FooterOptions name = "Projects" link = "/projects" />
                        <FooterOptions name = "Experience" link = "/experience" />
                        <FooterOptions name = "Resume" link = "/resume"/ >
                        <FooterOptions name = "Hobbies" link = "/hobbies" />
                        <FooterOptions name = "Contact" link = "/contact" />
                    </div>
                    <div className="w-full text-[0.9rem] text-white font-sans-serif p-2"> 
                        Developed by <span className="text-[color:var(--main-color)] font-medium">Pseudo</span> | All Rights Reserved
                    </div>
                </div>
            </footer>
    );
}

export default Footer;