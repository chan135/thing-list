import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import ThingList from './ThingList'
import AddThings from './AddThings'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      things: {
        'thing-1': { id: 'thing-1', name: 'Milk' },
        'thing-2': { id: 'thing-2', name: 'Bread' },
        'thing-3': { id: 'thing-3', name: 'Bibb lettuce' },
      }
    }
    this.addThings = this.addThings.bind(this)
  }
  
addThings(ev) {
  const state = {...this.state}
  const thing = {
    id: 'thing-4',
    name: 'Cereal',
  }

  state.things['thing-4'] = thing
  
  this.setState(state, () => console.log(state))
}

  render() {
    return (
      <div className="App">
        <Header />
        <AddThings addThings={this.addThings}/>
        <ThingList things={this.state.things} />
      </div>
    );
  }
}

export default App;
