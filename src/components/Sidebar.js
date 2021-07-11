import { Link } from "react-router-dom";
import { AiFillTag, AiFillHome, AiTwotoneShop, AiTwotoneAppstore } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="col s2 sidebar">
      <div className="collection ">
        <Link to="/" className="collection-item ">
          <AiFillHome />
          Home
        </Link>
        <Link to="/adm" className="collection-item ">
          <AiFillTag />
          Produtos
        </Link>
        <Link to="/gallery" className="collection-item ">
          <AiTwotoneShop />
          Gallery
        </Link>
        <Link to="/" className="collection-item">
          <FaUserAlt />
          Customers
        </Link>
        <Link to="/" className="collection-item">
          <AiTwotoneAppstore />
          Apps
        </Link>
      </div>
    </div>
  );
}
