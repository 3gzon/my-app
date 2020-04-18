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
    otherState: 'some other value'
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

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
