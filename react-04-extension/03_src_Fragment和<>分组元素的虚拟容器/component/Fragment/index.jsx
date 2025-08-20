import React, {Component, Fragment} from 'react';

class FragmentDemo extends Component {
    render() {
        return (
            // Fragment还支持传入一个属性 key
            // <Fragment key="fragmentDemo">
            <Fragment>
                <input type="text"/>
            </Fragment>
        );
    }
}

export default FragmentDemo;