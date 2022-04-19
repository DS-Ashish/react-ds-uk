

import React from 'react';
import {NavLink} from 'react-router-dom';
const Footer = () => {
  return (
      <>
<footer id="footer" className="footer">
<div className="footer-top">
   <div className="container">
      <div className="row gy-4">
         <div className="col-lg-5 col-md-12 footer-info">
           <NavLink to="/" className="logo d-flex align-items-center">
            <img src="react-ds-uk/assets/img/dsuk-footer-logo.svg" alt="dsuk-footer-logo" />
            </NavLink>
            <p>Dynamics Square is UK's leading Microsoft Gold Certified Partner that caters to the needs of orgnizations who can source next-gen Microsoft Business<br /> Apps from our highly skilled Microsoft consultants.</p>
         </div>
         <div className="col-lg-2 col-6 footer-links">
            <h4>BUSINESS APPS</h4>
            <ul>
               <li><i className="bi bi-chevron-right"></i><NavLink to="#">  Business Central</NavLink></li>
               <li><i className="bi bi-chevron-right"></i><NavLink to="#">Finance</NavLink></li>
               <li><i className="bi bi-chevron-right"></i><NavLink to="#">Supply Chain</NavLink></li>
               <li><i className="bi bi-chevron-right"></i><NavLink to="#">Sales</NavLink></li>
               <li><i className="bi bi-chevron-right"></i><NavLink to="#">Power BI</NavLink></li>
               <li><i className="bi bi-chevron-right"></i><NavLink to="#">Azure IoT</NavLink></li>
               <li><i className="bi bi-chevron-right"></i><NavLink to="#">ERP (NAV/GP/AX)</NavLink></li>
               <li><i className="bi bi-chevron-right"></i><NavLink to="#">CRM</NavLink></li>
            </ul>
         </div>
         <div className="col-lg-2 col-6 footer-links">
            <h4>QUICK LINKS</h4>
            <ul>
               <li><i className="bi bi-chevron-right"></i><NavLink to="#">About us</NavLink></li>
               <li><i className="bi bi-chevron-right"></i><NavLink to="#">Why Us</NavLink></li>
               <li><i className="bi bi-chevron-right"></i><NavLink to="#">Our Services</NavLink></li>
               <li><i className="bi bi-chevron-right"></i><NavLink to="#">Our Partners</NavLink></li>
               <li><i className="bi bi-chevron-right"></i><NavLink to="#">Contact Us</NavLink></li>
               <li><i className="bi bi-chevron-right"></i><NavLink to="#">Blog</NavLink></li>
               <li><i className="bi bi-chevron-right"></i><NavLink to="#">Video Blog</NavLink></li>
               <li><i className="bi bi-chevron-right"></i><NavLink to="#">Terms of service</NavLink></li>
               <li><i className="bi bi-chevron-right"></i><NavLink to="#">Privacy policy</NavLink></li>
            </ul>
         </div>
         <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
            <img src="react-ds-uk/assets/img/microsoft-partner.svg" alt="microsoft-partner" />
            <div className="social-links mt-3">
              <NavLink to="#" className="twitter"><i className="bi bi-twitter"></i></NavLink>
              <NavLink to="#" className="facebook"><i className="bi bi-facebook"></i></NavLink>
              <NavLink to="#" className="instagram"><i className="bi bi-instagram"></i></NavLink>
              <NavLink to="#" className="linkedin"><i className="bi bi-linkedin"></i></NavLink>
            </div>
         </div>
      </div>
   </div>
</div>
<div className="container">
   <div className="copyright">
      &copy; Copyright <strong><span>2021 Dynamics Square.</span></strong><div className="footer-extra-link">
       <NavLink to="#">Terms of Use </NavLink>
       <NavLink to="#">| Cookie</NavLink>
       <NavLink to="#">| Privacy</NavLink>
       <NavLink to="#">| Sitemap</NavLink>
      </div>
   </div>
</div>
</footer>
<NavLink to="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></NavLink>
  
</>
   
  
   );
 }
 
 export default Footer;