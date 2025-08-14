import React, {Component} from 'react';
import PubSub from 'pubsub-js'

// import axios from "axios";

class Index extends Component {

    search = async (event) => {
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
        PubSub.publish('githubusers', {isFirst: false, isLoading: true})
        /*axios.get(`http://localhost:3000/api1/search/users?q=${keyword}`).then(
            res => {
                console.log('成功了', res.data)
                PubSub.publish('githubusers', {isLoading: false, users: res.data.items})
            }, error => {
                console.log('失败了', error)
                PubSub.publish('githubusers', {isLoading: false, err: error.message})
            }
        )*/

        // 发送网络请求，使用fetch发送，未优化版本
        /*fetch(`http://localhost:3000/api1/search/users?q=${keyword}`).then(response => {
            console.log('联系服务器成功了！')
            return response.json();
        }, error => {
            console.log('联系服务器事变了！', error)
            return new Promise(() => {
            });
        }).then(response => {
            console.log('获取数据成功了！', response);
        }, error => {
            console.log('获取数据失败了！', error);
        })*/

        // 发送网络请求，使用fetch发送，优化版本
        /*fetch(`http://localhost:3000/api1/search/users?q=${keyword}`).then(response => {
            console.log('联系服务器成功了！')
            return response.json();
        }).then(response => {
            console.log('获取数据成功了！', response);
        }).catch(error => {
            console.log('请求出错了！', error)
        })*/

        // 发送网络请求，使用fetch发送，最简化版
        try {
            const response = await fetch(`http://localhost:3000/api1/search/users?q=${keyword}`)
            const data = await response.json()
            console.log('获取数据成功了！', data)
            PubSub.publish('githubusers', {isLoading: false, users: data.items})
        } catch (e) {
            console.log('请求出错了！', e)
            PubSub.publish('githubusers', {isLoading: false, err: e.message})
        }
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