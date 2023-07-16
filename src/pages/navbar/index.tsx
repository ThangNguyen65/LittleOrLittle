import logoHome from "../../img/navbar/Little & Little Logo (ngang) 1 (1).svg";
import { Image } from "antd";
import IconsPhone from "../../img/navbar/IconsPhone.svg";
import { Link, useLocation } from "react-router-dom";
function NavBar() {
  const location = useLocation();
  return (
    <div className="middle-navbar">
      <nav className="navBar">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <Image
                src={logoHome}
                alt=""
                preview={false}
                width={"60%"}
                style={{
                  marginLeft: "80px",
                  marginTop: "-20px",
                  position: "absolute",
                }}
              />
            </div>
            <div className="col-lg-9 textNav">
              <div className="textNavbar">
                <Link
                  to="/"
                  className={`Home ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                >
                  Trang chủ
                </Link>
                <Link
                  to="/sukien"
                  className={`Party ${
                    location.pathname === "/sukien" ? "active" : ""
                  }`}
                >
                  Sự kiện
                </Link>
                <Link
                  to="/lienhe"
                  className={`contact ${
                    location.pathname === "/lienhe" ? "active" : ""
                  }`}
                >
                  Liên hệ
                </Link>
              </div>
              <div className="contactPhone">
                <Image src={IconsPhone} preview={false} width={"20%"} />
                <p className="phoneContact">0123456789</p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
