import {makeObservable, observable, action, makeAutoObservable} from 'mobx'

export default class CounterStore {
    count = 0;

    constructor() {
        makeObservable(this, {
            count: observable,
            increment: action.bound,
            decrement: action.bound
        });
    }

    increment() {
        this.count++;
    }

    decrement() {
        this.count--;
    }
}