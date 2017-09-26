/*import React, {Component} from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      message: 'Hello React :)'
    }
  }

  render() {
    return (
      <h1 onClick={() => this.handleClick()}>{this.state.message}</h1>
    );
  }

  handleClick() {
      this.setState({message: 'test'})
  }
}
export default App;*/

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'

let store = createStore(todoApp)

render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
)
