import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // const total = cart.reduce((total,prd)=>total+prd.price,0);
    let total=0;
    for(let i=0; i<cart.length; i++){
        const product = cart[i];
        total = total+product.price * product.quantity;

    }
    let shipping = 0;
    if(total>30){
        shipping = 0;
    }
    else if(total>20){
        shipping = 4.99;

    }
    else if(total>0){
        shipping = 10.00;
    }
    const formatNumber = num =>{
        const precision= num.toFixed(2);
        return Number(precision);
    }
    const tax = total/50;
    const grandTotal = total+shipping+tax;

    
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Item Ordered: {cart.length}</p>
            <p>Product Price: {formatNumber(total)}</p>
            <p>Shipping Cost: {shipping}</p>
            <p>Tax Cost: {formatNumber(tax)}</p>
            <h5>Total: {formatNumber(grandTotal)}</h5>
            <hr />
            {
                props.children
            }
            
            
        </div>
    );
};

export default Cart;