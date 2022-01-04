import React from "react";
import Delete from "../../images/delete.png";
import project from "../../images/project.png";
import Questions from "../../images/qestion.png";
import quize from "../../images/quize.png";
import video from "../../images/video.png";
import "./MyOrder.css";

const MyOrderCard = ({ order, setNum }) => {
  const { img, name, _id, videos, quizes, projects, questions } = order;

  //handle delete
  const handleDelete = (id) => {
    fetch(`https://enigmatic-fjord-94198.herokuapp.com/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alert("Successfully delete");
          setNum((prev) => prev + 1);
        }
      });
  };

  return (
    <div className="col-lg-4 col-md-4 col-12">
      <div className="order_card_wrapper mb-3 ">
        <img
          className="img-fluid w-100 order_card_wrapper_img"
          src={img}
          alt=""
        />
        <div className="order_card_body text-start">
          <div className="d-flex justify-content-between align-items-center ">
            <p className="order_course_title mb-0 text-dark">{name}</p>
            <div onClick={() => handleDelete(_id)}>
              <img src={Delete} className="order_details_img" alt="" />
              <button className="btn">Delete</button>
            </div>
          </div>
          <div className="my-1 order_card_details d-flex align-items-center justify-content-between">
            <div className="px-2">
              <img src={quize} className="order_details_img" alt="" />
              <span>{quizes} Quizes</span>
            </div>

            <div className="px-2">
              <img src={Questions} className="order_details_img" alt="" />
              <span>{questions} Questions</span>
            </div>
          </div>
          <div className="order_card_details d-flex align-items-center justify-content-between">
            <div className="px-2 special_class_left">
              <img src={project} className="order_details_img" alt="" />
              <span>{projects} Projects</span>
            </div>

            <div className="px-2 special_class_right">
              <img src={video} className="order_details_img" alt="" />
              <span>{videos} video</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrderCard;
