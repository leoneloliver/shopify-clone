import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const ListGallery = (props) => {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="card-x grey lighten-5 item-gallery">
      <div className="row">
        <div className="col s3">
          <img
            src={props.image}
            className="card-img small-img"
            alt={props.title}
          />
        </div>
        <div className="col s9">
          <h6 className="card-title">{props.title}</h6>
        </div>
        <div className="col s12 text-r ">
          <button
            onClick={handleClick}
            className="btn-delete shadow btn-danger"
          >
            <FaTrashAlt />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListGallery;
