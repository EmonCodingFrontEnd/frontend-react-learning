import React, {Component} from 'react';
import Count from "./containers/Count";
import store from "./redux/store";

class App extends Component {
    render() {
        return (
            <div>
                哈哈
                {/*给容器组件（要区分容器组件与UI组件）传递store*/}
                {/*<Count store={store}></Count>*/}

                {/* 若index.jsx中引入了Provider组件，则不需要在App.jsx中传递store了*/}
                <Count></Count>
            </div>
        );
    }
}

export default App;