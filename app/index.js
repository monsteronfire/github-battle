//Notes: Pure Functions
//1. Evaulates the same result given the same arguments
//2. Doesn't depend on and doesn't modify the states of the variables out of its scope
//3. No side effects - i.e. no mutations, async reqs

// fn(d) =v
// Addy Osmani's Acronym to check React Componenets against
// 1. Focused
// 2. Independent
// 3. Reusable
// 4. Small
// 5. Testable


var React = require('react');
var ReactDOM = require('react-dom');

var USER_DATA  = {
  name: 'Tyler McGinnis',
  username: 'tylermcginnis',
  image: 'https://avatars0.githubusercontent.com/u/2933430?v=3&s=460'
}

var ProfilePic = React.createClass({
  render: function() {
    return (
      <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
    )
  }
});

var ProfileLink = React.createClass({
  render: function() {
    return (
        <div>
          <a href={'https://www.github.com/' + this.props.username}>
            {this.props.username}
          </a>
        </div>
    )
  }
});

var ProfileName = React.createClass({
  render: function() {
    return (
      <div>{this.props.name}</div>
    )
  }
});

var Avatar = React.createClass({
  render: function() {
    return (
        <div>
          <ProfilePic imageUrl={this.props.user.image} />
          <ProfileName name={this.props.user.name} />
          <ProfileLink username={this.props.user.username} />
        </div>
    )
  }
});

ReactDOM.render(
    <Avatar user={USER_DATA} />,
    document.getElementById('app')
);
