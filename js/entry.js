import React from 'react';
import { render } from 'react-dom';

var HelloMessage = React.createClass({
    render : function(){
        return (<h1>Hello {this.props.name }</h1>);
    }
});

render(
    <HelloMessage name="john" />,
    document.getElementById('example')
);
