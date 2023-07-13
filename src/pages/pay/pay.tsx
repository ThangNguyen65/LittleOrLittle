import { Button, DatePicker, Image, Typography } from "antd";
import imageHome from "../../img/bg.png";
import "../../front/index.css";
import IconsDate from "../../img/home/date.svg";
import CotPay from "../../img/Vector.svg";
import ImagePay from "../../img/pay/ImagePay.svg";
import KhungBgRed from "../../img/pay/KhungPayMainBgRed.svg";
import DuongVienChamTrangNho from "../../img/pay/DuongVienChamTrangNho.svg";
import { useState } from "react";
import dayjs from "dayjs";
import { Link, useLocation } from "react-router-dom";
import { db } from "../../components/firebase";
function PayBook() {
  const location = useLocation();
  const { state } = location;

  const [date, setDate] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCVV] = useState("");
  const handleDateChange = (date: any) => {
    const formattedDate = dayjs(date).format("DD/MM/YYYY");
    setDate(formattedDate);
  };

  const handleFormSubmit = () => {
    const userData = {
      packageType: state.packageType,
      quantity: state.quantity,
      dateUsed: state.dateUsed,
      fullName: state.fullName,
      phoneNumber: state.phoneNumber,
      email: state.email,
      price: state.quantity * 120000,
      cardNumber,
      cardHolder,
      expirationDate,
      cvv,
    };

    db.collection("TicketBook")
      .add(userData)
      .then((docRef) => {
        console.log("Đã thêm dữ liệu thành công:", docRef.id);
        // Xử lý thành công, có thể thực hiện các hành động khác ở đây

        // Xóa dữ liệu sau khi đặt vé thành công
        setDate("");

        // Điều hướng đến trang thanh toán thành công
        // Thay thế '/paySuccess' bằng đường dẫn đến trang thanh toán thành công của bạn
        window.location.href = "/paySuccess";
      })
      .catch((error) => {
        console.error("Lỗi khi thêm dữ liệu:", error);
      });
  };
  return (
    <div className="bg_home">
      <Image
        src={imageHome}
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
          height={"320px"}
          preview={false}
        />
      </div>
      <div className="MainBackGroundPay">
        <div className="BackgroundPayLeft">
          <div className="BgLevel3Left">
            <div className="BgLevel2Left">
              <div>
                <Image
                  src={KhungBgRed}
                  preview={false}
                  width={"40%"}
                  className="KhungBgRedLeft"
                />
                <Image
                  src={DuongVienChamTrangNho}
                  width={"38.9%"}
                  className="DuongVienChamTrangNhoLeft"
                  preview={false}
                />
                <Typography.Text className="TitlePayBgRedLeft bold-park">
                  VÉ CỦA BẠN - VÉ GIA ĐÌNH
                </Typography.Text>
              </div>
              <div className="PriceQuantityDate">
                <div>
                  <h6 className="h6Pay">Số tiền thành toán</h6>
                  <input
                    type="text"
                    className="PricePay"
                    value={state.quantity * 120000}
                    readOnly
                  />
                </div>
                <div>
                  <h6 className="h6PayQT">Số lượng vé</h6>
                  <input
                    type="text"
                    className="quantityPay"
                    value={state.quantity}
                    readOnly
                  />
                  <span className="ms-2">vé</span>
                </div>
                <div>
                  <h6 className="h6PayDate">Ngày sử dụng</h6>
                  <input
                    type="text"
                    className="DatePay"
                    value={state.dateUsed}
                    readOnly
                  />
                </div>
              </div>
              <div className="InfoUserPay">
                <h6 className="H6InfoUserPay">Thông tin liên hệ</h6>
                <input
                  type="text"
                  className="InPutInfoUser"
                  value={state.fullName}
                  readOnly
                />
              </div>
              <div className="PhonePay">
                <h6 className="H6PhonePay">Điện thoại</h6>
                <input
                  type="text"
                  className="InPutPhonePay"
                  value={state.phoneNumber}
                  readOnly
                />
              </div>
              <div className="EmailPay">
                <h6 className="H6EmailPay">Email</h6>
                <input
                  type="text"
                  className="InPutEmailPay"
                  value={state.email}
                  readOnly
                />
              </div>
            </div>
          </div>
          <div className="bgLevel4Phu3PayLeft"></div>
        </div>
        <div>
          <Image
            src={CotPay}
            className="CotPay"
            width={"9.7%"}
            preview={false}
          />
        </div>
        <div className="BackgroundPayRight">
          <div className="BgLevel3Right">
            <div className="BgLevel2Right">
              <div>
                <Image
                  src={KhungBgRed}
                  preview={false}
                  width={"70%"}
                  className="KhungBgRedRight"
                />
                <Image
                  src={DuongVienChamTrangNho}
                  width={"68%"}
                  className="DuongVienChamTrangNhoRight"
                  preview={false}
                />
                <Typography.Text className="TitlePayBgRedRight bold-park">
                  THÔNG TIN THANH TOÁN
                </Typography.Text>
              </div>
              <div className="InfoPay">
                <div>
                  <h6 className="mt-1 H6NumberCard">Số thẻ</h6>
                  <input type="text" className="InPutNumberCard" />
                </div>
                <div>
                  <h6 className="mt-1 H6NumberCard">Họ tên chủ thẻ</h6>
                  <input type="text" className="InPutNamePay" />
                </div>
                <div>
                  <h6 className="mt-1 H6NumberCard">Ngày hết hạn</h6>
                  <div
                    style={{
                      display: "flex",
                    }}
                  >
                    <input
                      type="text"
                      className="InputExpirationDate"
                      value={date}
                    />
                    <div className="button-container-date">
                      <Button className="btn_bg_date_pay">
                        <Image
                          src={IconsDate}
                          className="image-with-shadow"
                          preview={false}
                          width={30}
                          height={22}
                          style={{
                            margin: "0px 0px 0px -28.7px",
                            position: "absolute",
                          }}
                        />
                      </Button>

                      <DatePicker
                        picker="date"
                        className="btn_date_pay"
                        onChange={handleDateChange}
                        style={{ opacity: "0" }}
                      />
                    </div>
                    <div className="background-div-date-pay"></div>
                  </div>
                </div>
                <div>
                  <h6 className="mt-1 H6NumberCard">CVV/CVC</h6>
                  <input type="text" className="InputCVVCVC" />
                </div>
                <div>
                  <Link to={`/paySuccess`}>
                    <Button className="bold-park btn_Button_Pay">
                      Thanh Toán
                    </Button>
                  </Link>
                  <div className="bg_btnContactBottom_pay"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="bgLevel4Phu3PayRight"></div>
        </div>
      </div>
    </div>
  );
}

export default PayBook;
