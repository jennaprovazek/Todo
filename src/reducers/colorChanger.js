const colorChanger = (state = 'blue', action) => {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return action.color === 'blue' ? 'red' : 'blue'
    default:
      return state
  }
}

export default colorChanger