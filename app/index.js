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
var routes = require('./config/routes');

ReactDOM.render(
    routes,
    document.getElementById('app')
);
