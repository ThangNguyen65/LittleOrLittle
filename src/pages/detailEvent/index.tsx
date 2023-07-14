import React, { useEffect } from "react";
import { Image, Typography } from "antd";
import imageHome from "../../img/bg.png";
import PaperEven from "../../img/detailEvent/DetailEventBg.png";
import GiayEventRight from "../../img/even/LaCoRight.svg";
import GiayEventLeft from "../../img/even/LaCoLeft.svg";
import "../../css/detailEven.css";
import IconsCalendar from "../../img/even/calendar.png";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchData,
  selectData,
  selectError,
  selectLoading,
} from "../../components/action";
import { useParams } from "react-router-dom";
function MotaSuKien() {
  const { eventId } = useParams();
  const data = useSelector(selectData);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  const eventData = data.find((item) => item.id === eventId);

  if (!eventData) {
    return <div>Event not found</div>;
  }
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
          className="PaperEvenDetail"
          width={"1270px"}
          height={"497px"}
          alt=""
        />
      </div>
      <Typography.Text className="bold-park TitleEvenDetail">
        {eventData.name}
      </Typography.Text>
      <Image
        src={GiayEventRight}
        className="giayEvenDetailRight"
        width={"29.4%"}
        preview={false}
      />
      <Image
        src={GiayEventLeft}
        className="giayEvenDetailLeft"
        width={"30%"}
        preview={false}
      />
      <div className="Bgbaoboc_detailEven">
        <div className="bgLevel3DetailEvent">
          <div className="bgLevel2DetailEvent">
            <div className="PdDetailEven">
              <div className="row">
                <div className="col-lg-3">
                  <Image
                    src={eventData.image}
                    width={"120%"}
                    style={{ borderRadius: "10px" }}
                    preview={false}
                  />

                  <div className="DateEvensDetail">
                    <Image
                      src={IconsCalendar}
                      preview={false}
                      style={{
                        marginTop: "0px",
                        width: "18px",
                      }}
                    />
                    <div>
                      <span className="DateEvenDetail ms-1">
                        {eventData.date}
                      </span>
                    </div>
                  </div>
                  <Typography.Text className="DescriptionEvenDetail">
                    {eventData.description}
                  </Typography.Text>
                  <h1 className="PriceEvenDetail">
                    {eventData.price.toFixed(3)} VNĐ
                  </h1>
                </div>
                <div className="col" style={{ marginLeft: "50px" }}>
                  <span className="Description1">
                    <span style={{ color: "orange", fontSize: "20px" }}>
                      {eventData.description1.slice(0, 11)}
                    </span>
                    {eventData.description1.slice(11)}
                  </span>
                </div>

                <div className="col" style={{ width: "180px" }}>
                  <Image
                    src={eventData.image1}
                    preview={false}
                    style={{ borderRadius: "10px" }}
                  />
                  <span className="Description2">{eventData.description2}</span>
                </div>
                <div className="col" style={{ width: "180px" }}>
                  <span className="Description3">
                    {eventData.description3}
                    <Image
                      src={eventData.image2}
                      preview={false}
                      style={{ borderRadius: "10px" }}
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MotaSuKien;
