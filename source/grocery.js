import React, { Component} from 'react';

class GroceryList extends Component {
  render() {
    return (
      <ul>
        <ListItem quantity="1" name="Bread" />
        <ListItem quantity="6" name="Eggs" />
        <ListItem quantity="2" name="Milk" />
        <ListItem quantity="12" name="Slices of Bread" />
      </ul>
    );
  }
}


class ListItem extends Component {
  render() {
    return (
      <li>
        {this.props.quantity} x {this.props.name}
      </li>
    );
  }
}

React.render(<GroceryList/>, document.getElementById("root2"));