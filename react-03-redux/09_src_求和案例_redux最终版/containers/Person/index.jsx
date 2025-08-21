import React, {Component} from 'react';
import {nanoid} from "nanoid";
import {connect} from "react-redux";
import {addPerson} from "../../redux/actions/person";

// ==================================================定义UI组件 beg==================================================

class Person extends Component {
    render() {
        return (
            <div>
                <h1>我是Person组件：上方组件求和结果：{this.props.count}</h1>
                <input ref={c => this.nameNode = c} type="text" placeholder="输入名字"/><br/>
                <input ref={c => this.ageNode = c} type="text" placeholder="输入年龄"/>
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {
                        this.props.persons.map(person => (
                            <li key={person.id}>
                                <span>姓名：{person.name}</span>&nbsp;&nbsp;
                                <span>年龄：{person.age}</span>&nbsp;&nbsp;
                                <span>性别：{person.sex}</span>
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
}

// ==================================================定义UI组件 end==================================================

export default connect(
    state => ({persons: state.persons, count: state.count}),
    {
        addPerson
    }
)(Person);