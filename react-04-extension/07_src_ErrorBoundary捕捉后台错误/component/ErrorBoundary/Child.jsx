import React, {Component} from 'react';

class Child extends Component {
    state = {
        // users: [
        //     {id: '001', name: '张三', age: 18},
        //     {id: '002', name: '李四', age: 28},
        //     {id: '003', name: '王五', age: 38}
        // ],
        users: 1
    }

    render() {
        return (
            <div>
                <h2>我是Parent组件</h2>
                <ul>
                    {
                        this.state.users.map(item => (
                            <li key={item.id}>
                                {item.name} - {item.age}
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default Child;