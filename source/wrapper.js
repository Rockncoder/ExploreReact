
var LIWrapper = React.createClass({
  render:function(){
    return (
      <li>{this.props.data.text}</li>
    );
  }
});

var OurComponent = React.createClass({
  render: function(){
    return (
      <ul>
        {this.props.out.map(function(ans){
          return <LIWrapper key={ans.id} data={ans} />
        })}
      </ul>
    );
  }
});