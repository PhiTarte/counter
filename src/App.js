import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
    this.increment = this.increment.bind(this)  // relier le this au "bon" this
    this.decrement = this.decrement.bind(this)
  }

  increment() {
    console.log('increment')
    //modifier le state
    this.setState(
      prevState => ({count: prevState.count + 1}) // envoyer l'objet entre parenthese pour éviter le warning
    )
  }

  decrement() {
    console.log('decrement')
    //modifier le state SI l'êtat est supérieur à 0
    if (this.state.count >0) {
    this.setState(
      prevState => ({count: prevState.count - 1})
    )}
  }  

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.decrement} >-</button>
        <button onClick={this.increment} >+</button>
      </div>
    );
  }
}

export default App;
