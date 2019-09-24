import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
    filterString: '',
    books: [`The Wise Man's Fear`, 'Darth Maul: Lockdown', 'The Historical Jesus', `Cursor's Fury`]
    }
  }

  handleChange(filter){
    this.setState({filterString: filter})
  }

  

  render() {

    let booksToDisplay = this.state.books.filter((element, index) => {
      return element.includes(this.state.filterString)
    })
    .map((element, index) => {
      return <h2 key={index}>{element}</h2>
    })
    
    
    return (
    <div className="App">
      <input onChange={e => this.handleChange(e.target.value)} type='text' /> 
    {booksToDisplay}
    </div>
    )
  }
}

export default App;
