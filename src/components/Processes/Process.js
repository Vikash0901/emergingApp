import React from 'react';
import './Process.css';

const process_data = [
    {
        id: 1,
        number: '01',
        src_icon: "/images/user_reg_icon.png",
        content: "User Registration"
    },
    {
        id: 2,
        number: '02',
        src_icon: "/images/filling_icon.png",
        content: "Filing Intention"
    },
    {
        id: 3,
        number: '03',
        src_icon: "/images/land_icon.png",
        content: "Acquire Land"
    },
    {
        id: 4,
        number: '04',
        src_icon: "/images/upload_icon.png",
        content: "Upload Documents"
    },
    {
        id: 5,
        number: '05',
        src_icon: "/images/approval_icon.png",
        content: "Required Approvals"
    },
    {
        id: 6,
        number: '06',
        src_icon: "/images/payment_icon.png",
        content: "Make Payment",
    },
    {
        id: 7,
        number: '07',
        src_icon: "/images/tracking_icon.png",
        content: "Status Tracking",
    },
    {
        id: 8,
        number: '08',
        src_icon: "/images/certificate_icon.png",
        content: "Approvals/ Certificates",
    },
]
let data = process_data.map((item) =>
    <ul className='process-item' key={item.id}>
        <li>
            <div className='process-nos'>{item.number}</div>
            <div className='process-img'>
                <img src={item.src_icon}></img>
            </div>
            <div className='process-content'>
                {item.content}
            </div>
        </li>
        </ul>
)

export const Process = () => {
    return (
        <div className='process-container '>
            <div className='container'>
                <div className='row'>
                    <div className='process-heading text-center'>
                        <h3>Unique & Easy Process</h3>
                    </div>
                    <div className='process-sec'>
                    

                        {/* <ul className='process-item'>
                    <li>
                    <div className='process-nos'>01</div>
                    <div className='process-img'>
                    <img src='/images/user_reg_icon.png'></img>
                    </div>
                    <div className='process-content'>
                    "User"
                    <br/>
                    "Registration"
                    </div>
                    </li>
                </ul> */}
                        {data}
                       
                    </div>
                </div>
            </div>
        </div>
    )
};
