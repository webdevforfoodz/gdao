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
                <Card />
            </div>
        </div>
    )
}

export default ThirdSection;
