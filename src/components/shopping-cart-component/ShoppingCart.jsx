import React from 'react'

import s from './cart.module.css'

const ShoppingCart = props => {

    return (
        <section className={`${props.isOpen ? s.open_wrapper : s.close_wrapper}`}>
            Shopping cart
        </section>
    )
}

export default ShoppingCart