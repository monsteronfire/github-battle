//Notes: Pure Functions
//1. Evaulates the same result given the same arguments
//2. Doesn't depend on and doesn't modify the states of the variables out of its scope
//3. No side effects - i.e. no mutations, async reqs

var React = require('react');
var ReactDOM = require('react-dom');

//var HelloWorld = React.createClass({
//  render: function() {
//    return (
//    <div>
//      Hello from the outside.
//    </div>
//    );
//  }
//});

//ReactDOM.render(
//    <HelloWorld />,
//    document.getElementById('app')
//);

//fn(d) = v

var USER_DATA  = {
  name: 'Tyler McGinnis',
  username: 'tylermcginnis',
  image: 'https://avatars0.githubusercontent.com/u/2933430?v=3&s=460'
}

var HelloWorld = React.createClass({
  render: function() {
    return (
        <div>Hello {this.props.name}</div>
    );
  }
});

ReactDOM.render(
    <HelloWorld name="Shaii" />,
    document.getElementById('app')
);
