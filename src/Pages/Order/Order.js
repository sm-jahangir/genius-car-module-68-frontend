import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import axiosPrivate from "../../api/axiosPrivate";
import auth from "../../firebase.init";

function Order() {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  //System - 1
  // useEffect(() => {
  //   fetch("http://localhost:4000/orders")
  //     .then((res) => res.json())
  //     .then((data) => setOrders(data));
  // }, []);

  //System - 4
  useEffect(() => {
    const getOrders = async () => {
      const email = user.email;
      const url = `http://localhost:4000/orders?email=${email}`;
      try {
        const { data } = await axiosPrivate.get(url);
        setOrders(data);
      } catch (error) {
        console.log(error.message);
        if (error.response.status === 403 || error.response.status === 401) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getOrders();
  }, [user]);

  //System - 2
  // axios
  //   .get("http://localhost:4000/orders")
  //   .then(function (response) {
  //     setOrders(response.data);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });

  // System - 3
  // async function getUser() {
  //   try {
  //     const url = `http://localhost:4000/orders`;
  //     const response = await axios.get(url);
  //     setOrders(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  // getUser();

  return (
    <div className="container">
      <h2>Order - {orders.length}</h2>
      <hr />
      {orders.map((order) => (
        <div key={order._id}>
          <h4>{order.service} </h4>
        </div>
      ))}
    </div>
  );
}

export default Order;
