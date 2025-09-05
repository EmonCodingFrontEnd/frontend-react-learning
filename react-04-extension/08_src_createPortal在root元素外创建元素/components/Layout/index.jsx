import React, {Component} from 'react';
import './index.css';
import Dialog from "../PortalDialog";

class Index extends Component {
    state = {showDialog: false};

    render() {
        return (
            <div className={"box"}>
                <div className="left">left</div>
                <div className="right">
                    right
                    <button onClick={() => this.setState({showDialog: true})}>打开弹窗</button>
                    {
                        this.state.showDialog && (
                            <Dialog
                                title="弹窗标题"
                                content="弹窗内容"
                                onClose={() => this.setState({showDialog: false})}
                            />
                        )
                    }
                </div>
            </div>
        );
    }
}

export default Index;