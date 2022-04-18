import React from 'react';
import {NavLink} from 'react-router-dom';
const Header = () => {
  return (
      <>
      
      <header id="header" className="header fixed-top">
         <div className="container-fluid  d-flex align-items-center justify-content-between">
           <NavLink to="/" className="logo d-flex align-items-center">
            <img src="assets/img/dynamicssqure-logo.webp" alt="logo" />
            </NavLink>
            <nav id="navbar" className="navbar">
               <ul>
                  <li className="dropdown">
                    <NavLink to="/solution"><span>Solutions</span> <i className="bi bi-chevron-down"></i></NavLink>
                     <ul>
                        <li className="dropdown">
                          <NavLink to="#"><span>Microsoft Dynamics 365</span> <i className="bi bi-chevron-right"></i></NavLink>
                           <ul>
                              <li className="dropdown">
                                <NavLink to="#"><span>Business Central</span> <i className="bi bi-chevron-right"></i></NavLink>
                                 <ul>
                                    <li><NavLink to="#">Implementation</NavLink></li>
                                    <li><NavLink to="#">Upgrade</NavLink></li>
                                    <li><NavLink to="#">Support</NavLink></li>
                                 </ul>
                              </li>
                              <li><NavLink to="#">Finance</NavLink></li>
                              <li><NavLink to="#">Supply Chain Management</NavLink></li>
                              <li><NavLink to="#">Customer Service</NavLink></li>
                              <li><NavLink to="#">Field Service</NavLink></li>
                              <li><NavLink to="#">Project Operations</NavLink></li>
                              <li><NavLink to="#">Marketing</NavLink></li>
                              <li><NavLink to="#">Human Resource</NavLink></li>
                           </ul>
                        </li>
                        <li><NavLink to="#">Azure IoT</NavLink></li>
                        <li><NavLink to="#">Power Platform</NavLink></li>
                        <li><NavLink to="#">Microsoft 365</NavLink></li>
                        <li><NavLink to="#">More Solutions</NavLink></li>
                     </ul>
                  </li>
                  <li className="dropdown">
                    <NavLink to="#"><span>Industries</span> <i className="bi bi-chevron-down"></i></NavLink>
                     <ul>
                        <li><NavLink to="#">Startups</NavLink></li>
                        <li><NavLink to="#">Food & Beverages</NavLink></li>
                        <li><NavLink to="#">Not for Profit</NavLink></li>
                        <li><NavLink to="#">E-Commerce</NavLink></li>
                        <li><NavLink to="#">Professional Services</NavLink></li>
                        <li><NavLink to="#">Manufacturing & Distribution</NavLink></li>
                     </ul>
                  </li>
                  <li className="dropdown">
                    <NavLink to="#"><span>Our Services</span> <i className="bi bi-chevron-down"></i></NavLink>
                     <ul>
                        <li><NavLink to="#">Implementation Services</NavLink></li>
                        <li><NavLink to="#">Support Services</NavLink></li>
                        <li><NavLink to="#">Upgrade Services</NavLink></li>
                     </ul>
                  </li>
                  <li className="dropdown">
                    <NavLink to="#"><span>Company</span> <i className="bi bi-chevron-down"></i></NavLink>
                     <ul>
                        <li><NavLink to="#">About Us</NavLink></li>
                        <li><NavLink to="#">Why Us</NavLink></li>
                        <li><NavLink to="#">Partner</NavLink></li>
                        <li><NavLink to="#">Career</NavLink></li>
                     </ul>
                  </li>
                  <li className="dropdown">
                    <NavLink to="#"><span>Resources</span> <i className="bi bi-chevron-down"></i></NavLink>
                     <ul>
                        <li><NavLink to="#">Blogs</NavLink></li>
                        <li><NavLink to="#">Video Blogs</NavLink></li>
                        <li><NavLink to="#">Case Studies</NavLink></li>
                        <li><NavLink to="#">Webinars</NavLink></li>
                     </ul>
                  </li>
                  <li><NavLink className="nav-link" to="#">Contact Us</NavLink></li>
                  <li><NavLink className="getstarted" to="#">0207 193 2502</NavLink></li>
               </ul>
               <i className="bi bi-list mobile-nav-toggle"></i>
            </nav>
         
         </div>
      </header>
      
      
      
      </>
   
  
  );
}

export default Header;