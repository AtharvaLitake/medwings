import React, { useEffect, useState } from "react";
import "../Medicine/Medicine.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import face from "../../Images/Face.png";
import axios from "axios";
const Medicine = () => {
  const [itemlist, setItemlist] = useState([]);
  useEffect(() => {
    axios.get('http://98.70.49.141/api/getmedicine/equipment/')
      .then((response) => {
        setItemlist(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <div className="noitems">
        {itemlist.map((val) => {
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
                  <button>BUY NOW</button>
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