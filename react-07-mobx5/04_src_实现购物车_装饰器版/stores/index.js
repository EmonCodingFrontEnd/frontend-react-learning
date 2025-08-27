import ProductStore from "./product";
import CartStore from "./cart";

export default class RootStore {
    constructor() {
        this.productStore = new ProductStore(this);
        this.cartStore = new CartStore(this);
    }
}