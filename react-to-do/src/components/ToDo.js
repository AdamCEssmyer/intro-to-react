import React, {Component} from 'react';

class ToDo extends Component {
  render() {
    return (
      <li>
      <input type="checkbox" checked={this.props.isCompleted} />
      </li>
    )
  }
}
export default ToDo;
