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
          { name: "Maxe", age: 22, id: 1 },
          { name: "ManuVer", age: 23, id: 2 },
          { name: "Steph", age: 25, id: 3 }
        ]
      });
    };

    const nameChangeHandler = event => {
      this.setState({
        persons: [
          { name: "Maxe", age: 22, id: 1 },
          { name: event.target.value, age: 23, id: 2 },
          { name: "Steph", age: 25, id: 3 }
        ]
      });
    };

    const personsArray = this.state.persons.map(person => {
      return (
        <Person
          key={person.id}
          name={person.name}
          age={person.age}
          change={nameChangeHandler}
        />
      );
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
