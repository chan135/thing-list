import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import ThingList from './ThingList'
import AddThings from './AddThings'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      things: {}
    }
    this.count = 1
    this.addThings = this.addThings.bind(this)
  }
  
addThings(ev) {
  const state = {...this.state}
  const thing = {
    id: this.count,
    name: '',
  }
  
  state.things[this.count++] = thing
  
  this.setState(state)// () => console.log(state))
}

saveThing = (thing) => {
  const things = {...this.state.things}
  things[thing.id] = thing
  this.setState ({ things })
}

removeThing = (thing) => {
  const things = {...this.state.things}
  delete things[thing.id]
  this.setState( { things })
}

  render() {
    return (
      <div className="App">
        <Header />
        <AddThings addThings={this.addThings}/>
        <ThingList things={this.state.things} 
        saveThing = {this.saveThing}
        removeThing = {this.removeThing}
         />
      </div>
    );
  }
}

export default App;
