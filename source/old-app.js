
// import React from 'react';
import React, { Component} from 'react';
import GroceryList from  '../source/grocery.js';

//class Hello extends React.Component {
class Hello extends Component {
  render() {
    let place = "Bernie World";
    return (
      <h1>Hello {place}</h1>
    );
  }
}

React.render(<Hello/>, document.getElementById('root'));