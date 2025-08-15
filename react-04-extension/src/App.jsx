import React, {Component} from 'react';
// import Demo from "./component/1_setState";
// import Demo from "./component/2_lazyLoad";
// import Demo from "./component/3_hooks";
// import Demo from "./component/4_Fragment";
// import Demo from "./component/5_Context";
// import Demo from "./component/6_PureComponent"
// import Demo from './component/7_renderProps';
import Demo from './component/8_ErrorBoundary/Parent'

class App extends Component {
    render() {
        return (
            // 这里的空标签等效于Fragment的效果
            <>
                <Demo></Demo>
            </>
        );
    }
}

export default App;