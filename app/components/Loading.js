var React = require('react');

var Loading = React.createClass({
  getInitialState: function(){
    this.originalText = 'Loading';

    return {
      text: 'Loading'
    }
  },

  componentDidMount: function() {
    var stopper = 'Loading...';
    this.interval = setInterval(function() {
      if(this.state.text === stopper) {
        this.setState({
          text: 'Loading'
        })
      }
    })
  },

  render: function() {
    return (
      <div style={styles.container}>
        <p style={styles.content}>{this.state.text}</p>
      </div>
    )
  }
});

module.exports = Loading;
