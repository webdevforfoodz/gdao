import React from 'react';
import logo from '../assets/logo.png'
import '../css/first-section.css'
import NavBar from '../components/NavBar'


function FirstSection() {
    return (
        <section className="first-section">
            <NavBar />
            <div className="first-section-container">
                <div className="first-section-text">
                    <span>Governance.</span>
                    <span>As a Service.</span>
                    <span>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem</span>
                    <div className="first-section-btn-box">
                        <button>Explore GaaS</button>
                        <button>Farm GDAO</button>
                    </div>
                </div>
                <div className="first-section-logo-wrapper">
                    <img src={logo} alt=""/>
                </div>
            </div>
        </section>
    )
}

export default FirstSection;
