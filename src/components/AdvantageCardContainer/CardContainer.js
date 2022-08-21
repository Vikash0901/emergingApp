import React from 'react'
import "./CardContainer.css";

// let state = {
const cards = [
    {
        id: 1,
        backgroundColor:'red',
        icon_src: "/images/government_icon.png",
        heading: "Proactive Governance",

        advantages: [
            "Proactive faclitation and attractive policies",
            "Simplified procedure and speedy time bound approvals",
            "Strong industrial - zero tolerance policy"]
    },
    {
        id: 2,
        icon_src: "/images/tourism_icon.png",
        heading: "Tourism Attraction",

        advantages: [
            "One of the best tourism state of India",
            "Great places to visit for pristime natural environment",
            "Tourist wellness across the world"]
    },
    {
        id: 3,
        icon_src: "/images/manpower_icon.png",
        heading: "Skilled Manpower",

        advantages: [
            "82.80 % Literacy rate, is well ahead of the national avaerage at 74 %",
            "Highest increase in Technical institutaions over last 6 years",
            "Total 3532 private educational institutes"
        ]
    },
    {
        id: 4,
        icon_src: "/images/agri_icon.png",
        heading: "Enabling Factors",

        advantages: [
            "Available land parcel",
            "Available water resource",
            "24X7 affordable electricity"
        ]
    },
]
// }


let card = cards.map((card) => 
<div className="card" key={card.id} >
    <img src={card.icon_src} className="card-image" alt="..." />
    <div className="card-body">
        <h5 className="card-title text-white">{card.heading}</h5>
        <ul className='card-text'>
            {card.advantages.map(item => <li>{item}</li>)}
        </ul>
    </div>
</div>)

export const CardContainer = () => {
    return (
        <div className='container'>
            <div className='heading-container text-center'>
                <h2>Advantage Himachal Pradesh</h2>
            </div>
            <div className='cards'>
                {card}
            </div>
            <div className="home-abt">
                "Himachal is one of the most popular and easily accessible hill state of India. People from all parts of the country as well as from different parts of the world visit this beautiful state to enjoy its natural beauty.
                <br />
                <br />

                From times immemorial, Himachal Pradesh has always been one of the greatest contributors towards building tourism, resultantly, better economic development and success for the nation."
            </div>
        </div>
    )
}
