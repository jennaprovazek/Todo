import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import ChangeColor from '../containers/ChangeColor'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <ChangeColor />
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App