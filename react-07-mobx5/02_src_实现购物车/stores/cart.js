import {observable, action, computed} from "mobx";
import * as shop from '../api/shop'

export default class CartStore {
    @observable items = []; // {id: 商品id, quantity: 数量}
    @observable checkoutStatus = "successful";

    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    @action.bound addToCart(product) {
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

    @computed get cartProducts() {
        return this.items.map(item => {
            const product = this.rootStore.productStore.all.find(product => product.id === item.id)
            return {
                ...product,
                quantity: item.quantity
            }
        })
    }

    @computed get totalPrice() {
        return this.cartProducts.reduce((total, item) => {
            return total + item.price * item.quantity
        }, 0)
    }

    @action.bound checkout(products) {
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

    @action.bound setCheckoutStatus(status) {
        this.checkoutStatus = status
    }

    @action.bound setItems(items) {
        this.items = items
    }
}