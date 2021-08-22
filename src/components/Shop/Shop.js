import React, { useState, useEffect } from "react";
import { addToDatabaseCart } from "../../utilities/databaseManager";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import fakeData from "./../../fakeData/index";
import { Link } from "react-router-dom";

import "./Shop.css";
import { getDatabaseCart } from "../../utilities/databaseManager";

const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(first10);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = getDatabaseCart();

    const productKeys = Object.keys(savedCart);
    const previousCart = productKeys.map((key) => {
      const product = fakeData.find((pd) => pd.key === key);
      product.quantity = savedCart[key];

      return product;
    });
    setCart(previousCart);
  }, []);

  const handleAddProduct = (products) => {
    const toBeAddedKey = products.key;
    const sameProduct = cart.find((pd) => pd.key === toBeAddedKey);
    // console.log(sameProduct);
    let count = 1;
    let newCart;
    if (sameProduct) {
      count = sameProduct.quantity + 1;
      sameProduct.quantity = count;
      const others = cart.filter((pd) => pd.key !== toBeAddedKey);
      newCart = [...others, sameProduct];
    } else {
      products.quantity = 1;
      newCart = [...cart, products];
    }
    setCart(newCart);
    addToDatabaseCart(products.key, count);
  };

  return (
    <div className="twin-container">
      <div className="product-container">
        <h2>Product matches:{products.length}</h2>

        {products.map((pd) => (
          <Product
            key={pd.key}
            showAddToCart={true}
            handleAddProduct={handleAddProduct}
            products={pd}
          ></Product>
        ))}
      </div>

      <div className="cart-container">
        <Cart cart={cart}>
          <Link to="/review">
            <button className="main-button">Review Order</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
