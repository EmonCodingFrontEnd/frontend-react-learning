// 创建“外壳”组件
import {observer} from "mobx-react-lite";
import {useRootStore} from "./stores/index.store";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import Counter from "./components/Counter";
import './App.css'
import {Fragment} from "react";

// 创建并暴露App组件
function App() {
    const {todoStore: {hasError}} = useRootStore();

    return (
        <>
            {
                hasError ? <div style={{
                    color: 'red',
                    fontSize: "20px",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)"
                }} dangerouslySetInnerHTML={{__html: hasError}}></div> : (
                    <div className="todo-container">
                        <div className="todo-wrap">
                            <Header/>
                            <List/>
                            <Footer/>
                        </div>
                        <hr/>
                        <Counter/>
                    </div>
                )
            }
        </>
    )
}

export default observer(App);