import { Button, DatePicker, Image, Input, Space, Typography } from "antd";
import imageHome from "../../img/bg.png";
import imageDamsen from "../../img/home/image 2.png";
import KhinhKhiCau from "../../img/home/18451 [Converted]-03 1.png";
import KhinhKhiCau1 from "../../img/home/18451 [Converted]-02 1.png";
import Childrens from "../../img/home/childres.png";
import KhinhKhiCau2 from "../../img/home/18451 [Converted]-06 1.png";
import cot13lo from "../../img/Vector.svg";
import AnhNgoiSao from "../../img/home/AnhNgoiSao.png";
import GirlChildren from "../../img/home/Lisa_Arnold_Lay_Do_F2 3.svg";
import KhinhKhiCau3 from "../../img/home/18451 [Converted]-05 1.png";
import KhinhKhiCau4 from "../../img/home/18451 [Converted]-03 2.png";
import KhinhKhiCau5 from "../../img/home/18451 [Converted]-04 1.png";
import ChamKhungVeCuaBan from "../../img/home/ChamKhungVeCuaBan.png";
import ArrowButtom from "../../img/home/arrowBottom.svg";
import IconsDate from "../../img/home/date.svg";
import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs";
import "../../front/index.css";
import "../../css/Home.css";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../../components/firebase";
function Home() {
  const navigate = useNavigate();
  const [packageType, setPackageType] = useState("Gói Gia Đình");
  const [quantity, setQuantity] = useState("");
  const [dateUsed, setDateUsed] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const handleDateChange = (date: any) => {
    const formattedDate = dayjs(date).format("DD/MM/YYYY");
    setDateUsed(formattedDate);
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;

    if (name === "quantity") {
      setQuantity(value);
    } else if (name === "fullName") {
      setFullName(value);
    } else if (name === "phoneNumber") {
      setPhoneNumber(value);
    } else if (name === "email") {
      setEmail(value);
    }
  };

  useEffect(() => {
    setIsFormValid(
      quantity !== "" && fullName !== "" && phoneNumber !== "" && email !== ""
    );
  }, [quantity, fullName, phoneNumber, email]);
  const handleFormSubmit = () => {
    const userData = {
      quantity,
      dateUsed,
      fullName,
      phoneNumber,
      email,
      packageType,
    };

    db.collection("TicketBook")
      .add(userData)
      .then((docRef) => {
        console.log("Đã thêm dữ liệu thành công:", docRef.id);
        // Xử lý thành công, có thể thực hiện các hành động khác ở đây

        // Xóa dữ liệu sau khi đặt vé thành công
        setQuantity("");
        setFullName("");
        setPhoneNumber("");
        setEmail("");
        setDateUsed("");

        navigate("/pay", {
          state: {
            packageType,
            quantity,
            dateUsed,
            fullName,
            phoneNumber,
            email,
          },
        });
      })
      .catch((error) => {
        console.error("Lỗi khi thêm dữ liệu:", error);
      });
    localStorage.setItem("userData", JSON.stringify(userData));
  };
  return (
    <div className="bg_home">
      <Image
        src={imageHome}
        preview={false}
        width={"97%"}
        height={"44vw"}
        className="BgMainHome"
      />
      <div className="Imagedamsen ">
        <Image
          src={imageDamsen}
          className="imgds"
          width={"106px"}
          preview={false}
        />
        <Typography>
          <Typography.Text className="bold-park TitleHome">
            ĐẦM SEN <br /> <span className="ms-3">PARK</span>
          </Typography.Text>
        </Typography>
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute" }}>
            <Image
              src={KhinhKhiCau}
              width={"93%"}
              preview={false}
              className="Image1"
            />
          </div>
          <div style={{ position: "absolute" }}>
            <Image
              src={KhinhKhiCau1}
              preview={false}
              width={"30%"}
              className="Image2"
            />
          </div>
          <div style={{ position: "absolute" }}>
            <Image
              src={Childrens}
              width={"148%"}
              preview={false}
              className="Image3"
            />
          </div>
        </div>
      </div>

      <Image
        src={KhinhKhiCau2}
        width={"8%"}
        className="Image4"
        preview={false}
      />

      <Image
        src={GirlChildren}
        preview={false}
        width={"14%"}
        className="Image5"
      />

      <div className="BgMainAbsolute">
        <div className="BgMainRelative">
          <div className="BgLeftTableMain">
            <div className="BgLeftInsideTableMain"></div>
          </div>
          <div className="BgLeftInsideBottomMain">
            <Image src={KhinhKhiCau5} preview={false} />
          </div>
          <div className="BgLeftInsideBottom">
            <Typography className="TotalTextMain">
              <Typography.Text className="TextMain1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse ac mollis justo. Etiam volupat tellus quis risus
                volupat. ut posuere ex facilisis.
              </Typography.Text>
              <Typography.Text className="TextMain2">
                Suspendisse iaculis libero lobortis condimentum gravida. Aenean
                auctor iaculis risus, lobortis molestie lectus consequat a.
              </Typography.Text>
            </Typography>
          </div>
          <Space className="TotalStartHome">
            <div style={{ display: "flex" }}>
              <Image src={AnhNgoiSao} preview={false} width={"6%"} />
              <Typography.Text className="TextStartHome1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography.Text>
            </div>
            <div style={{ display: "flex" }}>
              <Image src={AnhNgoiSao} preview={false} width={"6%"} />
              <Typography.Text className="TextStartHome1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography.Text>
            </div>
            <div style={{ display: "flex" }}>
              <Image src={AnhNgoiSao} preview={false} width={"6%"} />
              <Typography.Text className="TextStartHome1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography.Text>
            </div>
            <div style={{ display: "flex" }}>
              <Image src={AnhNgoiSao} preview={false} width={"6%"} />
              <Typography.Text className="TextStartHome1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography.Text>
            </div>
          </Space>
        </div>
        <div className="kkc2">
          <Image src={KhinhKhiCau4} preview={false} />
        </div>
        <div
          style={{
            backgroundColor: "rgba(255, 202, 123, 1)",
            height: "50px",
            width: "39.2%",
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
            marginLeft: "790px",
            marginTop: "-136px",
            position: "absolute",
          }}
        ></div>
        <Image
          src={cot13lo}
          preview={false}
          width={"8%"}
          style={{
            marginLeft: "755px",
            marginTop: "-531px",
          }}
        />
        <div className="BgHomeMainRight">
          <div className="BgHomeMainRightLevel3">
            <div className="BgHomeMainRightLevel2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="280"
                height="45"
                viewBox="0 0 284 77"
                fill="none"
                style={{
                  marginTop: "-33px",
                  marginLeft: "24px",
                  position: "relative",
                }}
              >
                <path
                  d="M269.864 59.3984C269.864 59.3984 197.292 76.3383 142 76.3383C81.054 76.3383 14.136 59.3984 14.136 59.3984C6.32603 59.3984 0 53.0765 0 45.2818V16.4187C0 8.6195 6.33057 2.30216 14.136 2.30216L142 0L269.864 2.30216C277.674 2.30216 284 8.62403 284 16.4187V45.2818C284.005 53.0811 277.674 59.3984 269.864 59.3984Z"
                  fill="url(#paint0_linear_194_405)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_194_405"
                    x1="142"
                    y1="-13"
                    x2="143.734"
                    y2="79.8365"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FF000A" />
                    <stop offset="1" stopColor="#C2000B" />
                  </linearGradient>
                </defs>
              </svg>
              <Image
                src={ChamKhungVeCuaBan}
                preview={false}
                width={"49.6%"}
                style={{
                  position: "absolute",
                  zIndex: 1,
                  strokeWidth: " 1px",
                  stroke: " #FFF",
                  margin: "-65px 0px 0px 84px",
                }}
              ></Image>
              <Typography.Text className="TextTopMainRight">
                VÉ CỦA BẠN
              </Typography.Text>
              <div className="InPutMainRightHome">
                <Input
                  type="text"
                  className="InPutGoiVeHome"
                  value={packageType}
                  onChange={(e) => setPackageType(e.target.value)}
                />
                <div className="button-container">
                  <Button
                    className="btn_bg_arrow"
                    style={{
                      width: "33px",
                      height: "22px",
                      marginLeft: "8px",
                    }}
                  >
                    <Image
                      src={ArrowButtom}
                      className="image-with-shadow"
                      preview={false}
                      width={20}
                      height={20}
                      style={{
                        margin: "-11.6px 0px 0px -17px",
                      }}
                    />
                  </Button>
                  <div className="background-div"></div>
                </div>
              </div>
              <div
                style={{
                  marginTop: "10px",
                  display: "flex",
                }}
              >
                <Input
                  type="text"
                  name="quantity"
                  className="InPutQuantityHome"
                  placeholder="Số lượng vé"
                  value={quantity}
                  onChange={handleInputChange}
                />

                <Input
                  className="InPutDateUsedHome"
                  placeholder="Ngày sử dụng"
                  value={dateUsed}
                />
                <div className="button-container-date">
                  <Button className="btn_bg_date">
                    <Image
                      src={IconsDate}
                      className="image-with-shadow"
                      preview={false}
                      width={15}
                      height={20}
                      style={{
                        margin: "-5px 0px 0px -14px",
                        position: "absolute",
                      }}
                    />
                  </Button>
                  <DatePicker
                    picker="date"
                    className="btn_date"
                    onChange={handleDateChange}
                    style={{ opacity: "0" }}
                  />
                </div>
                <div className="background-div-date"></div>
              </div>
              <div>
                <Input
                  placeholder="Họ và tên"
                  type="text"
                  name="fullName"
                  className="InPutNameHome"
                  value={fullName}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Input
                  placeholder="Số điện thoại"
                  type="text"
                  name="phoneNumber"
                  className="InPutPhoneHome"
                  value={phoneNumber}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Input
                  type="text"
                  name="email"
                  className="InputMailHome"
                  placeholder="Địa chỉ Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="">
                {/* <Link to={`/pay`}> */}
                  <Button
                    className="ButtonKhung"
                    onClick={handleFormSubmit}
                    disabled={!isFormValid}
                  >
                    Đặt vé
                  </Button>
                {/* </Link> */}
                <div className="bgBookVe"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="kkc3">
        <Image src={KhinhKhiCau3} preview={false} />
      </div>
    </div>
  );
}

export default Home;
