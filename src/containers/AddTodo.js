import React from 'react'
import PT from 'prop-types';
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const propTypes = {
  dispatch: PT.func
}

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault() // default action that belongs to the event will not occur
          if (!input.value.trim()) { // trim removes whitespace
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">
          Add Todo
        </button>
      </form>
      <br/>
    </div>
  )
}
AddTodo = connect()(AddTodo)

AddTodo.propTypes = propTypes;

export default AddTodo