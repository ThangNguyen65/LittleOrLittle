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
import { useRef, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import ReactDatePicker from "react-datepicker";
import dayjs from "dayjs";
import "../../front/index.css";
import { CalendarOutlined } from "@ant-design/icons";
function Home() {
  const [date, setDate] = useState("");
  const datePickerRef = useRef();

  const handleDateChange = (e: any) => {
    setDate(dayjs(e).format("DD/MM/YYYY"));
  };
  return (
    <div className="bg_home">
      <Image
        src={imageHome}
        alt=""
        preview={false}
        width={"97%"}
        height={"44vw"}
        style={{
          marginLeft: "24px",
          position: "relative",
        }}
      />
      <div className="Imagedamsen ">
        <Image
          src={imageDamsen}
          className="imgds"
          width={"106px"}
          preview={false}
        />
        <Typography>
          <Typography.Title
            className="bold-park"
            style={{
              color: "#fff",
              marginLeft: "10px",
              fontWeight: "900",
              fontStyle: "normal",
              lineHeight: "43px",
              marginTop: "-6px",
              fontSize: "38px",
            }}
          >
            ĐẦM SEN <br /> PARK
          </Typography.Title>
        </Typography>
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute" }}>
            <Image
              src={KhinhKhiCau}
              width={"93%"}
              preview={false}
              style={{ marginLeft: "80px", marginTop: "20px" }}
            />
          </div>
          <div style={{ position: "absolute" }}>
            <Image
              src={KhinhKhiCau1}
              preview={false}
              width={"30%"}
              style={{
                marginLeft: "220px",
                marginTop: "-27px",
              }}
            />
          </div>
          <div style={{ position: "absolute" }}>
            <Image
              src={Childrens}
              width={"148%"}
              preview={false}
              style={{
                marginLeft: "276px",
                marginTop: "-62px",
              }}
            />
          </div>
        </div>
      </div>

      <Image
        src={KhinhKhiCau2}
        width={"8%"}
        style={{
          marginTop: "-430px",
          marginLeft: "2px",
          position: "absolute",
        }}
      />

      <Image
        src={GirlChildren}
        preview={false}
        width={"14%"}
        style={{
          position: "absolute",
          marginTop: "-290px",
          marginLeft: "-63px",
          zIndex: 2,
        }}
      />

      <div
        style={{
          position: "absolute",
        }}
      >
        <div
          style={{
            position: "relative",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(253, 232, 179, 1)",
              width: "69.5%",
              height: "297px",
              marginLeft: "153px",
              marginTop: "-400px",
              borderRadius: "18px",
              zIndex: 1,
              position: "absolute",
              paddingBottom: "2px",
            }}
          >
            <div
              style={{
                backgroundColor: "rgba(255, 246, 212, 1)",
                zIndex: 0,
                width: "97%",
                height: "277px",
                marginTop: "10px",
                marginLeft: "10px",
                border: "dashed 3px rgba(255, 180, 137, 1)",
                borderRadius: "18px",
                marginBottom: "10px",
              }}
            ></div>
          </div>
          <div
            style={{
              position: "absolute",
              zIndex: "0",
              width: "10%",
              marginLeft: "390px",
              marginTop: "-122px",
            }}
          >
            <Image src={KhinhKhiCau5} preview={false} />
          </div>
          <div
            style={{
              backgroundColor: "rgba(255, 202, 123, 1)",
              height: "50px",
              width: "68.8%",
              borderBottomLeftRadius: "20px",
              borderBottomRightRadius: "20px",
              marginLeft: "160px",
              marginTop: "-137px",
              position: "absolute",
            }}
          >
            <Typography
              style={{
                marginLeft: "10px",
                marginTop: "-240px",
              }}
            >
              <Typography.Text
                style={{
                  fontSize: "14px",
                  zIndex: "1",
                  position: "absolute",
                  marginLeft: "20px",
                  fontFamily: "Montserrat",
                  color: "#23221F",
                  opacity: "0.699999988079071",
                  paddingRight: "20px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse ac mollis justo. Etiam volupat tellus quis risus
                volupat. ut posuere ex facilisis.
              </Typography.Text>
              <Typography.Text
                style={{
                  fontSize: "14px",
                  zIndex: "1",
                  position: "absolute",
                  marginTop: "44px",
                  marginLeft: "20px",
                  fontFamily: "Montserrat",
                  color: "#23221F",
                  opacity: "0.699999988079071",
                  paddingRight: "25px",
                }}
              >
                Suspendisse iaculis libero lobortis condimentum gravida. Aenean
                auctor iaculis risus, lobortis molestie lectus consequat a.
              </Typography.Text>
            </Typography>
          </div>
          <Space
            style={{
              position: "absolute",
              marginLeft: "228px",
              marginTop: "-280px",
              zIndex: 1,
              display: "block",
              lineHeight: "30px",
            }}
          >
            <div style={{ display: "flex" }}>
              <Image src={AnhNgoiSao} preview={false} width={"6%"} />
              <Typography.Text
                style={{
                  fontSize: "18px",
                  marginTop: "4px",
                  color: "#23221F",
                  fontFamily: " Montserrat",
                  opacity: "0.800000011920929",
                  fontWeight: "700",
                  marginLeft: "5px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography.Text>
            </div>
            <div style={{ display: "flex" }}>
              <Image src={AnhNgoiSao} preview={false} width={"6%"} />
              <Typography.Text
                style={{
                  fontSize: "18px",
                  marginTop: "4px",
                  color: "#23221F",
                  fontFamily: " Montserrat",
                  opacity: "0.800000011920929",
                  fontWeight: "700",
                  marginLeft: "5px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography.Text>
            </div>
            <div style={{ display: "flex" }}>
              <Image src={AnhNgoiSao} preview={false} width={"6%"} />
              <Typography.Text
                style={{
                  fontSize: "18px",
                  marginTop: "4px",
                  color: "#23221F",
                  fontFamily: " Montserrat",
                  opacity: "0.800000011920929",
                  fontWeight: "700",
                  marginLeft: "5px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography.Text>
            </div>
            <div style={{ display: "flex" }}>
              <Image src={AnhNgoiSao} preview={false} width={"6%"} />
              <Typography.Text
                style={{
                  fontSize: "18px",
                  marginTop: "4px",
                  color: "#23221F",
                  fontFamily: " Montserrat",
                  opacity: "0.800000011920929",
                  fontWeight: "700",
                  marginLeft: "5px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography.Text>
            </div>
          </Space>
        </div>
        <div
          style={{
            position: "absolute",
            zIndex: "0",
            width: "11%",
            marginLeft: "1127px",
            marginTop: "-155px",
          }}
        >
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
        <div
          style={{
            position: "relative",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(253, 232, 179, 1)",
              width: "39%",
              height: "300px",
              marginLeft: "792.8px",
              marginTop: "-427px",
              borderRadius: "18px",
              zIndex: 1,
              position: "absolute",
            }}
          >
            <div
              style={{
                backgroundColor: "rgba(255, 246, 212, 1)",
                width: "94%",
                height: "279px",
                marginTop: "10px",
                marginLeft: "10px",
                border: "dashed 3px rgba(255, 180, 137, 1)",
                borderRadius: "18px",
                marginRight: "10px",
                marginBottom: "10px",
                position: "absolute",
                zIndex: 0,
              }}
            >
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
              <Typography.Text
                style={{
                  position: "absolute",
                  margin: "-40px 0px 0px -36px",
                  fontWeight: "900",
                  color: "#FFF",
                }}
              >
                VÉ CỦA BẠN
              </Typography.Text>
              <div
                style={{
                  position: "absolute",
                  display: "flex",
                  width: "100%",
                  marginTop: "-13px",
                }}
              >
                <Input
                  type="text"
                  style={{
                    width: "80%",
                    margin: "0px 0px 0px 10px",
                    borderRadius: "16",
                    background: "#FFF",
                    boxShadow: "-1px 3px 3px 0px rgba(178, 91, 11, 0.50) inset",
                    border: "none",
                    fontSize: "12px",
                  }}
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
                  style={{
                    width: "30%",
                    margin: "13px 0px 0px 10px",
                    borderRadius: "16",
                    background: "#FFF",
                    boxShadow: "-1px 3px 3px 0px rgba(178, 91, 11, 0.50) inset",
                    border: "none",
                    fontSize: "12px",
                  }}
                  placeholder="Số lượng vé"
                />

                <Input
                  style={{
                    width: "47%",
                    margin: "13px 0px 0px 10px",
                    borderRadius: "16",
                    background: "#FFF",
                    boxShadow: "-1px 3px 3px 0px rgba(178, 91, 11, 0.50) inset",
                    border: "none",
                    fontSize: "12px",
                  }}
                  placeholder="Ngày sử dụng"
                  value={date}
                />
                <div className="button-container-date">
                  <Button className="btn_bg_date">
                    {" "}
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
                {/* <div className="button-container-date">
                  <Button
                    className="btn_bg_date"
                    style={{
                      width: "33px",
                      height: "26px",
                      marginLeft: "8px",
                    }}
                  >
                    <ReactDatePicker
                      onChange={dateChange}
                      className="btn_date"
                    />
                   
                  </Button>
                  <div className="background-div-date"></div>
                </div> */}
              </div>
              <div>
                <Input
                  placeholder="Họ và tên"
                  type="text"
                  style={{
                    width: "92%",
                    margin: "13px 0px 0px 10px",
                    borderRadius: "16",
                    background: "#FFF",
                    boxShadow: "-1px 3px 3px 0px rgba(178, 91, 11, 0.50) inset",
                    border: "none",
                    fontSize: "12px",
                  }}
                />
              </div>
              <div>
                <Input
                  placeholder="Số điện thoại"
                  type="text"
                  style={{
                    width: "92%",
                    margin: "13px 0px 0px 10px",
                    borderRadius: "16",
                    background: "#FFF",
                    boxShadow: "-1px 3px 3px 0px rgba(178, 91, 11, 0.50) inset",
                    border: "none",
                    fontSize: "12px",
                  }}
                />
              </div>
              <div>
                <Input
                  type="text"
                  style={{
                    width: "92%",
                    margin: "13px 0px 0px 10px",
                    borderRadius: "16",
                    background: "#FFF",
                    boxShadow: "-1px 3px 3px 0px rgba(178, 91, 11, 0.50) inset",
                    border: "none",
                    fontSize: "12px",
                  }}
                  placeholder="Địa chỉ Email"
                />
              </div>
              <div className="">
                <Button
                  className="ButtonKhung"
                  style={{
                    backgroundColor: "red",
                    border: "none",
                  }}
                >
                  Đặt vé
                </Button>
                <div className="bgBookVe"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          zIndex: "1",
          width: "8%",
          marginLeft: "1177px",
          marginTop: "-390px",
        }}
      >
        <Image src={KhinhKhiCau3} preview={false} />
      </div>
    </div>
  );
}

export default Home;
