import { Button, Card, Col, Image, Row, Typography } from "antd";
import imageHome from "../../img/bg.png";
import PaperEven from "../../img/even/Frame.png";
import GiayEventRight from "../../img/even/LaCoRight.svg";
import GiayEventLeft from "../../img/even/LaCoLeft.svg";
import "../../css/Even.css";
import IconsCalendar from "../../img/even/calendar.png";
import ArrowLeft from "../../img/even/ArrowLeft.svg";
import ArrowRight from "../../img/even/ArrowRight.svg";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchData,
  selectData,
  selectError,
  selectLoading,
} from "../../api/action";
import { AppDispatch } from "../../api/store";
import { Link } from "react-router-dom";

function Even() {
  const data = useSelector(selectData);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch: AppDispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(data.length / 4) - 1) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const startIdx = currentPage * 4;
  const endIdx = startIdx + 4;

  return (
    <div className="bg_home">
      <Image
        src={imageHome}
        alt=""
        preview={false}
        width={"97%"}
        height={"44vw"}
        className="background_big_even"
      />
      <div>
        <img
          src={PaperEven}
          className="PaperEven"
          width={"1170px"}
          height={"497px"}
          alt=""
        />
      </div>
      <div style={{ position: "absolute" }}>
        <div className="btn-container-even">
          <Button
            className="btnEvenLeft"
            style={{ width: "45px", height: "35px" }}
            onClick={handlePrevPage}
          >
            <Image
              src={ArrowLeft}
              preview={false}
              className="ArrowLeft"
              width={"30px"}
            />
          </Button>
          <div className="BtnArrowLeftBottom"></div>
        </div>
      </div>
      <div style={{ position: "absolute" }}>
        <div className="btn-container-even">
          <Button
            className="btnEvenRight"
            style={{ width: "45px", height: "35px" }}
            onClick={handleNextPage}
          >
            <Image
              src={ArrowRight}
              preview={false}
              className="ArrowRight"
              width={"30px"}
            />
          </Button>
          <div className="BtnArrowRightBottom"></div>
        </div>
      </div>
      <Typography.Text className="bold-park TitleEven">
        Sự kiện nổi bật
      </Typography.Text>
      <Image
        src={GiayEventRight}
        className="giayEvenRight"
        width={"30%"}
        preview={false}
      />
      <Image
        src={GiayEventLeft}
        className="giayEvenLeft"
        width={"27%"}
        preview={false}
      />

      <div className="PositionCard">
        <div className="container">
          <Row gutter={[16, 16]}>
            {data &&
              data.slice(startIdx, endIdx).map((item, index) => (
                <Col key={item.id} span={5}>
                  <Card
                    key={item.id}
                    cover={<Image src={item.image} preview={false} />}
                    className="CardEven"
                  >
                    <div>
                      <h2
                        className="Title"
                        style={{
                          fontSize: "20px",
                        }}
                      >
                        {item.name}
                      </h2>
                    </div>
                    <Typography.Text className="DescriptionEven">
                      {item.description}
                    </Typography.Text>
                    <div className="DateEvens">
                      <Image
                        src={IconsCalendar}
                        preview={false}
                        style={{
                          marginTop: "0px",
                          width: "18px",
                        }}
                      />
                      <div>
                        <span className="DateEven">{item.date}</span>
                      </div>
                    </div>
                    <h1 className="PriceEven">{item.price.toFixed(3)} VNĐ</h1>
                    <div>
                      <Link to={`/event/${item.id}`}>
                        <Button className="btnEven">Xem chi tiết</Button>
                        <div className="btnBottomBgEven"></div>
                      </Link>
                    </div>
                  </Card>
                </Col>
              ))}
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Even;
