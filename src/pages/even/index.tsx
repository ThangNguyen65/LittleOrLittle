import { Card, Image, Typography } from "antd";
import imageHome from "../../img/bg.png";
import PaperEven from "../../img/even/Frame.png";
import GiayEventRight from "../../img/even/LaCoRight.svg";
import GiayEventLeft from "../../img/even/LaCoLeft.svg";
import ImageEven from "../../img/even/ImageEven.svg";
import "../../css/Even.css";
import Meta from "antd/es/card/Meta";
function Even() {
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
          height={"430px"}
          alt=""
        />
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
        width={"30%"}
        preview={false}
      />
      <div className="PositionCard">
        <Card
          cover={<Image src={ImageEven} preview={false} />}
          className="CardEven"
        >
          <Typography.Title className="Title" style={{
            fon
          }}>Sự kiện 1</Typography.Title>
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </div>
    </div>
  );
}

export default Even;
