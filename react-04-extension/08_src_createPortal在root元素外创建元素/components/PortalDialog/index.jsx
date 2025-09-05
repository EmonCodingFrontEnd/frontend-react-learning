import React, {Component} from 'react';
import './index.css';
import {createPortal} from "react-dom";

class Index extends Component {
    render() {
        const {title, content, onClose} = this.props;
        return (
            createPortal(<div className={"dialog"} onClick={onClose}>
                点我关闭弹窗
            </div>, document.body)
        );
    }
}

export default Index;