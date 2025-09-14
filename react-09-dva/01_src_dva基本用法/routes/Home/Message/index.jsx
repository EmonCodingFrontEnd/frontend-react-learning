import React, {Component} from 'react';
import {Link, Route} from 'dva/router';
import Detail from "./Detail";

class Message extends Component {
  state = {
    messageArr: [
      {id: "001", title: "消息001"},
      {id: "002", title: "消息002"},
      {id: "003", title: "消息003"}
    ]
  }

  pushShow = (id, title) => {
    return () => {
      this.props.history.push(`/home/message/detail/${id}/${title}`)
    }
  }

  replaceShow = (id, title) => {
    return () => {
      this.props.history.replace(`/home/message/detail/${id}/${title}`)
    }
  }

  render() {
    const {messageArr} = this.state;
    return (
      <div>
        <ul>
          {
            messageArr.map(item => (
              <li key={item.id}>
                {/*向路由组件传递params参数*/}
                <Link to={`/home/message/detail/${item.id}/${item.title}`}>{item.title}</Link>
                &nbsp;&nbsp;
                <button onClick={this.pushShow(item.id, item.title)}>push查看</button>
                &nbsp;&nbsp;
                <button onClick={this.replaceShow(item.id, item.title)}>replace查看</button>
              </li>
            ))
          }
        </ul>
        <hr/>
        {/*声明接收params参数*/}
        <Route path="/home/message/detail/:id/:title" component={Detail}/>
      </div>
    );
  }
}

export default Message;
