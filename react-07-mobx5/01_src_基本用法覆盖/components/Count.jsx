import React, {Component} from 'react';
import {observer} from "mobx-react";
import {action, autorun, computed, observable, configure, runInAction, when, reaction} from "mobx";

/**
 * 开启严格模式
 * 通过该配置，可以限制某些操作，必须通过action进行调用，
 * 否则，比如（store.count = 10）会引起：Since strict-mode is enabled, changing observed observable values outside actions is not allowed.
 */
configure({
    enforceActions: "observed"
});

class Store {
    @observable count = 0
    @observable price = 10

    @action.bound increment() {
        this.count++;
    }

    /**
     * 计算属性，仅在被检测的属性变化时，才计算一次，并不会因为多处引用而重新计算【推荐】
     * @returns {number}
     */
    @computed get totalPrice() {
        return this.count * this.price;
    }

    /**
     * 改变多个属性，仅触发一次监听【推荐】
     *
     * 注意：bound可以把store这个实例绑定到函数的this上，否则this就是undefined
     */
    @action.bound change() {
        // console.log(this) // 只有使用了 .bound ，这里的 this 才是 store 实例，否则就是 undefined
        this.count = 100;
        this.price = 100;
    }

    /**
     * 异步调用
     */
    @action.bound asyncChange() {
        setTimeout(() => {
            // 异步调用方式一：这里无法直接赋值，需要使用 action
            // this.change()
            // 异步调用方式二：这里无法直接赋值，可以定义并调用 action
            // action('changeCountOnly', () => {
            //     this.count = 200
            // })()
            // 异步调用方式三：这里无法直接赋值，需要使用 runInAction
            runInAction(() => {
                this.count = 500
            })
        }, 2000)
    }
}

const store = new Store();
// 在开启严格模式情况下，若不想定义action，想直接调用，可以通过runInAction
runInAction(() => {
    store.count = 10
})

/**
 * 1. 监视属性，默认会执行一次，后续被监视的属性变化后也会被执行
 */
autorun(
    () => {
        console.log('autorun price', store.price);
    }
)

/**
 * 当count大于100时，执行一次，后续count变化时，不会再次执行
 */
when(() => store.count > 100, () => {
    console.log('when count gatter than 100', store.count);
})

/**
 * 当被监听的数据发生改变时触发！！！
 */
reaction(() => {
    // 执行一些业务逻辑，返回数据给下一个函数使用
    return store.count
}, (count, reaction) => {
    console.log('reaction count', count);
    // 手动停止监听
    if (count > 20) {
        reaction.dispose()
    }
})

@observer
class Count extends Component {

    render() {
        return (
            <div>
                store.count: {store.count}
                <button onClick={store.increment}>+</button>
                total: {store.totalPrice}
                <button onClick={store.change}>同步修改多个属性（count和price）</button>
                <button onClick={store.asyncChange}>异步修改单个属性（count）</button>
            </div>
        );
    }
}

export default Count;