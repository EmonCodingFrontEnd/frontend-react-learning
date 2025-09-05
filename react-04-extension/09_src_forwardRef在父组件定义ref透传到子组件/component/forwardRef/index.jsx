import React, {Component, forwardRef} from 'react';

class Index extends Component {

    myInput = null;
    myForwardRefInput = React.createRef();

    render() {
        return (
            <div>
                <button onClick={() => {
                    this.myInput.current.focus();
                }}>获取Child焦点
                </button>
                <Child callback={el => {
                    this.myInput = el;
                }}></Child>

                <button onClick={() => {
                    this.myForwardRefInput.current.focus();
                }}>获取ForwardRefChild焦点
                </button>
                <ForwardRefChild ref={this.myForwardRefInput}></ForwardRefChild>
            </div>
        );
    }
}

export default Index;


class Child extends Component {

    myInput = React.createRef();

    componentDidMount() {
        this.props.callback(this.myInput)
    }

    render() {
        return (
            <div style={{backgroundColor: 'blueviolet'}}>
                <input ref={this.myInput} type="text" value={"111"} onChange={e => console.log(e.target.value)}/>
            </div>
        );
    }
}

const ForwardRefChild = forwardRef((props, ref) => {
    return (
        <div style={{backgroundColor: 'skyblue'}}>
            <input ref={ref} type="text" value={"222"} onChange={e => console.log(e.target.value)}/>
        </div>
    )
});
