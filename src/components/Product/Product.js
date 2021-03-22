import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'

import './Product.css'

const Product = (props) => {
    const {img, name,seller,stock,price} = props.product;
    return (
        <div className="product">
            
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h4 className="product-name">{name}</h4><br/>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>{stock} piece left</small></p>
                <button onClick={()=>props.handleAddProduct(props.product)} className="button"> <FontAwesomeIcon icon={faShoppingCart} /> Add to your cart</button>

            </div>
        </div>
    );
};

export default Product;