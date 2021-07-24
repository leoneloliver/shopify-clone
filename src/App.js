import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ListProducts from "./components/ListProducts";
import ListGallery from "./components/ListGallery";
import CreateProduct from "./components/CreateProduct";
import Sidebar from "./components/Sidebar";
import data from "./products";
import { FaEye } from "react-icons/fa";
import { VscEmptyWindow } from "react-icons/vsc";
import Loading from "./components/Loading";

export default function App() {
  let listItem = data;
  let listGallery = [];

  const storageTodos = getStorage();
  if (storageTodos === null) {
    updateStorage(JSON.stringify(listItem));
  } else {
    listItem = getStorage();
  }

  const storageGallery = getGallery();
  if (storageGallery === null) {
    updateGallery(JSON.stringify(listGallery));
  } else {
    listGallery = getGallery();
  }

  const [load, setLoad] = useState(true);

  const [notes, setNotes] = useState(listItem);
  const [gallery, setGallery] = useState(listGallery);

  const [search, setSearch] = useState("");
  const [filteredNotes, setFilteredNotes] = useState([]);

  const [alert, setAlert] = useState(null);

  function getStorage() {
    return JSON.parse(localStorage.getItem("list"));
  }

  function getGallery() {
    return JSON.parse(localStorage.getItem("gallery"));
  }

  function updateStorage(newList) {
    localStorage.setItem("list", newList);
  }

  function updateGallery(newGallery) {
    localStorage.setItem("gallery", newGallery);
  }

  function deleteNote(id) {
    if (window.confirm("Are you sure?")) {
      setNotes((prevNotes) => {
        return prevNotes.filter((noteItem, index) => {
          return index !== id;
        });
      });
    }
  }

  function deleteGallery(id) {
    setGallery((prevGallery) => {
      return prevGallery.filter((galleryItem, index) => {
        return index !== id;
      });
    });
  }

  function addGallery(newGallery) {
    console.log(newGallery);
    setGallery((prevGallery) => {
      // return [...prevNotes, newNote];
      return [newGallery, ...prevGallery];
    });
  }

  function addNote(newNote) {
    if (
      newNote.title !== "" &&
      newNote.content !== "" &&
      newNote.image !== ""
    ) {
      setNotes((prevNotes) => {
        // return [...prevNotes, newNote];
        return [newNote, ...prevNotes];
      });
      setAlert(null);
    } else {
      showAlert();
    }
  }

  const [isOpened, setIsOpened] = useState(false);
  function toggle() {
    setIsOpened((wasOpened) => !wasOpened);
  }

  useEffect(() => {
    updateStorage(JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    updateGallery(JSON.stringify(gallery));
  }, [gallery]);

  useEffect(() => {
    setFilteredNotes(
      notes.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, notes]);

  function showAlert() {
    setAlert(true);
    setTimeout(() => setAlert(null), 3000);
  }

  window.setTimeout(function(){
    setLoad(false)
  },1500)

  return (
    <div className="App">
      <Header searchFunc={(e) => setSearch(e.target.value)} />
      <div className="row">
        <Sidebar />
        <div className="col s7 card-panel list-products main-list">
          <div className="row">
            <h5 className="col s9">Products</h5>
            <div
              className="btn-add-new waves-effect waves-light btn teal darken-3 col s2"
              onClick={toggle}
            >
              Add New Product
            </div>
          </div>
          {isOpened && <CreateProduct onAdd={addNote} />}

          {alert !== null && (
            <div className="error red lighten-4">
              Error! Please inform the data
            </div>
          )}
          {load ? <Loading /> : filteredNotes.map((noteItem, index) => {
            return (
              <ListProducts
                key={index}
                id={index}
                title={noteItem.title}
                content={noteItem.content}
                image={noteItem.image}
                price={noteItem.price}
                onDelete={deleteNote}
                onGallery={addGallery}
              />
            );
          })}
          
          {!filteredNotes.length && (
            <div className="col s12">
              <VscEmptyWindow /> Product List Empty
            </div>
          )}
        </div>

        <div className="col s3 gallery-container">
          <h5>New Gallery</h5>
          <div>

          {gallery.map((noteItem, index) => {
              return (
                <ListGallery
                  key={index}
                  id={index}
                  title={noteItem.title}
                  content={noteItem.content}
                  image={noteItem.image}
                  price={noteItem.price}
                  onDelete={deleteGallery}
                />
              );
            })}
    
          </div>
          {/* {!gallery.length && <div className="col s12">Gallery is Empty</div>} */}
          {gallery.length !== 0 ? (
            <div className="col s12">
              <Link
                to="/gallery"
                className="w100 waves-effect waves-light btn teal darken-3 col s2"
              >
                <FaEye /> Preview
              </Link>
            </div>
          ) : (
            <div className="col s12">
              <VscEmptyWindow /> Gallery is Empty
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}