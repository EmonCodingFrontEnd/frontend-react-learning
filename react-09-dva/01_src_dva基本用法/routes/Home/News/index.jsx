import React, {Component} from 'react';
import {queryTodos} from "../../../services/news";

class News extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    queryTodos().then(res => {
      this.setState({
        todos: res.data
      })
    })
  }

  render() {
    return (
      <ul>
        {
          this.state.todos.map(item => (
            <li key={item.id}>{item.name}</li>
          ))
        }
      </ul>
    );
  }
}

export default News;
