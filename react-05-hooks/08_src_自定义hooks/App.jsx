import DisplayMousePosition from "./components/DisplayMousePosition";
import AnotherComponent from "./components/AnotherComponent";
import {Fragment} from "react";

function App() {
    return (
        <Fragment>
            <DisplayMousePosition/>
            <AnotherComponent/>
        </Fragment>
    );
}

export default App;