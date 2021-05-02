import React from "react";

class NavBar extends React.Component {
  render() {
    return (
      <div className="navigation">
        <div className="nav-brand">
          Corona Virus Cases in Bengaluru
          <li class="list-item-inline">
            <a class="link link-active" href="https://bbmpgov.com/chbms/">
              Bed Info
            </a>
          </li>
          <li class="list-item-inline">
            <a
              class="link"
              href="https://mobile.twitter.com/darthdevi/status/1383678970332209153?s=09"
            >
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
