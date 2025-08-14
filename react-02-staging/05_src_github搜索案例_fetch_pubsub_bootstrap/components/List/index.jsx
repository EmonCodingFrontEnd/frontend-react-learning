import React, {Component} from 'react';
import PubSub from 'pubsub-js'
import './index.css'

class List extends Component {
    state = {
        users: [],
        isFirst: true, // 是否首次加载页面
        isLoading: false, // 是否数据加载中
        err: '' // 存储请求错误信息
    }

    componentDidMount() {
        this.token = PubSub.subscribe('githubusers', (msg, data) => {
            this.setState(data)
        })
    }

    componentWillUnmount() {
        PubSub.unsubscribe(this.token);
    }

    render() {
        const {users, isFirst, isLoading, err} = this.state;
        return (
            <div className="row">
                {
                    isFirst ? <h2>欢迎使用，请输入关键字然后点击搜索！</h2>
                        : isLoading ? <h2>正在加载中...</h2>
                            : err ?
                                <h2 style={{color: 'red'}}>{err}</h2> :
                                users.map((user, index) => (
                                    <div key={user.id} className="card">
                                        <a rel="noreferrer" href={user.html_url} target="_blank">
                                            <img src={user.avatar_url} style={{width: '100px'}} alt="avatar"/>
                                        </a>
                                        <p className="card-text">{user.login}</p>
                                    </div>
                                ))
                }
            </div>
        );
    }
}

export default List;