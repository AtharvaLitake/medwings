import React, { useState } from 'react';

function MyCart() {
  // Initialize the cart state as an empty array
  const [cart, setCart] = useState([]);

  // Function to add an item to the cart
  const addToCart = (item) => {
    // Create a copy of the current cart array and add the new item
    const updatedCart = [...cart, item];

    // Update the cart state with the new item
    setCart(updatedCart);
  };

  // Render the cart contents
  const renderCart = () => {
    if (cart.length === 0) {
      return <p>Your cart is empty.</p>;
    }
  }
 

  return (
    <div>
      <h1>Online Store</h1>
      {renderCart()}

      <div>
        <button onClick={() => addToCart({ name: 'Product 1' })}>
          Add to Cart
        </button>
        <button onClick={() => addToCart({ name: 'Product 2' })}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default MyCart;