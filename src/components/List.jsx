import React, { Component } from 'react';

const style = {
  maxWidth: '40%',
};

const btn = {
  cursor: 'pointer'
};

const List = (props) => (
  <ul className="siimple-list">
    {props.todos.map((todo, i) => {
      return <li key={i} className="siimple-list-item siimple--bg-white" style={style}>{todo.title} <span className="siimple-tag siimple-tag--error siimple-hover" style={btn}>Delete</span></li>
    })};
  </ul>
);

export default List;