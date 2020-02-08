import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instructors: [
        {
          name: 'Tim',
          hobbies: ['sailing', 'react']
        }, {
          name: 'Matt',
          hobbies: ['math', 'd3']
        }, {
          name: 'Colt',
          hobbies: ['css', 'hiking']
        }, {
          name: 'Elie',
          hobbies: ['music', 'es2015']
        }
      ]
    };
    setTimeout(() => {
      let instructors = [...this.state.instructors];
      const randInst = Math.floor(Math.random() * instructors.length);

      instructors = instructors.map((inst, i) => {
        if (i === randInst) {
          const randHobby = Math.floor(Math.random() * inst.hobbies.length);
          let hobbies = [...inst.hobbies];
          inst.hobbies = [...hobbies.slice(0, randHobby), ...hobbies.slice(randHobby + 1)]
        }
        return inst;
      });

      this.setState({ instructors });
    }, 5000);
  }
  render() {
    const instructors = this.state.instructors.map((instructor, index) => (
      <li key={index}>
        <h3>{instructor.name}</h3>
        <h4>Hobbies: {instructor.hobbies.join(", ")}</h4>
      </li>
    ));
    return (
      <div className="App">
        <ul>
          {instructors}
        </ul>
      </div>
    );
  }
}

export default App;
