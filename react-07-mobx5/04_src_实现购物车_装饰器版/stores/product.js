import {observable, action} from "mobx";
import * as shop from '../api/shop'

export default class ProductStore {
    @observable all = [];

    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    @action.bound getAllProducts() {
        shop.getAllProducts(products => {
            this.setAll(products);
        });
    }

    @action.bound setAll(products) {
        this.all = products;
    }

    @action.bound decrementInventory(product) {
        const p = this.all.find(p => p.id === product.id);
        p.inventory--;
    }
}