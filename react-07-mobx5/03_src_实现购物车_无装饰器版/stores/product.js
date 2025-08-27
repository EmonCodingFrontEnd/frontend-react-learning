import {observable, action, decorate} from "mobx";
import * as shop from '../api/shop'

export default class ProductStore {

    constructor(rootStore) {
        this.rootStore = rootStore;

        this.all = [];
    }

    getAllProducts() {
        shop.getAllProducts(products => {
            this.setAll(products);
        });
    }

    setAll(products) {
        this.all = products;
    }

    decrementInventory(product) {
        const p = this.all.find(p => p.id === product.id);
        p.inventory--;
    }
}

// 使用 decorate 函数定义可观察属性和动作
decorate(ProductStore, {
    all: observable,
    getAllProducts: action.bound,
    setAll: action.bound,
    decrementInventory: action.bound,
});