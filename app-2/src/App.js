import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [`The Wise Man's Fear`, 'Darth Maul: Lockdown', 'The Historical Jesus', `Cursor's Fury`]
    }
  }

  render() {
    let booksToDisplay = this.state.books.map((element, index) => {
      return <h2 key={index}>{element}</h2>
    })

    return <div className="App"> {booksToDisplay}</div>;
  }
}

export default App;
