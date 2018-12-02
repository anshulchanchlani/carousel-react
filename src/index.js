import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Root extends Component {

    render() {
        return (
            <h2>Hello</h2>
        );
    }
}
ReactDOM.render(<Root/>,document.getElementById("app"))