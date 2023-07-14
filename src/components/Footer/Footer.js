import React from 'react';
import './Footer.css';

const Footer = () => (
  <div className="row border">
    <div className="col-lg-3 col-md-6 border-end px-4 py-4 ">
      <h5 className="country pb-3">USA</h5>
      <p className="address company-name custom-p">EB America</p>
      <p className="address custom-p">635 W 42nd St Suite 37E</p>
      <p className="address custom-p">New York, NY 10036</p>
      <p className="address custom-p">USA</p>
    </div>
    <div className="col-lg-3 col-md-6 border-end px-4 py-4">
      <h5 className="country pb-3">France</h5>
      <p className="company-name">EB Solutions</p>
      <p className="address custom-p">11 rue des Draperies</p>
      <p className="address custom-p">69450 St-Cyr-au-Mont-d'Or,</p>
      <p className="address custom-p">France</p>
    </div>
    <div className="col-lg-3 col-md-6 border-end px-4 py-4">
      <h5 className="country pb-3">Belgium</h5>
      <p className="company-name custom-p">EB International SPRL</p>
      <p className="address custom-p">Rampe du Val 1A, box 101,</p>
      <p className="address custom-p">B-1348 Louvain-la-Neuve,</p>
      <p className="address custom-p">Belgium</p>
    </div>
    <div className="col-lg-3 col-md-6 px-4 py-4">
      <h5 className="country pb-3">India</h5>
      <p className="company-name">EB Software (India) Pvt. Ltd.</p>
      <p className="address custom-p">Ecstasy 'C', 3rd Floor, S No 19/B,</p>
      <p className="address custom-p">Gulawani Maharaj Road,</p>
      <p className="address custom-p">Near Karishma Society, Kothrud,</p>
      <p className="address custom-p">Pune (MH) India - 411038</p>
    </div>
  </div>
);

export default Footer;
