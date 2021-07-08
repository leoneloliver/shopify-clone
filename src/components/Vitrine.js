import React from "react";
import { FaDollarSign } from "react-icons/fa";

const Vitrine = (props) => {
  return (
    <div className="grey lighten-5 item-gallery">
      <div className="row">
        <div className="vitrine-item">
          <img src={props.image} className="" alt={props.title} />
        </div>
        <div className="col s12 product-details">
          <h6 className="vitrine-title">{props.title}</h6>
          <p className="vitrine-desc">{props.content}</p>
          <p className="vitrine-price">
            <FaDollarSign />
            {props.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Vitrine;
