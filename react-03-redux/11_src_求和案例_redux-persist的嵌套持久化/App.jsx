import React, {Component} from 'react';
import Count from "./containers/Count";
import Person from "./containers/Person";

class App extends Component {
    render() {
        return (
            <div>
                <Count></Count>
                <hr/>
                <Person></Person>
            </div>
        );
    }
}

export default App;