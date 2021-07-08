import React from "react";
import { Link } from "react-router-dom";
import { FaShopify, FaUserAlt } from "react-icons/fa";

const Header = (props) => {

  return (
    <header id="nav-home" className="row">
      <nav className="col s12 grey lighten-5">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">
            <FaShopify /> shopify
          </Link>
          <div className="col s5 offset-s3">
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
