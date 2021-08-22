import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee , faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import "./Product.css";
import { Link } from 'react-router-dom';


const Product = (props) => {
    // console.log(props);
    const { img, name, seller, price, stock ,key} = props.products;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>

            <div >
                <h4 className="product-name"><Link to={'/product/'+key}>{name}</Link></h4>
                <div className="product-info">
                    <p><small>by: {seller}</small></p>
                    <h4>${price}</h4>
                    <br />
                    <p>only {stock} left in stock-order soon</p>
                    { props.showAddToCart && <button className="main-button" 
                    onClick={()=>props.handleAddProduct(props.products)}
                    >
                    <FontAwesomeIcon icon={faShoppingCart} />  Add to cart</button>}
                    

                </div>


            </div>

        </div>
    );
};

export default Product;