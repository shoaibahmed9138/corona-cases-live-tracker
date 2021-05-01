import React from "react";

class NavBar extends React.Component {
  render() {
    return (
      <div className="navigation">
        <div className="nav-brand">
          SEIN India | Corona Virus Cases in Bengaluru
          <li class="list-item-inline">
            <a class="link link-active" href="/">
              Bed Info
            </a>
          </li>
          <li class="list-item-inline">
            <a class="link" href="projects.html">
              Oxygen Info
            </a>
          </li>
          <li class="list-item-inline">
            <a class="link" href="about.html">
              Home
            </a>
          </li>
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default NavBar;
