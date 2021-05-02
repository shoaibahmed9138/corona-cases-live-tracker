import React from "react";
import distancing from "./distancing3.png";
class Header extends React.Component {
  render() {
    return (
      <div className="hero">
        <h1 class="hero-heading">Latest Updates</h1>
        <p className="hero-text">
          Active cases in Bengaluru = <b>2,24,152</b>
        </p>
        <img className="hero-img" src={distancing} alt="Social-Distancing" />
        <br />
        <a href="https://bbmp.gov.in/covid19.html">
          <p className="hero-text">
            Click here for the source!(Latest date: <b>28-04-21</b>)
          </p>
        </a>
      </div>
    );
  }
}

export default Header;
