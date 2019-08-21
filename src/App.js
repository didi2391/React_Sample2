import React, { useState } from "react";

import Person from "./Person/Person";
import "./App.css";

const app = () => {
  const persons = {
    persons: [
      { name: "Max", age: 28, id: 1 },
      { name: "Manu", age: 23, id: 2 },
      { name: "Stephen", age: 25, id: 3 }
    ]
  };

  const [otherState, setOtherState] = useState("Some Other Value");

  const [personState, setPersons] = useState(persons);

  console.log(personState, otherState);

  const personsArray = personState.persons.map(person => {
    return <Person key={person.id} name={person.name} age={person.age} />;
  });

  const switchNamehandler = () => {
    setPersons({
      persons: [
        { name: "Maximilian", age: 22, id: 1 },
        { name: "ManuVer", age: 23, id: 2 },
        { name: "Stephenie", age: 25, id: 3 }
      ]
    });
  };

  return (
    <div className="App">
      <button onClick={switchNamehandler}>Switch Name</button>
      {personsArray}
    </div>
  );
};

export default app;
