import { Button, Image, Input, Space, Typography } from "antd";
import imageHome from "../../img/bg.png";
import imageDamsen from "../../img/image 2.png";
import KhinhKhiCau from "../../img/18451 [Converted]-03 1.png";
import KhinhKhiCau1 from "../../img/18451 [Converted]-02 1.png";
import Childrens from "../../img/childres.png";
import KhinhKhiCau2 from "../../img/18451 [Converted]-06 1.png";
import cot13lo from "../../img/Vector.svg";
import AnhNgoiSao from "../../img/AnhNgoiSao.png";
import GirlChildren from "../../img/Lisa_Arnold_Lay_Do_F2 3.svg";
import KhinhKhiCau3 from "../../img/18451 [Converted]-05 1.png";
import KhinhKhiCau4 from "../../img/18451 [Converted]-03 2.png";
import KhinhKhiCau5 from "../../img/18451 [Converted]-04 1.png";
import ChamKhungVeCuaBan from "../../img/ChamKhungVeCuaBan.png";
import ArrowButtom from "../../img/arrowBottom.svg";
function Home() {
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
          width={"100px"}
          preview={false}
        />
        <Typography className="bold-park">
          <Typography.Title
            style={{
              color: "#fff",
              marginLeft: "21px",
              fontWeight: "900",
              fontStyle: "normal",
              lineHeight: "43px",
              marginTop: "2px",
              fontSize: "30px",
            }}
          >
            ĐẦM SEN <br /> PARK
          </Typography.Title>
        </Typography>
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute" }}>
            <Image
              src={KhinhKhiCau}
              width={"75%"}
              preview={false}
              style={{ marginLeft: "99px", marginTop: "20px" }}
            />
          </div>
          <div style={{ position: "absolute" }}>
            <Image
              src={KhinhKhiCau1}
              preview={false}
              width={"27%"}
              style={{
                marginLeft: "260px",
                marginTop: "-27px",
              }}
            />
          </div>
          <div style={{ position: "absolute" }}>
            <Image
              src={Childrens}
              width={"121%"}
              preview={false}
              style={{
                marginLeft: "340px",
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
                  type="text"
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
                />
                <label htmlFor="">
                  {/* <Button
                    className="btn_bg_arrow"
                    style={{
                      width: "auto",
                      height: "auto",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 33 34"
                      fill="none"
                      style={{
                        margin: "10px 0px 0px 10px",
                        boxShadow: " 0px 100px 10px -15px #111",
                      }}
                    >
                      <path
                        d="M16.8439 26.376C17.1081 26.376 17.3663 26.2976 17.5859 26.1506C17.8056 26.0037 17.9768 25.7948 18.0779 25.5504C18.179 25.306 18.2054 25.0371 18.1539 24.7776C18.1023 24.5182 17.9751 24.2799 17.7883 24.0928C17.6016 23.9058 17.3636 23.7784 17.1045 23.7268C16.8454 23.6752 16.5768 23.7017 16.3328 23.8029C16.0887 23.9041 15.8801 24.0755 15.7334 24.2955C15.5866 24.5154 15.5083 24.774 15.5083 25.0385C15.5083 25.3933 15.649 25.7335 15.8995 25.9843C16.15 26.2351 16.4897 26.376 16.8439 26.376ZM23.522 26.376C23.7862 26.376 24.0444 26.2976 24.2641 26.1506C24.4837 26.0037 24.6549 25.7948 24.756 25.5504C24.8571 25.306 24.8835 25.0371 24.832 24.7776C24.7805 24.5182 24.6533 24.2799 24.4665 24.0928C24.2797 23.9058 24.0417 23.7784 23.7826 23.7268C23.5235 23.6752 23.255 23.7017 23.0109 23.8029C22.7669 23.9041 22.5583 24.0755 22.4115 24.2955C22.2647 24.5154 22.1864 24.774 22.1864 25.0385C22.1864 25.3933 22.3271 25.7335 22.5776 25.9843C22.8281 26.2351 23.1678 26.376 23.522 26.376ZM23.522 21.0261C23.7862 21.0261 24.0444 20.9477 24.2641 20.8007C24.4837 20.6538 24.6549 20.4449 24.756 20.2005C24.8571 19.9561 24.8835 19.6872 24.832 19.4277C24.7805 19.1683 24.6533 18.93 24.4665 18.7429C24.2797 18.5559 24.0417 18.4285 23.7826 18.3769C23.5235 18.3253 23.255 18.3518 23.0109 18.453C22.7669 18.5542 22.5583 18.7257 22.4115 18.9456C22.2647 19.1656 22.1864 19.4241 22.1864 19.6887C22.1864 20.0434 22.3271 20.3836 22.5776 20.6344C22.8281 20.8852 23.1678 21.0261 23.522 21.0261ZM16.8439 21.0261C17.1081 21.0261 17.3663 20.9477 17.5859 20.8007C17.8056 20.6538 17.9768 20.4449 18.0779 20.2005C18.179 19.9561 18.2054 19.6872 18.1539 19.4277C18.1023 19.1683 17.9751 18.93 17.7883 18.7429C17.6016 18.5559 17.3636 18.4285 17.1045 18.3769C16.8454 18.3253 16.5768 18.3518 16.3328 18.453C16.0887 18.5542 15.8801 18.7257 15.7334 18.9456C15.5866 19.1656 15.5083 19.4241 15.5083 19.6887C15.5083 20.0434 15.649 20.3836 15.8995 20.6344C16.15 20.8852 16.4897 21.0261 16.8439 21.0261ZM26.1933 4.97651H24.8577V3.63904C24.8577 3.28432 24.7169 2.94413 24.4665 2.69331C24.216 2.44249 23.8763 2.30157 23.522 2.30157C23.1678 2.30157 22.8281 2.44249 22.5776 2.69331C22.3271 2.94413 22.1864 3.28432 22.1864 3.63904V4.97651H11.5014V3.63904C11.5014 3.28432 11.3607 2.94413 11.1102 2.69331C10.8597 2.44249 10.52 2.30157 10.1658 2.30157C9.81156 2.30157 9.47184 2.44249 9.22136 2.69331C8.97088 2.94413 8.83017 3.28432 8.83017 3.63904V4.97651H7.49454C6.43185 4.97651 5.41269 5.39925 4.66126 6.15172C3.90982 6.90419 3.48767 7.92476 3.48767 8.98892V27.7135C3.48767 28.7776 3.90982 29.7982 4.66126 30.5507C5.41269 31.3032 6.43185 31.7259 7.49454 31.7259H26.1933C27.256 31.7259 28.2751 31.3032 29.0266 30.5507C29.778 29.7982 30.2002 28.7776 30.2002 27.7135V8.98892C30.2002 7.92476 29.778 6.90419 29.0266 6.15172C28.2751 5.39925 27.256 4.97651 26.1933 4.97651ZM27.5289 27.7135C27.5289 28.0682 27.3882 28.4084 27.1377 28.6592C26.8872 28.91 26.5475 29.051 26.1933 29.051H7.49454C7.14031 29.051 6.80059 28.91 6.55011 28.6592C6.29964 28.4084 6.15892 28.0682 6.15892 27.7135V15.6763H27.5289V27.7135ZM27.5289 13.0013H6.15892V8.98892C6.15892 8.6342 6.29964 8.29401 6.55011 8.04319C6.80059 7.79236 7.14031 7.65145 7.49454 7.65145H8.83017V8.98892C8.83017 9.34364 8.97088 9.68383 9.22136 9.93465C9.47184 10.1855 9.81156 10.3264 10.1658 10.3264C10.52 10.3264 10.8597 10.1855 11.1102 9.93465C11.3607 9.68383 11.5014 9.34364 11.5014 8.98892V7.65145H22.1864V8.98892C22.1864 9.34364 22.3271 9.68383 22.5776 9.93465C22.8281 10.1855 23.1678 10.3264 23.522 10.3264C23.8763 10.3264 24.216 10.1855 24.4665 9.93465C24.7169 9.68383 24.8577 9.34364 24.8577 8.98892V7.65145H26.1933C26.5475 7.65145 26.8872 7.79236 27.1377 8.04319C27.3882 8.29401 27.5289 8.6342 27.5289 8.98892V13.0013ZM10.1658 21.0261C10.43 21.0261 10.6882 20.9477 10.9078 20.8007C11.1275 20.6538 11.2987 20.4449 11.3997 20.2005C11.5008 19.9561 11.5273 19.6872 11.4758 19.4277C11.4242 19.1683 11.297 18.93 11.1102 18.7429C10.9234 18.5559 10.6854 18.4285 10.4264 18.3769C10.1673 18.3253 9.89872 18.3518 9.65467 18.453C9.41062 18.5542 9.20202 18.7257 9.05526 18.9456C8.9085 19.1656 8.83017 19.4241 8.83017 19.6887C8.83017 20.0434 8.97088 20.3836 9.22136 20.6344C9.47184 20.8852 9.81156 21.0261 10.1658 21.0261ZM10.1658 26.376C10.43 26.376 10.6882 26.2976 10.9078 26.1506C11.1275 26.0037 11.2987 25.7948 11.3997 25.5504C11.5008 25.306 11.5273 25.0371 11.4758 24.7776C11.4242 24.5182 11.297 24.2799 11.1102 24.0928C10.9234 23.9058 10.6854 23.7784 10.4264 23.7268C10.1673 23.6752 9.89872 23.7017 9.65467 23.8029C9.41062 23.9041 9.20202 24.0755 9.05526 24.2955C8.9085 24.5154 8.83017 24.774 8.83017 25.0385C8.83017 25.3933 8.97088 25.7335 9.22136 25.9843C9.47184 26.2351 9.81156 26.376 10.1658 26.376Z"
                        fill="white"
                      />
                    </svg>
                  </Button> */}
                </label>
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
