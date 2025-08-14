import React, {Component} from 'react';
import './index.css'
import PropTypes from "prop-types";

class List extends Component {
    static propTypes = {
        users: PropTypes.array,
        isFirst: PropTypes.bool,
        isLoading: PropTypes.bool,
        err: PropTypes.string,
    }

    render() {
        const {users, isFirst, isLoading, err} = this.props;
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
                                ))}
            </div>
        );
    }
}

export default List;