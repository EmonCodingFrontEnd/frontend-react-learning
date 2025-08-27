import {observable, action, computed, decorate} from "mobx";
import * as shop from '../api/shop'

export default class CartStore {

    constructor(rootStore) {
        this.rootStore = rootStore;

        this.items = []; // {id: 商品id, quantity: 数量}
        this.checkoutStatus = "";
    }

    addToCart(product) {
        // 若不存在则加入，若存在则增加数量
        const cartItem = this.items.find(cartItem => cartItem.id === product.id);
        if (cartItem) {
            cartItem.quantity++;
        } else {
            this.items.push({
                id: product.id,
                quantity: 1
            });
        }

        // 商品库存减少
        this.rootStore.productStore.decrementInventory(product)
    }

    get cartProducts() {
        return this.items.map(item => {
            const product = this.rootStore.productStore.all.find(product => product.id === item.id)
            return {
                ...product,
                quantity: item.quantity
            }
        })
    }

    get totalPrice() {
        return this.cartProducts.reduce((total, item) => {
            return total + item.price * item.quantity
        }, 0)
    }

    checkout(products) {
        // 备份购物车数据
        const savedProducts = [...products]
        // 清空结算状态
        this.setCheckoutStatus(null)
        // 清空购物车
        this.setItems([])

        shop.buyProducts(products, () => {
            this.setCheckoutStatus('successful')
        }, () => {
            this.setCheckoutStatus('failed')
            this.setItems(savedProducts)
        })
    }

    setCheckoutStatus(status) {
        this.checkoutStatus = status
    }

    setItems(items) {
        this.items = items
    }
}

// 使用 decorate 函数定义可观察属性和动作
decorate(CartStore, {
    items: observable,
    checkoutStatus: observable,
    addToCart: action.bound,
    cartProducts: computed,
    totalPrice: computed,
    checkout: action.bound,
    setCheckoutStatus: action.bound,
    setItems: action.bound
});
