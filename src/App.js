import React, { Component } from 'react';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'Xoni will learn react'
    }
  }
  changeStateData = () => {
    this.setState({
      userName: this.state.userName === "xoni" ? "Bob" : "Uka"
    })
  }
  render() {
    return (
      <div>
        <h4 className="bg-primary text-white text-center p-2">
          {this.state.userName}

        </h4>
        <button className='btn btn-primary m-3' onClick={this.changeStateData}>
          Change
        </button>
      </div>
    )
  };
}
