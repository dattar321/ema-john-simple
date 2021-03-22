import React from 'react';

const Cart = (props) => {
    
    const total = props.cart.reduce((total,data)=>total+=data.price,0)
    return (
        <div>
            <h3>Item ordered   {props.cart.length}</h3>
            <br/>
            <h3>Price : {total.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;