import React from "react";
import cases from "./cases.png";
import highlow from "./highandlow.png";
class AreaWise extends React.Component {
  render() {
    return (
      <div className="ui container">
        <div class="ui four column grid">
          <div class="row">
            <div class="column ">
              <div class="ui segment xds">
                <h4 align="center">East Zone</h4>
                <h5 align="center">Active Cases = 24,664</h5>
              </div>
            </div>
            <div class="column">
              <div class="ui segment xds">
                <h4 align="center">West Zone</h4>
                <h5 align="center">Active Cases = 19,848</h5>
              </div>
            </div>
            <div class="column">
              <div class="ui segment xds">
                <h4 align="center">South Zone</h4>
                <h5 align="center">Active Cases = 25,701</h5>
              </div>
            </div>
            <div class="column">
              <div class="ui segment xds">
                <h4 align="center">Bommanahalli</h4>
                <h5 align="center">Active Cases = 22,957</h5>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="ui segment xds">
              <h4 align="center">Yelahanka</h4>
              <h5 align="center">Active Cases = 13,509</h5>
            </div>
          </div>
          <div class="column">
            <div class="ui segment xds">
              <h4 align="center">Dasarahalli</h4>
              <h5 align="center">Active Cases = 5,408</h5>
            </div>
          </div>
          <div class="column">
            <div class="ui segment xds">
              <h4 align="center">Mahadevpura</h4>
              <h5 align="center">Active Cases = 20,339</h5>
            </div>
          </div>
          <div class="column">
            <div class="ui segment xds">
              <h4 align="center">RR Nagara</h4>
              <h5 align="center">Active Cases = 15,942</h5>
            </div>
          </div>
          <div class="column">
            <div class="ui segment xds">
              <h4 align="center">Outside Bengaluru</h4>
              <h5 align="center">Active Cases = 15,344</h5>
            </div>
          </div>
        </div>
        <div className="hero">
          <br />
          <br />
          <img className="hero-imgg" src={cases} alt="Piechart" />
          <br />
          <br />
          <br />
          <img
            className="hero-imgg"
            src={highlow}
            alt="Highest and Lowest Cases"
          />
        </div>
      </div>
    );
  }
}

export default AreaWise;
