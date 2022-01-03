import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import "./MyOrder.css";
import MyOrderCard from "./MyOrderCard";

const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    const order = async () => {
      const res = await fetch(
        `https://enigmatic-fjord-94198.herokuapp.com/users?email=${user.email}`
      );
      const data = await res.json();
      setOrders(data);
      console.log(data);
    };
    order();
  }, [user.email]);

  return (
    <div className="container">
      <div className="row">
        {orders.map((order) => (
          <MyOrderCard key={order._id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default MyOrder;
