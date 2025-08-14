import React, {Component} from 'react';
import PropTypes from "prop-types";
import axios from "axios";

class Index extends Component {
    static propTypes = {
        updateAppState: PropTypes.func.isRequired,
    };

    search = (event) => {
        // 连续结构赋值+重命名
        const {keyWorldElement: {value: keyword}} = this
        if (!keyword.trim()) {
            return
        }

        // 如果在输入库直接回车
        if (event.target === this.keyWorldElement) {
            const {keyCode} = event
            if (keyCode !== 13) {
                return
            }
        }

        // 发送请求之前，更新状态
        this.props.updateAppState({isFirst: false, isLoading: true});
        axios.get(`http://localhost:3000/api1/search/users?q=${keyword}`).then(
            res => {
                console.log('成功了', res.data)
                this.props.updateAppState({isLoading: false, users: res.data.items})
            }, error => {
                console.log('失败了', error)
                this.props.updateAppState({isLoading: false, err: error.message})
            }
        )
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索GitHub用户</h3>
                <div>
                    <input ref={c => this.keyWorldElement = c} onKeyUp={this.search} type="text"
                           placeholder="输入要搜索的用户名"/>&nbsp;
                    <button onClick={this.search}>搜索</button>
                </div>
            </section>
        );
    }
}

export default Index;