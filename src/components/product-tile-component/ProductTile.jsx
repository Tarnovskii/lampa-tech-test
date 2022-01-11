import React from 'react'

import s from './product.module.css'

const ProductTile = props => {
    return (
        <div key={props.productData.id} className={s.wrapper}>
            <img src={props.productData.url} alt={'product_preview'}/>
            <div className={s.details}>
                <p>{props.productData.title} </p>
                <button>Добавить в корзину</button>
            </div>
        </div>
    )
}

export default ProductTile