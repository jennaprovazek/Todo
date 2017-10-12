import React from 'react'
import PT from 'prop-types'

const propTypes = {
  onClick: PT.func.isRequired,
  completed: PT.bool.isRequired,
  text: PT.string.isRequired
}

const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

Todo.propTypes = propTypes;

export default Todo