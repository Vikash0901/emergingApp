import React from 'react'
import './Focus.css';

const focus_data=[
  {
    id:1,
    icon_src:"/images/focus_agri_icon.png",
    heading:"Agri and Food processing",
    brief:"Fruit Bowl of India- Ranks 2nd In Apple and Almond Production"
  },
  {
    id:2,
    icon_src:"/images/focus_pharma_icon.png",
    heading:"Pharmacueticals",
    brief:"60 Developed Industrial Area/Estates Pharmaceutical Hub Of Asia"
  },
  {
    id:3,
    icon_src:"/images/focus_tourism_icon.png",
    heading:"Tourism",
    brief:"One Of The Most Visited State By International And Domestic Tourist In India"
  },
  {
    id:4,
    icon_src:"/images/focus_energy_icon.png",
    heading:"Hydro & Renewable Energy",
    brief:"Net Exporter Of Power With Affordable And Easily Accessible Power Supply"
  },
  {
    id:5,
    icon_src:"/images/focus_wellness_icon.png",
    heading:"Wellness Healthcare & Ayush",
    brief:"High Diversity Of Medical & Aromatic Plants Makes Himachal An Ideal Paradise"
  },
  {
    id:6,
    icon_src:"/images/focus_housing_icon.png",
    heading:"Housing & Urban Development",
    brief:"Highest Household Disposable Income In The Country"
  },
  {
    id:7,
    icon_src:"/images/focus_IT_icon.png",
    heading:"Information Technology",
    brief:"Highest Tele Density (141%) In India Among The Service Areas"
  },
  {
    id:8,
    icon_src:"/images/focus_education_icon.png",
    heading:"Education & Skill Development",
    brief:"Adjudged At 1st Position For Initiatives In Education Amongst Other States"
  },
]
let data=focus_data.map((item)=>
  <div className='focus-data' key={item.id}>
            <div className='focus-img'>
              <img src={item.icon_src} className='focus-img-content'></img>
            </div>
            <div className='focus-content'>
              <h4>{item.heading}</h4>
              <p>{item.brief}</p>
            </div>
          </div>
  )

export const Focus = () => {
  return (
    <div className='focus-section m-t-40 p-t-40 p-b-40'>
      <div className='container'>
        <div className='section-heading text-center'>
          <h3>Focus Sectors</h3>
        </div>
        <div className='focus-sector'>
          {/* <div className='focus-data'>
            <div className='focus-img'>
              <img src='/images/focus_agri_icon.png' className='focus-img-content'></img>
            </div>
            <div className='focus-content'>
              <h4>Agri and Food processing</h4>
              <p>Fruit Bowl of India- Ranks 2nd In Apple and Almond Production </p>
            </div>
          </div> */}
          {data}
        </div>
      </div>
    </div>
  )
}
