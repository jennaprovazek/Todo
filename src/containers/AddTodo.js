import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let input, picInput

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault() // default action that belongs to the event will not occur
          if (!input.value.trim()) { // trim removes whitespace
            return
          }
          dispatch(addTodo(input.value, picInput.value))
          input.value = ''
          picInput.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <input type="file"
               ref={node => {
                 picInput = node
               }}
        />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo