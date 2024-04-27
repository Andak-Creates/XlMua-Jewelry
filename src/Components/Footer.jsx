import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="foot shapedividers_com-8344">
        <div className="title">
          <h3>XL Mua & Jewelries</h3>
        </div>

        <div className="footComponents">
          <p>Custom Jewelries</p>
          <p>Men's Watches</p>
          <p>Bracelets And Rings</p>
          <p>Luxury Packages</p>
        </div>

        <form className="input-group">
          <h1>Join Us!</h1>
          <label className="footer-Label">
            Email*
            <input type="email" name="email" required className="input" />
          </label>
          <button>Send</button>
        </form>
      </div>
      <div className="copyRight">
        all rights reserved, VindiCodes<sup>©️</sup>{" "}
      </div>
    </div>
  );
};

export default Footer;
