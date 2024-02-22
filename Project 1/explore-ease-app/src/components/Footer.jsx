import React from "react";
import "../Css/Footer.css";
export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        © Explore-EASE
        <div>
          <a href="https://www.mapsofindia.com/maps/india/tourist-centers.htm" className="link">
            Travelmap<span></span>
          </a>
          <a href="https://www.cdac.in/index.aspx?id=TVM" className="link">
            About Us
          </a>
          <a href="https://www.termsfeed.com/blog/5-reasons-need-terms-conditions/#:~:text=A%20Terms%20and%20Conditions%20agreement%20acts%20as%20a%20legally%20binding,your%20website%20or%20mobile%20app." className="link">
            Terms & Conditions<span></span>
          </a>
          <a href="https://privacyterms.io/privacy/privacy-policy-vs-terms-and-conditions/#:~:text=The%20biggest%20difference%20between%20a,pertaining%20to%20the%20aforementioned%20purposes." className="link">
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
}
