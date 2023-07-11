import { Image, Typography } from "antd";
import React from "react";
import imageHome from "../../img/bg.png";
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
        height={"44vw"}
        className="background_big_pay_success"
      />
      <div>
        <Typography.Text className="TitlePSuccess bold-park">
          Thanh Toán Thành Công
        </Typography.Text>
      </div>
    </div>
  );
}

export default PSuccess;
