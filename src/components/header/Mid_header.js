import React from 'react';
import './Mid_header.css';

const Mid_header = () => {
  return (
    <div className='mid-header'>
      <div className='mid-header-link' >
        <a href="" className='mid-header-logo'>
          <img src="/image/logo.png" />
          <div>
          <h3 className='heading'>Single Window Clearence System</h3>
          <h5 className='cap'>Govt. of Himachal Pradesh</h5>
          </div>
        </a>
        <div className="header-buttons-div">
          <ul>
            <li><a  className="header-buttons" href=''>MSME Self Certifiction</a></li>
            <li><a className="header-buttons" href=''>Apply for Incentive</a></li>
            <li><a className="header-buttons" href=''>Investor Registration</a></li>
            <li><a className="header-buttons" href=''>Investor Login</a></li>
            <li><a className="header-buttons" href=''>Department Login</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Mid_header;