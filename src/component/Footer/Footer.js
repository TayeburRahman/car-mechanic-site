import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-contenaer p-5">
            <div className="row pt-2 pb-2">
                <div className="col-md-6 col-sm-12 footer-left-site">
                    <h3 className="text-warning">Car Mechanic</h3>
                    <p>Praesent commodo cursus magna, <br /> vel scelerisque nisl consectetur.</p>
                </div>
                <div className="col-md-6 col-sm-12 footer-Right-site">
                    <ul>
                        <li> 
                            <a href="/home#experts">Experts</a> <br />
                            <a href="/home#survices">Services</a><br />
                            <a href="/"> Register</a><br />
                            <a href="/login">Login</a><br />
                        </li>
                    </ul>

                </div>
            </div>
            
        </div>
    );
};

export default Footer;