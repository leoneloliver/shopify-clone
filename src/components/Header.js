import React from "react";
import { Link } from "react-router-dom";
import { FaShopify, FaUserAlt } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

const Header = (props) => {

  function openMenu(){
    document.querySelector('body').classList.toggle('open');
  }

  return (
    <header id="nav-home" className="row">
      <nav className="col s12">
        <div className="nav-wrapper">
          <div id="menu" onClick={openMenu}>
            <FiMenu />
          </div>
          <Link to="/" className="brand-logo">
            <FaShopify /> shopify
          </Link>
          <div className="col s5 offset-s3 search-bar">
            <form>
              <div className="input-field">
               
                <input
                  id="search"
                  type="search"
                  className="search"
                  placeholder="Search"
                  onChange={props.searchFunc}
                  onFocus={props.searchFunc}
                  autoComplete="off"
                />
                <label className="label-icon" htmlFor="search">
                  <i className="material-icons">search</i>
                </label>
                <i className="material-icons">close</i>
              </div>
            </form>
          </div>

          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li className="avatar grey lighten-1">
              <FaUserAlt />
            </li>
            <li className="row">
              <Link to="/adm">Leonel Oliveira</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
