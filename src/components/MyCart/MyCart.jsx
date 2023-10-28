import React, { useState, useEffect } from "react";
import "../MyCart/MyCart.css";
import medicine from "../../Images/Medicines.png";
import Navbar from "../navbar/Navbar";
import axios from "axios";
function Cart() {
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 15 },
    { id: 3, name: "Product 3", price: 20 },
  ]);

  const [cart, setCart] = useState([]);
  const [dataForApiState, setdataForApiState] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    var orderNumber = localStorage.getItem("cartNumber");
    var dataList = [];
    var dataForApi = [];
    for (let index = 0; index < orderNumber; index++) {
      var data = JSON.parse(localStorage.getItem("order" + index));
      dataList.push(data); // Add the data object directly
      var dataDictForApi = {
        item: data.id,
        quantity: 1,
      };
      dataForApi.push(dataDictForApi);
    }
    setdataForApiState(dataForApi);
    setCart(dataList);
    updateTotalPrice(dataList);
  }, []);

  const updateTotalPrice = (updatedCart) => {
    const newTotalPrice = updatedCart.reduce(
      (total, product) => total + product.price,
      0
    );
    setTotalPrice(newTotalPrice);
  };

  //confirm order
  const confirmOrder = () => {
    console.log(dataForApiState);

    const instance = axios.create({
      baseURL: "http://98.70.49.141/api/",
      timeout: 1000,
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    });

    instance
      .post("confirm/", { order: dataForApiState })
      .then((response) => {
        console.log(response.data);
        var cartNumber = localStorage.getItem("cartNumber");
        for (let index = 0; index < cartNumber; index++) {
          localStorage.removeItem("order" + index);
        }
        localStorage.setItem("cartNumber", 0);
      })
      .catch((error) => {
        toast.error("Something went wrong");
        console.error("Error ...", error);
      });
  };
  return (
    <div>
      <Navbar></Navbar>
      <h1 className="cart_header">Shopping Cart</h1>
      <div className="all">
        <div className="allproduct">
          {cart.map((product) => (
            <div className="product">
              <div className="product_image">
                <img src={medicine} alt="" />
              </div>
              <div className="product_details">
                <h2>{product.name}</h2>
              </div>
              <div className="product_price">
                <h2>&#8377; {product.price}</h2>
              </div>
            </div>
          ))}
        </div>
        <p className="total">Total Price: &#8377; {totalPrice}</p>
        <button className="place_btn"
          onClick={() => {
            confirmOrder();
          }}
        >
          Place order<i className="fas fa-cart-shopping"></i>
        </button>
      </div>
    </div>
  );
}

export default Cart;
