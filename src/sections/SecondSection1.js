import React from 'react'
import '../css/second-section.css'
import clicks from "../assets/clicks.png"
import incentivize from "../assets/incentivize.png"
import explore from "../assets/explore.png"

function SecondSection1() {
    return (
        <section className="second-section" >
            <span className="second-section-title">
                What is Governance-as-a-Service?
            </span>
            <span className="second-section-description">
                "At the highest level, GaaS refers to the process of leveraging our own merits and technology to
                bootstrap third party projects."
            </span>
            <div className="second-section-gridbox">
                <div className="second-section-box">
                    <img src={clicks} alt=""/>
                    <span className="second-section-box-title">
                    Bootstrapping governance with a few clicks
                    </span>
                    <span className="second-section-box-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dicta libero, beatae placeat laborum 
                    </span>
                </div>
                <div className="second-section-box">
                <img src={incentivize} alt=""/>
                    <span className="second-section-box-title">
                    Incentivize and maximize engagement
                    </span>
                    <span className="second-section-box-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dicta libero, beatae placeat laborum 
                    </span>
                </div>
                <div className="second-section-box">
                <img src={explore} alt=""/>
                    <span className="second-section-box-title">
                    Explore and experiment with governance sandbox
                    </span>
                    <span className="second-section-box-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dicta libero, beatae placeat laborum 
                    </span>
                </div>
            </div>
        </section>
    )
}

export default SecondSection1;
