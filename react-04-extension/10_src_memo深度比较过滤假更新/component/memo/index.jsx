import React, {Component, memo} from 'react';

class Index extends Component {
    state = {name: '问秋', title: '问秋的博客'}

    render() {
        return (
            <div>
                {this.state.name} <br/>
                <button onClick={() => {
                    this.setState({name: '问秋2'})
                }}>修改昵称不影响Child组件
                </button>
                <Child title={this.state.title}/>
                <button onClick={() => {
                    this.setState({title: '问秋的博客2'})
                }}>修改标题会影响Child组件
                </button>
            </div>
        );
    }
}

export default Index;

/**
 * 父组件渲染，阻止连带的Child子组件的非必要渲染
 * 与PureComponent一样，只不过PureComponent用于类组件，而memo用于函数式组件
 */
const Child = memo(function (props) {
    console.log("Child render")
    return (
        <div>Child - {props.title}</div>
    );
})