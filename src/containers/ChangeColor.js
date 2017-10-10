import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PT from 'prop-types'
import { changeColor } from '../actions';

const propTypes = {
  color: PT.string.isRequired,
  changeColor: PT.func.isRequired
}

class ChangeColor extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.changeColor(this.props.color);
  }

  render() {
    return (
      <div>
        <h1 style={{color:this.props.color}}>Todo List</h1>
        <button onClick={this.handleClick}>
          Change Color
        </button>
      <p></p>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    color: state.color
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({changeColor: changeColor}, dispatch);
}

ChangeColor.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(ChangeColor);

