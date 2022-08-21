import React from 'react';
import { FaSearch } from "react-icons/fa";
import './Top_header.css';

const Top_header = () => {
  return (
    <div className='top-header'>
      <div className='top-header-contact'>
        <ul className='top-header-fonts'>
          <li><a>A-</a></li>
          <li><a>A</a></li>
          <li><a>A+</a></li>
        </ul>
        <ul className='top-header-help'>
          <li>
            <span><img src='/images/phone_icon_top.png' />0177-2625240</span>
          </li>
          <li>
            <span><img src='/images/email_icon_top.png' /></span>
            <a>dirindus-hp@nic.in</a>
          </li>
        </ul>
      </div>
      <div className='top-header-link'>
        <ul className='top-header-link-itms'>
          <li><a className="header-buttons">Apply for permission under section 118</a></li>
          <li><a className="header-buttons">Online Services</a></li>
          <li><a className="header-buttons">Facilitation Council</a></li>
        </ul>
        <form className="d-flex search-bar " role="search">
          <input className="form-control search-input" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-secondary search-button" type="submit"><FaSearch /></button>
        </form>
      </div>

    </div>
  )
}
export default Top_header;
