import { Link } from "react-router-dom";
import { AiFillTag, AiFillHome, AiTwotoneShop } from "react-icons/ai";

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
      </div>
    </div>
  );
}
