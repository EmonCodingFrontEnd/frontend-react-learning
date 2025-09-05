import React, {Component} from 'react';
import Demo from "./component/memo";

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