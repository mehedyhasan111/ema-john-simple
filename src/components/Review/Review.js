import React, { useEffect, useState } from "react";
import fakeData from "../../fakeData";
import {
  getDatabaseCart,
  processOrder,
  removeFromDatabaseCart,
} from "../../utilities/databaseManager";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";


const Review = () => {
  const [cart, setCart] = useState([]);

  const handleOrderPlace = () =>{
    setCart([]);
    processOrder();
    console.log('order placed');

  }

  const removeProduct = (productKey) => {
    //   console.log("removed product key", productKey);
    const newCart = cart.filter((pd) => pd.key !== productKey);
    setCart(newCart);
    removeFromDatabaseCart(productKey);
  };

  useEffect(() => {
    const savedCart = getDatabaseCart();

    const productKeys = Object.keys(savedCart);
    const cartProducts = productKeys.map((key) => {
      const product = fakeData.find((pd) => pd.key === key);
      product.quantity = savedCart[key];

      return product;
    });
    setCart(cartProducts);
  }, []);
  return (
    <div>
      <h4>Review Cart items: {cart.length}</h4>

      <div className="twin-container">
        <div className="product-container">
          {cart.map((pd) => (
            <ReviewItem
              key={pd.key}
              product={pd}
              removeProduct={removeProduct}
            ></ReviewItem>
          ))}
          
        </div>

        <div className="cart-container">
            <Cart cart={cart}>
              <button onClick={handleOrderPlace} className="main-button">Place Order</button>
            </Cart>
            
        </div>
      </div>
    </div>
  );
};

export default Review;
