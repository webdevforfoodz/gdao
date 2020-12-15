import React from 'react';
import '../css/third-section.css';
import Card from '../components/ThirdSectionCard'

function ThirdSection() {
    return (
        <div className="third-section" >
            <div className="third-section-title">
                <span>Governance-as-a-Service (GaaS)</span>
                <span>We are a role model in community governance done right. </span>
            </div>
            <div className="third-section-cards-wrapper">
                <Card title={"Pre-deployment Consulting"} img={"/images/consulting.svg"} content={"Utilization of Governor resources and smart contracts to best equip third-party projects to launch with a sound framework in place."}/>
                <Card title={"Voting Bootstrap"} img={"/images/vote.svg"} content={"The mature, engaged Governor community participate as active voters on third-party projects. This ensures that voting quorums are met and long-term interests are upheld from launch onwards."}/>
                <Card title={"Unrug-as-a-Service"} img={"/images/lab.svg"} content={"Governor rose from the community of the biggest exitscam of the year. Other communities that were rugged leverage our framework to rebuild their own project for themselves."}/>
            </div>
            <div className="third-section-footer" >
                Our protocol offers several services as part of the Governance-as-a-Service 
                (GaaS) sandbox for any project to ensure their governance model works out of the box.
            </div>
        </div>
    )
}

export default ThirdSection;
