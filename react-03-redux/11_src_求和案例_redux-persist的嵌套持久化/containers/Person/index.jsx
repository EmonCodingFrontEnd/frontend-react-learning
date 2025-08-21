import React, {Component} from 'react';
import {nanoid} from "nanoid";
import {connect} from "react-redux";
import {addPerson, addPersonHobby, modifyAge} from "../../redux/actions/person";

// ==================================================定义UI组件 beg==================================================

class Person extends Component {
    state = {
        currentHobby: ''
    };

    render() {
        return (
            <div>
                <h1>我是Person组件：上方组件求和结果：{this.props.count.count}</h1>
                <input ref={c => this.nameNode = c} type="text" placeholder="输入名字"/><br/>
                <input ref={c => this.ageNode = c} type="text" placeholder="输入年龄"/>
                <button onClick={this.addPerson}>添加人员</button>
                <ul>
                    {
                        this.props.persons.map(person => (
                            <li key={person.id}>
                                <span>姓名：{person.name}</span>&nbsp;&nbsp;
                                <span>年龄：{person.age}</span>&nbsp;&nbsp;
                                <span>性别：{person.sex}</span>
                                <button onClick={() => this.modifyAge(person.id)}>修改年龄</button>
                                <div>爱好：
                                    <input
                                        value={this.state.currentHobby}
                                        onChange={e => this.setState({currentHobby: e.target.value})}
                                        type="text"
                                        placeholder="输入爱好"
                                    />&nbsp;&nbsp;
                                    <button onClick={() => this.addPersonHobby(person.id)}>添加爱好</button>
                                    <ul>
                                        {
                                            person.hobbies.map(hobby => (
                                                <li key={hobby}>{hobby}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }

    addPerson = () => {
        const name = this.nameNode.value;
        const age = this.ageNode.value;
        if (!name || !age) {
            return;
        }

        const personObj = {id: nanoid(), name, age};
        this.props.addPerson(personObj);

        this.nameNode.value = '';
        this.ageNode.value = '';
    }

    addPersonHobby = (personId) => {
        // 获取当前输入的爱好
        const hobby = this.state.currentHobby.trim(); // 去除前后空格
        if (!hobby) {
            return; // 如果爱好为空，则不添加
        }

        // 调用 Redux action，传递人员id和爱好
        this.props.addPersonHobby({id: personId, hobby});
        // 清空输入框
        this.setState({currentHobby: ''});
    }

    modifyAge(personId) {
        this.props.modifyAge({id: personId, age: Math.floor(5 + Math.random() * 30)});
    }
}

// ==================================================定义UI组件 end==================================================

export default connect(
    // redux-persist嵌套持久化后，state.count.count等效于之前的state.count
    state => ({persons: state.persons, count: state.count}),
    {
        addPerson,
        addPersonHobby,
        modifyAge
    }
)(Person);