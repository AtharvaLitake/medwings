import React, { useState } from 'react';

function Cart() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 15 },
    { id: 3, name: 'Product 3', price: 20 },
  ]);

  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    updateTotalPrice(updatedCart);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
    updateTotalPrice(updatedCart);
  };

  const updateTotalPrice = (updatedCart) => {
    const newTotalPrice = updatedCart.reduce(
      (total, product) => total + product.price,
      0
    );
    setTotalPrice(newTotalPrice);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-2">Products</h2>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                {product.name} - ${product.price}
                <button
                  onClick={() => addToCart(product)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 ml-4"
                >
                  Add to Cart
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Shopping Cart</h2>
          <ul>
            {cart.map((product) => (
              <li key={product.id}>
                {product.name} - ${product.price}
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 ml-4"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <p>Total Price: ${totalPrice}</p>
        </div>
      </div>
    </div>
  );
}

export default Cart;

