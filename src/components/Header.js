import React from "react";
import distancing from "./distancing3.png";
class Header extends React.Component {
  render() {
    return (
      <div className="hero">
        <h1 class="hero-heading">
          Latest Updates <small>(Daily Updated)</small>
        </h1>

        <img className="hero-img" src={distancing} alt="Social-Distancing" />
      </div>
    );
  }
}

export default Header;
