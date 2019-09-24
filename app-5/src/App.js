import React, { Component } from "react";
import "./App.css";
import Image from "./Image";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Image url={"https://vignette.wikia.nocookie.net/starwars/images/5/50/Darth_Maul_profile.png/revision/latest?cb=20140209162228"}/>
      </div>
    );
  }
}
