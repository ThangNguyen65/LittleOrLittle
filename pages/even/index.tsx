import { Image, Typography } from "antd";
import imageHome from "../../img/bg.png";
import PaperEven from "../../img/even/Frame.png";
import GiayEventRight from "../../img/even/LaCoRight.svg";
import GiayEventLeft from "../../img/even/LaCoLeft.svg";
import "../../css/Even.css";
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
      <Image src={GiayEventRight} className="giayEvenRight" width={"30%"} />
      <Image src={GiayEventLeft} className="giayEvenLeft" width={"30%"} />
    </div>
  );
}

export default Even;
