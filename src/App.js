import React, { useState } from "react";
import "./App.css";

function App() {
  //constants
  const PRODUCT_PAGE = "products";
  const CART_PAGE = "cart";
  //cart hook
  const [cart, setCart] = useState([]);

  //to know which page we are in , let;s use another state
  const [page, setPage] = useState(PRODUCT_PAGE);

  //products will be an array of objects
  const [products] = useState([
    {
      name: "Poco F1",
      cost: "15000",
    },
    {
      name: "Apple SE",
      cost: "35000",
    },
    {
      name: "One Plus 8",
      cost: "40000",
    },
    {
      name: "Apple Mini",
      cost: "65000",
    },
  ]);

  //add to cart functionality
  const addToCart = (product) => {
    // console.log("%cProduct added was", "color: yellow;");
    // console.log(product);
    // setCart([...cart, { product }]);
    // console.log("%cUpdated cart is...", "color: orange;");
    // console.log({ cart });
    setCart([...cart, { ...product }]);
    //can also be written as this: setCart([...cart, { name: product.name, cost: product.cost }]);
  };

  //remove from cart functionality
  const removeFromCart = (product) => {
    const currentCart = [...cart];

    const filteredCartNow = currentCart.filter((item) => {
      console.log({ item });
      console.log({ product });
      return item !== product;
    });
    setCart(filteredCartNow);
  };

  //navigateTo custom function
  const navigateTo = (GOTO_PAGE) => {
    setPage(GOTO_PAGE);
  };

  /**how to optimise this:: right now it is accessing 'products' from state. Check if we can pass params */
  const displayProducts = () => (
    <>
      <h2 className="page-title">Products</h2>
      <div className="products">
        {products.map((product, idx) => (
          <div className="product-card" key={idx}>
            <h3 className="item-name">{product.name}</h3>
            <h4 className="price">{product.cost}</h4>
            <button onClick={() => addToCart(product)}>Add to cart</button>
          </div>
        ))}
      </div>
    </>
  );

  const displayCartItems = () => (
    <>
      <h2 className="page-title">Cart</h2>
      <div className="products">
        {cart.map((rmp, idx) => (
          <div className="product-card" key={idx}>
            <h3 className="item-name">{rmp.name}</h3>
            <h4 className="price">{rmp.cost}</h4>
            <button onClick={() => removeFromCart(rmp)}>Remove</button>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <div className="App">
      <header>
        <h1>New learning- Shopping Cart</h1>
        <div className="cart-nav">
          <button onClick={() => navigateTo(CART_PAGE)}>
            Cart has ({cart.length})
          </button>
          <button onClick={() => navigateTo(PRODUCT_PAGE)}>
            View Products
          </button>
        </div>
      </header>
      {page === PRODUCT_PAGE && displayProducts()}
      {page === CART_PAGE && displayCartItems()}
    </div>
  );
}

export default App;
