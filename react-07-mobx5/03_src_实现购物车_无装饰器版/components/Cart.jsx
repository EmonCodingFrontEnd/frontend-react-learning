import React, {Component} from 'react';
import {observer, inject} from "mobx-react";

class Cart extends Component {
    render() {
        const {cartStore} = this.props;
        return (
            <div>
                <h2>Your Charts</h2>
                <ul>
                    {cartStore.cartProducts.map(item => (
                        <li key={item.id}>
                            {item.title} - {item.price} * {item.quantity}
                        </li>
                    ))}
                </ul>
                <p>Total: {cartStore.totalPrice}</p>
                <p>
                    <button onClick={() => {
                        cartStore.checkout(cartStore.cartProducts)
                    }} disabled={cartStore.items.length === 0}>Checkout
                    </button>
                </p>
                {cartStore.checkoutStatus && (<p>Checkout {cartStore.checkoutStatus}</p>)}
            </div>
        );
    }
}

// 使用函数组合方式替代装饰器语法
export default inject("productStore", "cartStore")(observer(Cart));