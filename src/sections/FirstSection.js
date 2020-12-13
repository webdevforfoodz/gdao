import React from 'react';
import logo from '../assets/logo.svg'
import '../css/first-section.css'
import NavBar from '../components/NavBar'
import Links from '../components/Links'

function FirstSection() {
    return (
        <section className="first-section">
            <NavBar />
            <div className="first-section-container">
                <div className="first-section-text">
                    <span>Governance.</span>
                    <span>As a Service.</span>
                    <span>Effective solutions ensuring proper governance for blockchain
                        projects of all sizes
                    </span>
                    <div className="first-section-btn-box">
                        <button>Explore GaaS</button>
                        <button>Farm GDAO</button>
                    </div>
                </div>
                <div className="first-section-logo-wrapper">
                    <img src={logo} alt=""/>
                </div>
            </div>
            <Links />
        </section>
    )
}

export default FirstSection;
