import React, { Component } from 'react';
import Form from './Form';

export default class App extends Component {
  render() {
    return (
      <div className="siimple-box siimple--bg-dark">
        <h1 className="siimple-box-title siimple--color-white">React Todo App</h1>
        <Form/>
      </div>
    );
  }
}