import { Button, Card, Image, Typography } from "antd";
import React from "react";
import imageHome from "../../img/bg.png";
import ImagePaySuccess from "../../img/paysuccess/ImagePaySuccsess.svg";
import QRCode from "../../img/paysuccess/QRCodePaySuccess.svg";
import TickXanh from "../../img/paysuccess/TickXanh.svg";
import ArrowLeft from "../../img/even/ArrowLeft.svg";
import ArrowRight from "../../img/even/ArrowRight.svg";
import "../../front/index.css";
import "../../css/PaySuccess.css";

function PSuccess() {
  return (
    <div className="bg_home">
      <Image
        src={imageHome}
        alt=""
        preview={false}
        width={"97%"}
        height={"45vw"}
        className="background_big_pay_success"
      />
      <div>
        <Typography.Text className="TitlePSuccess bold-park">
          Thanh Toán Thành Công
        </Typography.Text>
      </div>
      <Image
        src={ImagePaySuccess}
        width={"220px"}
        height={"320px"}
        className="ImagePaySuccess"
        preview={false}
      />
      <div className="bg_baobocPaySuccess">
        <div className="bgLevel3PaySuccess">
          <div className="bgLevel2PaySuccess">
            <div className="row">
              <div className="col-lg-1">
                <div style={{ position: "absolute" }}>
                  <div className="btn-container-paySuccess">
                    <Button
                      className="btnLeftPaySuccess"
                      style={{ width: "45px", height: "35px" }}
                    >
                      <Image
                        src={ArrowLeft}
                        preview={false}
                        className="ArrowLeftPaySuccess"
                        width={"30px"}
                      />
                    </Button>
                    <div className="BtnArrowLeftBottomPaySuccess"></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-10">
                <div className="row mt-2">
                  <div className="col-lg-3">
                    <Card
                      cover={
                        <Image
                          src={QRCode}
                          preview={false}
                          width={"40%"}
                          style={{
                            margin: "20px 0px 0px 57px",
                          }}
                        />
                      }
                      style={{
                        height: "273px",
                      }}
                    >
                      <h5 className="H5PaySuccess">ALT20210501</h5>
                      <Typography
                        style={{
                          color: "#FFC226",
                          margin: "0px 0px 0px 40px",
                          fontWeight: "700",
                        }}
                      >
                        VÉ CỔNG
                      </Typography>
                      <Typography
                        style={{
                          margin: "0px 0px 0px 60px",
                          fontWeight: "900",
                        }}
                      >
                        ---
                      </Typography>
                      <Typography.Text
                        style={{
                          fontSize: "12px",
                        }}
                      >
                        Ngày sử dụng: 31/05/2021
                      </Typography.Text>
                      <Image
                        src={TickXanh}
                        width={"20%"}
                        preview={false}
                        style={{
                          margin: "22px 0px 0px 54px",
                        }}
                      />
                    </Card>
                  </div>
                  <div className="col-lg-3">
                    <Card
                      cover={
                        <Image
                          src={QRCode}
                          preview={false}
                          width={"40%"}
                          style={{
                            margin: "20px 0px 0px 57px",
                          }}
                        />
                      }
                      style={{
                        height: "273px",
                      }}
                    >
                      <h5 className="H5PaySuccess">ALT20210501</h5>
                      <Typography
                        style={{
                          color: "#FFC226",
                          margin: "0px 0px 0px 40px",
                          fontWeight: "700",
                        }}
                      >
                        VÉ CỔNG
                      </Typography>
                      <Typography
                        style={{
                          margin: "0px 0px 0px 60px",
                          fontWeight: "900",
                        }}
                      >
                        ---
                      </Typography>
                      <Typography.Text
                        style={{
                          fontSize: "12px",
                        }}
                      >
                        Ngày sử dụng: 31/05/2021
                      </Typography.Text>
                      <Image
                        src={TickXanh}
                        width={"20%"}
                        preview={false}
                        style={{
                          margin: "22px 0px 0px 54px",
                        }}
                      />
                    </Card>
                  </div>
                  <div className="col-lg-3">
                    <Card
                      cover={
                        <Image
                          src={QRCode}
                          preview={false}
                          width={"40%"}
                          style={{
                            margin: "20px 0px 0px 57px",
                          }}
                        />
                      }
                      style={{
                        height: "273px",
                      }}
                    >
                      <h5 className="H5PaySuccess">ALT20210501</h5>
                      <Typography
                        style={{
                          color: "#FFC226",
                          margin: "0px 0px 0px 40px",
                          fontWeight: "700",
                        }}
                      >
                        VÉ CỔNG
                      </Typography>
                      <Typography
                        style={{
                          margin: "0px 0px 0px 60px",
                          fontWeight: "900",
                        }}
                      >
                        ---
                      </Typography>
                      <Typography.Text
                        style={{
                          fontSize: "12px",
                        }}
                      >
                        Ngày sử dụng: 31/05/2021
                      </Typography.Text>
                      <Image
                        src={TickXanh}
                        width={"20%"}
                        preview={false}
                        style={{
                          margin: "22px 0px 0px 54px",
                        }}
                      />
                    </Card>
                  </div>
                  <div className="col-lg-3">
                    <Card
                      cover={
                        <Image
                          src={QRCode}
                          preview={false}
                          width={"40%"}
                          style={{
                            margin: "20px 0px 0px 57px",
                          }}
                        />
                      }
                      style={{
                        height: "273px",
                      }}
                    >
                      <h5 className="H5PaySuccess">ALT20210501</h5>
                      <Typography
                        style={{
                          color: "#FFC226",
                          margin: "0px 0px 0px 40px",
                          fontWeight: "700",
                        }}
                      >
                        VÉ CỔNG
                      </Typography>
                      <Typography
                        style={{
                          margin: "0px 0px 0px 60px",
                          fontWeight: "900",
                        }}
                      >
                        ---
                      </Typography>
                      <Typography.Text
                        style={{
                          fontSize: "12px",
                        }}
                      >
                        Ngày sử dụng: 31/05/2021
                      </Typography.Text>
                      <Image
                        src={TickXanh}
                        width={"20%"}
                        preview={false}
                        style={{
                          margin: "22px 0px 0px 54px",
                        }}
                      />
                    </Card>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-lg-6">
                    <p>Số lượng vé: 12 vé</p>
                  </div>
                  <div className="col-lg-6 text-end">
                    <p>Trang 1/3</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-1">
                <div style={{ position: "absolute" }}>
                  <div className="btn-container-paySuccess-right">
                    <Button
                      className="btnRightPaySuccess"
                      style={{ width: "45px", height: "35px" }}
                    >
                      <Image
                        src={ArrowRight}
                        preview={false}
                        className="ArrowRightPaySuccess"
                        width={"30px"}
                      />
                    </Button>
                    <div className="BtnArrowRightBottomPaySuccess"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="BgLevel4BottomPaySuccess"></div>
      <div
        style={{
          zIndex: "2",
          position: "absolute",
          margin: "-390px 0px 0px 490px",
        }}
      >
        <Button className="bold-park btnPaySuccessDownload">Tải về</Button>
        <Button className="bold-park btnPaySuccessMail">Gửi Email</Button>
      </div>
    </div>
  );
}

export default PSuccess;
