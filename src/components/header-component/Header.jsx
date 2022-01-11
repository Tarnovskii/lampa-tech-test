import React, {useState} from 'react'
import ShoppingCart from "../shopping-cart-component/ShoppingCart";

import s from './header.module.css'


const Header = props => {
    const [isCartOpen, setIsCartOpenState] = useState(false)

    return (
        <header className={s.wrapper}>
            Header
            <button onClick={setIsCartOpenState.bind(null, !isCartOpen)} className={s.cart_button}>Cart</button>
            <ShoppingCart isOpen={isCartOpen}/>
        </header>
    )
}

export default Header