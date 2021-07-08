import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

function CreateProduct(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
    image: "",
    price: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }


  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
      image: "",
      price: ""
    });
    document.getElementById("title").focus();
    event.preventDefault();
  }

  return (
    <div className="form-group card shadow-x new-product">
      <form>
        <div>
          <input
            id="title"
            required
            className="form-control"
            type="text"
            name="title"
            placeholder="Product title"
            value={note.title}
            onChange={handleChange}
            autoComplete="off"
          />
        </div>
        <div className="mt-2 mb-2">
          <input
            required
            className="form-control"
            type="text"
            name="image"
            placeholder="Image URL (http://...)"
            value={note.image}
            onChange={handleChange}
            autoComplete="off"
          />
        </div>
        <div>
          <input
            required
            className="form-control"
            type="text"
            name="price"
            placeholder="Price"
            value={note.price}
            onChange={handleChange}
            autoComplete="off"
          />
        </div>
        <input
          required
          className="form-control mt-2"
          type="text"
          name="content"
          placeholder="Short description"
          value={note.content}
          onChange={handleChange}
        />
        <button
          className="shadow btn-add btn btn-add teal darken-3"
          onClick={submitNote}
        >
          <FaPlus /> Add Product
        </button>
      </form>
    </div>
  );
}

export default CreateProduct;
