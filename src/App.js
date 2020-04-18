import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Xon', age: 27 },
      { name: 'Uka', age: 27 },
      { name: 'Egzon', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'Xoni!', age: 24 },
        { name: 'Egzon', age: 27 },
        { name: 'Test', age: 27 }
      ]
    });
  };
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }
  render() {
    const style = {
      backgroundColor: 'white',
      font: "inherit",
      border: "1px solid black",
      padding: "8px"
    }
    let persons = null;
    if (this.state.showPersons === true) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person name={person.name} age={person.age} />
          })}
        </div>
      )
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}
      </div>
    );
  }
}

export default App;
