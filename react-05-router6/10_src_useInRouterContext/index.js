import React from "react";
import ReactDom from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import Demo from "./comonents/Demo";

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <div>
            <BrowserRouter future={{v7_startTransition: true, v7_relativeSplatPath: true,}}>
                <App/>
            </BrowserRouter>
            <Demo/>
        </div>
    </React.StrictMode>
)