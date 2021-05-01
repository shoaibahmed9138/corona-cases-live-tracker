import React from "react";
import AreaWise from "./AreaWise";
import Footer from "./Footer";

import Personal from "./Personal";
import Header from "./Header";
import NavBar from "./NavBar";
class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui container">
          <NavBar />
        </div>
        <div className="ui container">
          <Header />
        </div>
        <div className="ui container">
          <AreaWise />
        </div>
        <br />
        <br />
        <div className="ui container">
          <Personal />
        </div>
        <br />
        <br />
        <div className="ui container">
          <div className="footer">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
