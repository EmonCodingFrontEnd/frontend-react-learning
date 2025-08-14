import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div>
                <div className="page-header"><h2>React Router Demo</h2></div>
                <button onClick={this.props.history.goBack}>回退</button>
                <button onClick={this.props.history.goForward}>前进</button>
                <button onClick={() => this.props.history.go(-5)}>go</button>
            </div>
        );
    }
}

// withRouter可以加工一般组件，返回一个新组件,让其具备路由组件所特有的API
export default withRouter(Header);
