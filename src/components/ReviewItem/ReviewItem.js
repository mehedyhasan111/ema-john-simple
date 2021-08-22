import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    
    
    const {name,quantity,key,price,img} = props.product;
    return (
        <div className="product"> <img src={img} alt="" />
        <div className='review-item'>
            
           
            <h4 className="pd-name">{name}</h4>
            <p>Quantity : {quantity}</p>
            
            <p><small>${price}</small></p>
            <br />
            <button 
            className="main-button"
            onClick={()=>props.removeProduct(key)}
            
            >Remove</button>
            
           
            
            
        </div>
        </div>
    );
};

export default ReviewItem;