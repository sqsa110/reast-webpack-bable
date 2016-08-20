var React = require('react');
var App = React.createClass({
    render: function() {
        return (
            <div>
                hello world!
            </div>
        );
    }
});
React.render(
    <App />, document.body
);
