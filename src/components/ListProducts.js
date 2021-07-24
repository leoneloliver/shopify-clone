import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { GrAddCircle } from "react-icons/gr";

const ListProduct = (props) => {
  function handleClick() {
    props.onDelete(props.id);
  }

  function handleAdd() {
    props.onGallery(props);
  }

  return (
    <div className="card-x grey lighten-5">
      <div className="row">
        <div className="col s2">
          <img
            src={props.image}
            className="card-img responsive-img"
            alt={props.title}
          />
        </div>
        <div className="col s8">
          <div className="card-body row">
            <div className="col s6">
              <h6 className="card-title">{props.title}</h6>

              <div className="new badge green lighten-2" data-badge-caption="">
                active
              </div>
            </div>
            <div className="col s4 hide-mobile">{props.content}</div>
            <div className="col s2">${props.price}</div>
          </div>
        </div>
        <div className="col s2">
          <button
            onClick={handleClick}
            className="btn-delete shadow btn-danger"
          >
            <FaTrashAlt />
          </button>

          <button onClick={handleAdd} className="btn-delete shadow btn-danger">
            <GrAddCircle />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListProduct;
