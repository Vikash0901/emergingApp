import React from 'react';
// import styles from './Invest.module.css';
import './Invest.css';


const invest_data = [
    {
        id: 1,
        icon_src: "/images/promotors-icon.png",
        heading: "Projects",
        text: "362",
    },
    {
        id: 2,
        icon_src: "/images/district-icon.png",
        heading: "Opportunity",
        text: "$16.1 bn",
    },
    {
        id: 3,
        icon_src: "/images/projects-icon.png",
        heading: "Promotors",
        text: "103",
    },
    {
        id: 4,
        icon_src: "/images/investment-icon.png",
        heading: "District",
        text: "12",
    },
];

const card_data = [
    {
        id: 1,
        heading: "Parabati-II",
        sector: "Energy",
        Sub_sector: "Electricity Generation (Renewable)",
        value: "$1.28 bn",
    },
    {
        id: 2,
        heading: "Creation of Intra State ...",
        sector: "Energy",
        Sub_sector: "Electricity Transmission",
        value: "$1.28 bn",
    },
    {
        id: 3,
        heading: "Bhanupali-Bilaspur-Beri New Rail Line Project",
        sector: "Transport",
        Sub_sector: "Railway Track",
        value: "$849.18 mn",
    },
    {
        id: 4,
        heading: "430 MW Reoli Dugli HEP",
        sector: "Energy",
        Sub_sector: "Electricity Generation (Renewable)",
        value: "$440.72 mn",
    }
]
const invest = card_data.map((card) =>
    <div className="card1" >
        <div className="card-body1">
            <h2 className='card-head'>
                <span>{card.heading}</span></h2>
            <div className='card-body-sector'>
                <span>Sector</span>
                <span className='energy'> {card.sector}</span>
            </div>
            <div className='card-body-sub-sector'>
                <span>Sub-Sector </span>
                <span className='generation'>{card.Sub_sector}</span>
            </div>
            <div className='card-value'>
                <span>{card.value}</span>
            </div>
        </div>
        <div className='invest-card-img'>
            <img src='/images/logo-iig.png'></img>
        </div>
    </div>
)

const data = invest_data.map((item) =>
    <ul className='invest-root-progress' key={item.id}>
        <li>
            <div className='invest-progress-icon'>
                <img src={item.icon_src} />
            </div>
            <div className='invest-heading m-t-2  text-center'>{item.heading}</div>
            <h3 className='text-center'>{item.text}</h3>
        </li>
    </ul>
)

export const Invest = () => {
    return (
        <div className='investible-state'>
            <div className='container'>
                <div>
                    <h2 className='text-center'>Investible Projects</h2>
                    <h5 className='text-center'>
                        Investment Oppurtunities in Himachal Pradesh
                    </h5>
                    <div className='invest-root'>
                        {/* <ul className='invest-root-progress'>
                        <li>
                            <div className='invest-progress-icon'>
                                <img src='/images/promotors-icon.png'/>
                            </div>
                            <div className='invest-heading m-t-2  text-center'>Projects</div>
                            <h3 className='text-center'>362</h3>
                        </li>
                    </ul> */}
                        {data}
                    </div>
                    <div className='invest-card'>
                       
                        {/* <div className="card" >
                            <div className="card-body">
                                <h2 className='card-head'>
                                    <span>Parbati-II</span></h2>
                                <div className='card-body-sector'>
                                    <span>Sector</span>
                                    <span className='energy'> Energy</span>
                                </div>
                                <div className='card-body-sub-sector'>
                                    <span>Sub-Sector </span>
                                    <span className='generation'>Electricity Generation (Renewable)</span>
                                </div>
                                <div className='card-value'>
                                    <span>$1.28 bn</span>
                                </div>
                            </div>
                            <div className='invest-card-img'>
                                <img src='/images/logo-iig.png'></img>
                            </div>
                        </div> */}
                        {invest}
                       
                    </div>
                    <div className='card-button'>
                        <button type='button' className='btn btn-primary'>View All</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
