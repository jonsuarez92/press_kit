import React from "react";
import { SocialIcon } from 'react-social-icons';


import "./Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <SocialIcon url="https://linkedin.com/in/jonathan-suarez" />
                <SocialIcon url="https://instagram.com/deejaylace?igshid=YmMyMTA2M2Y=" />


            </div>
            <p> &copy; 2022 DJLace.com</p>
        </div>
    );
}

export default Footer;