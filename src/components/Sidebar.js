import { Link } from "react-router-dom";
import { AiFillTag, AiFillHome, AiTwotoneShop, AiTwotoneAppstore } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";



export default function Sidebar() {
  function closeMenu(){
    document.querySelector('body').classList.toggle('open');
  }
  return (
    <div className="col s2 sidebar">
      <div className="collection ">
        <Link to="/" className="collection-item " onClick={closeMenu}>
          <AiFillHome />
          Home
        </Link>
        <Link to="/adm" className="collection-item " onClick={closeMenu}>
          <AiFillTag />
          Produtos
        </Link>
        <Link to="/gallery" className="collection-item " onClick={closeMenu}>
          <AiTwotoneShop />
          Gallery
        </Link>
        <Link to="/" className="collection-item" onClick={closeMenu}>
          <FaUserAlt />
          Customers
        </Link>
        <Link to="/" className="collection-item" onClick={closeMenu}>
          <AiTwotoneAppstore />
          Apps
        </Link>
      </div>
    </div>
  );
}
