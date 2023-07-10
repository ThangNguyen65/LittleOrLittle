import { Image, Typography } from "antd";
import imageHome from "../../img/bg.png";
import "../../front/index.css";
import CotPay from "../../img/Vector.svg";
import ImagePay from "../../img/pay/ImagePay.svg";
function PayBook() {
  return (
    <div className="bg_home">
      <Image
        src={imageHome}
        alt=""
        preview={false}
        width={"97%"}
        height={"44vw"}
        className="background_big_contact"
      />
      <div>
        <Typography.Text className="payTitle bold-park">
          Thanh toán
        </Typography.Text>
      </div>
      <div>
        <Image
          src={ImagePay}
          className="ImagePay"
          width={"260px"}
          height={"280px"}
          preview={false}
        />
      </div>
      <div className="MainBackGroundPay">
        <div className="BackgroundPayLeft">
          <div className="BgLevel3">
            <div className="BgLevel2">

            </div>
          </div>
        </div>
        <div>
          <Image src={CotPay} className="CotPay" width={"9%"} preview={false} />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default PayBook;
