import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { AiFillCheckCircle, AiFillTag } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div className="App">
      <Header />
      <div className="row">
        <Sidebar />
        <div className="col s10 card-panel list-products main-list">
          <div className="row">
            <div className="col s9 offset-s1 home-content">
              <h5 className="teal darken-3 home-title">
                You're off to a great start.
              </h5>
              <div className="card col s12">
                <div className="row">
                  <div className="col s8">
                    <p>
                      Build your store inventory with items you want to sell.
                    </p>
                    <p>
                      Learn more about <Link to="/adm">adding products</Link>
                    </p>
                    <div className="home-add">
                      <AiFillCheckCircle />{" "}
                      <Link to="/adm">Add another product</Link>
                    </div>
                  </div>
                  <div className="col s4">
                    <div className="tag-01">
                      <AiFillTag />
                    </div>
                    <div className="check-01">
                      <AiFillCheckCircle />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
