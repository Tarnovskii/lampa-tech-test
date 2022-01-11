import React from 'react'

import s from './content.module.css'
import ProductTile from "../product-tile-component/ProductTile";

const Content = props => {
    return (
        <main className={s.wrapper}>
            {new Array(10).fill('').map((productData, index) => <ProductTile index={index}/>)}
        </main>
    )
}

export default Content