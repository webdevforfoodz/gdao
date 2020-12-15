import React from 'react'

function ThirdSectionCard(props) {
    return (
        <div className="third-section-card" >
            <div className="third-section-card-img-wrapper">
                <img src={props.img} alt={props.img}/>
                <div className="third-section-card-img-wrapper-content">
                    <span>{props.title}</span>
                    <span>{props.content}
                    </span>
                </div>
            </div>
            <div className="third-section-card-title">
                {props.title}
            </div>
            <button>Learn more</button>
        </div>
    )
}
 
export default ThirdSectionCard
