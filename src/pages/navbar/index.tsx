import logoHome from "../../img/navbar/Little & Little Logo (ngang) 1 (1).svg";
import { Button, Image } from "antd";
import IconsPhone from "../../img/navbar/IconsPhone.svg";
import { useNavigate } from "react-router-dom";
function NavBar() {
  const navigate = useNavigate();

  const handleButtonClick = (path: any) => {
    navigate(path);
  };
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
                width={"50%"}
                style={{
                  marginLeft: "80px",
                  marginTop: "-20px",
                  position: "absolute",
                }}
              />
            </div>
            <div className="col-lg-9 textNav">
              <div className="textNavbar">
                <Button
                  onClick={() => handleButtonClick("/trangchu")}
                  className="Home"
                  style={{
                    backgroundColor: "rgba(237, 114, 0, 1)",
                    border: "none",
                    color: "rgba(255, 255, 255, 1)",
                    boxShadow: "none",
                    fontSize: "15px",
                    fontWeight: "700",
                    lineHeight: "normal",
                    opacity: "0.800000011920929",
                  }}
                >
                  Trang chủ
                </Button>
                <Button
                  className="Party"
                  onClick={() => handleButtonClick("/sukien")}
                  style={{
                    backgroundColor: "rgba(237, 114, 0, 1)",
                    border: "none",
                    color: "rgba(255, 255, 255, 1)",
                    boxShadow: "none",
                    fontSize: "15px",
                    fontWeight: "700",
                    lineHeight: "normal",
                    opacity: "0.800000011920929",
                  }}
                >
                  Sự kiện
                </Button>
                <Button
                  className="contact"
                  onClick={() => handleButtonClick("/lienhe")}
                  style={{
                    backgroundColor: "rgba(237, 114, 0, 1)",
                    border: "none",
                    color: "rgba(255, 255, 255, 1)",
                    boxShadow: "none",
                    fontSize: "15px",
                    fontWeight: "700",
                    lineHeight: "normal",
                    opacity: "0.800000011920929",
                  }}
                >
                  Liên hệ
                </Button>
              </div>
              <div className="contact">
                <Image src={IconsPhone} preview={false} width={'20%'}/>
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
