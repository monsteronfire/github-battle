var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');

var ConfirmBattleContainer = React.createClass({
  contextTypes: function() {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      isLoading: true,
      playerInfo: []
    }
  },

  render: function() {
    return (
      <ConfirmBattle />
    )
  }
});

module.exports = ConfirmBattleContainer;
