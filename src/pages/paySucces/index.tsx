import { Button, Card, Image, Space, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import imageHome from "../../img/bg.png";
import ImagePaySuccess from "../../img/paysuccess/ImagePaySuccsess.svg";
import TickXanh from "../../img/paysuccess/TickXanh.svg";
import ArrowLeft from "../../img/even/ArrowLeft.svg";
import ArrowRight from "../../img/even/ArrowRight.svg";
import "../../front/index.css";
import "../../css/PaySuccess.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuantityById } from "../../components/paySuccess/paySuccessSlice";
import { unwrapResult } from "@reduxjs/toolkit";

function PSuccess() {
  const dispatch = useDispatch();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  console.log("ID:", id);
  const quantity = useSelector((state: any) => state.paySuccess.quantity);
  const dateUsed = useSelector((state: any) => state.paySuccess.dateUsed);
  const image = useSelector((state: any) => state.paySuccess.image);
  const [currentPage, setCurrentPage] = useState(1);
  const totalQuantity = useSelector((state: any) => state.paySuccess.quantity);
  const pageSize = 4;
  const totalPage = Math.ceil(totalQuantity / pageSize);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const namePaySuccess = useSelector(
    (state: any) => state.paySuccess.namePaySuccess
  );
  useEffect(() => {
    if (id) {
      dispatch(fetchQuantityById(id) as any)
        .then(unwrapResult)
        .catch((error: any) => {
          console.error("Error fetching quantity:", error);
        });
    }
  }, [dispatch, id]);

  const renderCards = (quantity: number) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentPageCards = Array.from({ length: quantity }).slice(
      startIndex,
      endIndex
    );

    let renderedCards = 0;
    return currentPageCards.map((_, index) => {
      if (renderedCards < pageSize) {
        renderedCards++;
        return (
          <Card
            key={index}
            cover={
              <Image
                src={image}
                preview={false}
                width={"40%"}
                style={{
                  margin: "20px 0px 0px 57px",
                }}
              />
            }
            style={{
              height: "273px",
              width: "200px",
              marginLeft: "15px",
            }}
          >
            <h5 className="H5PaySuccess">{namePaySuccess}</h5>
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
              Ngày sử dụng: {dateUsed}
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
        );
      }
      return null; // Không hiển thị card vượt quá số lượng trên trang
    });
  };

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
                      onClick={handlePrevPage}
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
                <Space
                  style={{
                    marginLeft: "-10px",
                    marginTop: "8px",
                    overflow: "hidden",
                    width: "103%",
                  }}
                  id="cardContainer"
                >
                  {renderCards(quantity)}
                </Space>

                <div className="row mt-2">
                  <div className="col-lg-6">
                    <p>Số lượng vé: {quantity} vé</p>
                  </div>
                  <div className="col-lg-6 text-end">
                    <p>
                      Trang {currentPage}/{totalPage}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-1">
                <div style={{ position: "absolute" }}>
                  <div className="btn-container-paySuccess-right">
                    <Button
                      className="btnRightPaySuccess"
                      style={{ width: "45px", height: "35px" }}
                      onClick={handleNextPage}
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
