import React from 'react'
import '../css/second-section.css'
import earth from '../assets/earth.svg'
import founder from '../assets/founder.svg'
import holders from '../assets/holders.svg'
import equity from '../assets/equity.svg'
import ease from '../assets/ease.svg'


function SecondSection() {
    return (
        <div className="second-section">
            <div className="second-section-bg">
                <img src={earth} alt=""/>
            </div>
            <div className="second-section-title">
                <span>Decentralized Governance (DAOs)</span>
                <span>By delegating ownership decisions to token holders, 
                    blockchain projects open an <i>entirely new </i>set of incentives for participation.</span>
            </div>
            <div className="second-section-content">
                <div className="second-section-content-box">
                    <div className="second-section-icon-wrapper">
                        <img src={founder} alt=""/>
                    </div>
                    <span className="second-section-content-box-title">
                        Reduced founder liability
                    </span>
                    <span className="second-section-content-box-description">
                        By decentralizing project ownership, founders and core team members retain less legal 
                        liability and have a more open framework to experiment with.  
                        This also alleviates the security risk of centralized keyholders.
                    </span>
                </div>
                <div className="second-section-content-box">
                    <div className="second-section-icon-wrapper">
                    <img src={holders} alt=""/>
                    </div>
                    <span className="second-section-content-box-title">
                        Aligned token holder interests
                    </span>
                    <span className="second-section-content-box-description">
                        Token holders benefit immediately from their good behavior, 
                        as their participation positively impacts the value of their investments.
                    </span>
                </div>
                <div className="second-section-content-box">
                    <div className="second-section-icon-wrapper">
                    <img src={equity} alt=""/>
                    </div>
                    <span className="second-section-content-box-title">
                        Equity retained from initial raise
                    </span>
                    <span className="second-section-content-box-description">
                        Ownership of capital raised, pre-launch or otherwise, can be attributed to token holders. 
                        This eliminates the possibility of founders running off with the cash.
                    </span>
                </div>
                <div className="second-section-content-box">
                    <div className="second-section-icon-wrapper">
                    <img src={ease} alt=""/>
                    </div>
                    <span className="second-section-content-box-title">
                        Ease of contribution
                    </span>
                    <span className="second-section-content-box-description">
                        Governance rights make it straightforward for any tokenholder to contribute 
                        meaningfully to the project they support. No on-boarding or firewall 
                        to keep out would-be contributors!
                    </span>
                </div>
                <div className="second-section-content-img-wrapper">
                    <img src={earth} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default SecondSection
