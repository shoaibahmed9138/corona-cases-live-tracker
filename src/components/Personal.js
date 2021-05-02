import React from "react";
import naman from "./naman.jpeg";
import shob from "./shob.jpeg";
class Personal extends React.Component {
  render() {
    return (
      <div className="ui container">
        <h1 align="center">The Team</h1>
        <div class="ui two column grid">
          <div class="column">
            <div class="ui segment">
              <img src={naman} className="pp" />
              <h2> Naman Oli </h2>
              <h4>UG student at JSS STU(SJCE), Mysuru </h4>
              <a href="https://www.linkedin.com/in/naman-oli-01627518b/">
                <button class="ui circular linkedin icon button">
                  <i class="linkedin icon"></i>
                </button>
              </a>
              <a href="https://github.com/NamanOli">
                <button class="ui circular github icon button">
                  <i class="github icon" />
                </button>
              </a>
              <a href="/">
                <button class="ui circular instagram icon button">
                  <i class="instagram icon"></i>
                </button>
              </a>
              <br />
              <br />
              <br />
            </div>
          </div>
          <div class="column">
            <div class="ui segment">
              <img src={shob} className="pp" />
              <h2> Shoaib Ahmed</h2>
              <h4>UG student at JSS STU(SJCE), Mysuru </h4>
              <a href="https://www.linkedin.com/in/shoaib-ahmed-s-990b301a9/">
                <button class="ui circular linkedin icon button">
                  <i class="linkedin icon"></i>
                </button>
              </a>
              <a href="https://github.com/shoaibahmed9138">
                <button class="ui circular github icon button">
                  <i class="github icon" />
                </button>
              </a>
              <a href="/">
                <button class="ui circular instagram icon button">
                  <i class="instagram icon"></i>
                </button>
              </a>
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Personal;
