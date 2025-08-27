import React, {Component} from 'react';
import {observer, inject} from "mobx-react";

class Product extends Component {
    render() {
        const {productStore, cartStore} = this.props;
        return (
            <div>
                <h2>Products</h2>
                <ul>
                    {productStore.all.map(product => (
                        <li key={product.id}>
                            {product.title} - {product.price} * {product.inventory}
                            <br/>
                            <button onClick={() => cartStore.addToCart(product)}
                                    disabled={product.inventory <= 0}>{product.inventory > 0 ? 'Add to cart' : 'Sold out'}</button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    componentDidMount() {
        const {productStore} = this.props;
        productStore.getAllProducts();
    }
}

// 使用函数组合方式替代装饰器语法
export default inject("productStore", "cartStore")(observer(Product));