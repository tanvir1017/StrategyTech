import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import "./MyOrder.css";
import MyOrderCard from "./MyOrderCard";

const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  const [num, setNum] = useState(0);

  useEffect(() => {
    const order = async () => {
      const res = await fetch(
        `https://enigmatic-fjord-94198.herokuapp.com/users?email=${user.email}`
      );
      const data = await res.json();
      setOrders(data);
    };
    order();
  }, [user.email, num]);

  return (
    <div className="container">
      {orders.length > 0 ? (
        <div className="row">
          {orders.map((order) => (
            <MyOrderCard key={order._id} order={order} setNum={setNum} />
          ))}
        </div>
      ) : (
        <div className="row">
          <div className="mt-3 col-lg-12">
            <div>
              {" "}
              <img
                className="img-fluid w-50"
                src="https://jersix.com/wp-content/uploads/2020/10/Empty-pana-uai-2000x1500.png"
                alt=""
              />
              <h2 className="mt-3">Sorry, You have no order yet!</h2>
              <div className="enroll_btn">
                <button>
                  <Link to="/courses">Please Go To some order</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyOrder;
