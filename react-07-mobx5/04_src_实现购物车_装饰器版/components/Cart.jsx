import React, {Component} from 'react';
import {observer, inject} from "mobx-react";

@inject("productStore", "cartStore")
@observer
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

export default Cart;