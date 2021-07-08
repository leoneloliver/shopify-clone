import React, { useState } from "react";
import Header from "./components/Header";
import Vitrine from "./components/Vitrine";
import { Link } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";

export default function Gallery() {
  let listGallery = getGallery();

  const [gallery] = useState(listGallery);

  function getGallery() {
    return JSON.parse(localStorage.getItem("gallery"));
  }

  return (
    <div className="App">
      <Header />
      <div className="row vitrine-container">
        <div className="col s12 card-panel list-products main-list">
          <div className="row">
            <div className="col s10">
              <h5>Your Gallery Preview</h5>
            </div>
            <div className="col s2">
              <div className="col s12">
                <Link
                  to="/adm"
                  className="w100 waves-effect waves-light btn teal darken-3 col s2"
                >
                  <TiArrowBack /> Back to Product
                </Link>
              </div>
            </div>
            <div className="col s12">
              <div className="flex vitrine">
                {gallery.map((noteItem, index) => {
                  return (
                    <Vitrine
                      key={index}
                      id={index}
                      title={noteItem.title}
                      content={noteItem.content}
                      image={noteItem.image}
                      price={noteItem.price}
                    />
                  );
                })}
              </div>
              {/* {!gallery.length && <div className="col s12">Gallery is Empty</div>} */}
              {!gallery.length && (
                <div className="col s12">Gallery is Empty</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
