import React, { Component } from "react";

import Person from "./Person/Person";
import "./App.css";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28, id: 1 },
      { name: "Manu", age: 23, id: 2 },
      { name: "Stephen", age: 25, id: 3 }
    ]
  };

  render() {

    const switchNamehandler = () => {
      this.setState({
        persons: [
          { name: "Maximilian", age: 22, id: 1 },
          { name: "ManuVer", age: 23, id: 2 },
          { name: "Stephenie", age: 25, id: 3 }
        ]
      })
    }

    const personsArray = this.state.persons.map(person => {
      return <Person key={person.id} name={person.name} age={person.age} />;
    });

    return (
      <div className="App">
        <button onClick={switchNamehandler}>Switch Name</button>
        {personsArray}
      </div>
    );
  }
}

export default App;
