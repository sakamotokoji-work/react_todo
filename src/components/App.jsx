import React, { Component } from 'react';
import Form from './Form';
import List from './List';

/**
 * App.jsxでは以下の要件を満たす
 * 1.データ(state)を管理
 * 2.データ保存用関数の定義
 * 3.子コンポーネントへデータ保存用関数を受け渡し
 */
export default class App extends Component {
  /** 状態管理 */
  constructor(props) {
    //
    super(props);
    this.state = {
      todo: []
    };
    //bind()は何をしているか
    //https://inside.estie.co.jp/entry/javascript-bind-this
    this.handleAdd = this.handleAdd.bind(this);
  }

  /**
   * 
   *　改修予定
   */
  handleAdd(e) {
    e.preventDefault();
    // フォームから受け取ったデータをオブジェクトに挿入して、stateのtodo配列に追加
    this.state.todo.push({title: e.target.title.value}); // まだ保存されていない
    // setStateを使ってstateを上書き
    this.setState({todo: this.state.todo}); // 保存完了
    // inputのvalueを空に
    e.target.title.value = '';
  }

  render() {
    return (
      <div className="siimple-box siimple--bg-dark">
        <h1 className="siimple-box-title siimple--color-white">React Todo App</h1>
        <Form handleAdd={this.handleAdd}/>
        <div className="siimple-rule"></div>
        <List todos={this.state.todo}/>
      </div>
    );
  }
}