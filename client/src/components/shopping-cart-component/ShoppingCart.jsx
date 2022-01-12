import React, {useEffect, useState} from 'react'

import s from './cart.module.css'
import {getCartProductsArrayFromCookie} from "../../utils/cart-manager";
import {useSelector} from "react-redux";
import ProductTile from "../product-tile-component/ProductTile";
import OrderForm from "../order-form-component/OrderForm";

const ShoppingCart = props => {
    const totalPrice = useSelector(store => store.cartState.totalPrice)
    const [productsArray, updateProductsArray] = useState([])

    useEffect(() => {
        updateProductsArray(getCartProductsArrayFromCookie())
    }, [totalPrice])

    const productsListMapper = () => {
        return productsArray.map(productData => <ProductTile cart={true} productData={productData}/> )
    }

    return (
        <section className={s.wrapper}>
            <div className={s.products_list}>
                {productsListMapper()}
                <u>Total: {totalPrice} $</u>
            </div>
            <OrderForm totalPrice={totalPrice}/>
        </section>
    )
}

export default ShoppingCart