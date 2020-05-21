import * as React from "react";

// import profilePicture from "../assets/profile_1.jpg";
// const profilePicture = require('../assets/profile_1.jpg');
import profilePicture from '../assets/profile_1.jpg';

export interface IntroProps { colorMode: string }

export const Intro = (props: IntroProps) => <section className={'intro ' + props.colorMode}>
    <div className="title-frame">
        <h1>Brad Smith</h1>
        <h2>Software Engineer in Fort Collins, Colorado</h2>
    </div>
    <div className="img-frame">
        <img src={profilePicture} 
            alt="a picture of me, smiling"/>
    </div>
</section>