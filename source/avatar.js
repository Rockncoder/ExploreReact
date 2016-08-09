
import React from 'react';

var AvatarComponent = React.createClass({
  render: function () {
    return (
      <div>
        <ProfilePicture username={this.props.username}/>
        <ProfileLink username={this.props.username}/>
      </div>
    );
  }
});

var ProfilePicture = React.createClass({
  render: function () {
    return (
      <img src={'https://graph.facebook.com/' + this.props.username + '/picture'}/>
    );
  }
});


var ProfileLink = React.createClass({
  render: function () {
    return (
      <a src={'https://www.facebook.com/' + this.props.username}>{this.props.username}</a>
    );
  }
});

React.render(<AvatarComponent username="troyanthony.miles"/>, document.getElementById('example'));