const colorChanger = (state = '#FF0000', action) => {
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  switch (action.type) {
    case 'CHANGE_COLOR':
      return getRandomColor(); //action.color === 'Blue' ? 'red' : 'blue'
    default:
      return state
  }
}

export default colorChanger