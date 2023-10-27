import React, { useEffect, useState } from "react";
import "../Medicine/Medicine.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import face from "../../Images/Face.png";
import axios from "axios";

const Medicine = () => {
  const [itemlist, setItemlist] = useState([]);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState({});
  const [index, setIndex] = useState(0);
  

 const addToCart = (val_i, val_n, val_p ) => {
   var TotalCart = {id: val_i, name: val_n, price: val_p}
   var listT = JSON.parse(localStorage.getItem('cart'));
  
   listT.push(TotalCart);
   localStorage.setItem('cart', JSON.stringify(listT));
 };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify([]))
    axios
      .get("http://98.70.49.141/api/getmedicine/medicine/")
      .then((response) => {
        setItemlist(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Function to filter items based on the search input
  const filteredItems = itemlist.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="search_bar">
        <div className="search-input-container">
          <i className="fas fa-search search-icon"></i>
          <span> </span>
          <input
            type="text"
            placeholder="Search for medicine..."
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="noitems">
        {filteredItems.map((val) => {
          return (
            <div className="imedicine" key={val.id}>
              <div className="medimg">
                <img src={val.image} alt="" />
              </div>
              <div className="medhead">
                <h3>{val.name}</h3>
              </div>
              <div className="price_q">
                <div className="price">
                  <h3>Price: ${val.price}</h3>
                </div>
                <div className="buy_btn">
                  <button onClick={addToCart}>
                    Add to Cart <i className="fas fa-cart-shopping"></i>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Medicine;