import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class App extends Component {

  myMembers = mem => <p>{mem.id}</p>

  render() {
    const myFamily = [
    {
      id: 1,
      name: 'nagesh kumar'
    },
    {
      id: 2,
      name: 'Aruna kumari'
    },
    {
      id: 3,
      name: 'Aditya kumar'
    }
  ]
  const myFamilys = [1, 2, 3, 4, 5]
  
    return (
      <div>        
        <p>
          Start editing to see some magic happen :)
        </p>
        {
          myFamily.map( this.myMembers )
        }
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
