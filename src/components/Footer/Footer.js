import React from 'react';
import './Footer.css';

export const Footer = () => {
    return (
        <div className="footer">
            <div className='main-footer p-t-40 p-b-20'>
                <div className="container ftr-container">
                    <div className='footer-section ftr-contact'>
                        <h4 className='footer-sec-heading'>Contact Details</h4>
                        <ul className='footer-details'>
                            <li>
                                <img src='/images/location_icon_ftr.png'></img>
                                <strong>Department of Industries, Udyog Bhawan, Bemloe,
                                    <br />
                                    Shimla-171001, Himachal Pradesh
                                </strong>
                            </li>
                            <li>
                                <img src='/images/phone_icon_ftr.png'></img>
                                <strong>"0177-2625240"
                                    <br />
                                    "Fax: 2650657"
                                </strong>
                            </li>
                            <li>
                                <img src='/images/email_icon_ftr.png'></img>
                                <strong>dirindus-hp@nic.in
                                </strong>
                            </li>
                        </ul>
                    </div>

                    <div className='footer-section ftr-link_1'>
                        <h4 className='footer-sec-heading'>Quick Links</h4>
                        <ul className='footer-details ftr-link' >
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>FAQs</li>
                        </ul>
                    </div>
                    <div className='footer-section ftr-link_2'>
                        <h4 className='footer-sec-heading'>Other Links</h4>
                        <ul className='footer-details ftr-link' >
                            <li>Term Of Use</li>
                            <li>Disclaimer</li>
                            <li>Feedback/Query</li>
                        </ul>
                    </div>
                    <div className='footer-section ftr-info'>
                    <h4 className='footer-sec-heading'>Web Information Manager</h4>
                        <ul className='footer-details'>
                            <li>
                                <img src='/images/manager_icon_ftr.png'></img>
                                <strong>Sanjay Sharma
                                    <br />
                                    (Additional Director Industries)
                                </strong>
                            </li>
                            <li>
                                <img src='/images/phone_icon_ftr.png'></img>
                                <strong>"0177-2663204"
                                </strong>
                            </li>
                            <li>
                                <img src='/images/email_icon_ftr.png'></img>
                                <strong>dirindus-hp@nic.in
                                </strong>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
