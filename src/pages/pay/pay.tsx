import { Button, DatePicker, Image, Modal, Typography } from "antd";
import imageHome from "../../img/bg.png";
import "../../front/index.css";
import IconsDate from "../../img/home/date.svg";
import CotPay from "../../img/Vector.svg";
import ImagePay from "../../img/pay/ImagePay.svg";
import KhungBgRed from "../../img/pay/KhungPayMainBgRed.svg";
import DuongVienChamTrangNho from "../../img/pay/DuongVienChamTrangNho.svg";
import { useState } from "react";
import dayjs from "dayjs";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addData, selectLoading, selectError } from "../../api/pay/actionPay";
import { CloseCircleOutlined } from "@ant-design/icons";
import EmojiSadErrorPay from "../../img/pay/SadEmoji.svg";
function PayBook() {
  const location = useLocation();
  const { state } = location;
  const navigate = useNavigate();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const [cardNumber, setCardNumber] = useState("");
  const [formattedCardNumber, setFormattedCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCVV] = useState("");
  const [maskedCVV, setMaskedCVV] = useState("");
  const dispatch = useDispatch();
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const handleDateChange = (date: any) => {
    const formattedDate = dayjs(date).format("DD/MM/YYYY");
    setExpirationDate(formattedDate);
  };
  const handleAddData = () => {
    if (!cardNumber || !cardHolder || !expirationDate || !cvv) {
      setErrorModalVisible(true);
      return;
    }
    // const cardCVV = parseInt(cvv);
    const ticketData = {
      packageType: state.packageType,
      quantity: state.quantity,
      dateUsed: state.dateUsed,
      fullName: state.fullName,
      phoneNumber: state.phoneNumber,
      email: state.email,
      price: state.quantity * 120,
      cardNumber,
      cardHolder,
      expirationDate,
      cvv: parseInt(cvv),
      image:
        "https://firebasestorage.googleapis.com/v0/b/little-and-little-29a59.appspot.com/o/QRCodePaySuccess.svg?alt=media&token=3ca529ef-59ba-4781-b45f-842b385345c9",
      namePaySuccess: "ALT20210501",
    };

    dispatch(addData(ticketData) as any)
      .unwrap()
      .then((id: string) => {
        setCardNumber("");
        setCardHolder("");
        setExpirationDate("");
        setCVV("");
        navigate(`/paySuccess?id=${id}&quantity=${state.quantity}`);
      })
      .catch((error: any) => {
        setErrorModalVisible(true);
      });
  };
  // thay đổi số thẻ và CVV
  const formatCardNumber = (value: string) => {
    const trimmedValue = value.replace(/\s/g, "");
    const groups = trimmedValue.match(/.{1,4}/g);
    const formattedValue = groups ? groups.join(" ") : trimmedValue;
    setFormattedCardNumber(formattedValue);
  };
  const maskCVV = (value: string) => {
    const maskedValue = value.replace(/\d/g, "*");
    setMaskedCVV(maskedValue);
  };
  // kiểm tra người dungf nhập số
  const handleCardNumberKeyPress = (e: any) => {
    const keyCode = e.which || e.keyCode;
    const isValidKey = (keyCode >= 48 && keyCode <= 57) || keyCode === 32;
    if (!isValidKey) {
      e.preventDefault();
    }
  };

  const handleCVVKeyPress = (e: any) => {
    const keyCode = e.which || e.keyCode;
    const isValidKey = keyCode >= 48 && keyCode <= 57;
    if (!isValidKey) {
      e.preventDefault();
    }
  };
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
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
                    value={(state.quantity * 120).toFixed(3) + " " + "vnđ"}
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
                  <input
                    type="text"
                    className="InPutNumberCard"
                    value={formattedCardNumber}
                    maxLength={19}
                    onChange={(e) => {
                      setCardNumber(e.target.value);
                      formatCardNumber(e.target.value);
                    }}
                    onKeyPress={handleCardNumberKeyPress}
                  />
                </div>
                <div>
                  <h6 className="mt-1 H6NumberCard">Họ tên chủ thẻ</h6>
                  <input
                    type="text"
                    className="InPutNamePay"
                    value={cardHolder}
                    onChange={(e) => setCardHolder(e.target.value)}
                  />
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
                      value={expirationDate}
                      onChange={(e) => setExpirationDate(e.target.value)}
                      disabled
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
                  <input
                    type="text"
                    className="InputCVVCVC"
                    value={maskedCVV}
                    maxLength={3}
                    onChange={(e) => {
                      setCVV(e.target.value);
                      maskCVV(e.target.value);
                    }}
                    onKeyPress={handleCVVKeyPress}
                  />
                </div>
                <div>
                  <Button
                    className="bold-park btn_Button_Pay"
                    onClick={handleAddData}
                  >
                    Thanh Toán
                  </Button>
                  <div className="bg_btnContactBottom_pay"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="bgLevel4Phu3PayRight"></div>
        </div>
      </div>
      <Modal
        title={<span className="BgModalErrorPay"></span>}
        open={errorModalVisible}
        className="modalErrorPay"
        onCancel={() => setErrorModalVisible(false)}
        footer={null}
        style={{ paddingTop: 0 }}
        closeIcon={
          <CloseCircleOutlined
            style={{
              opacity: "0",
            }}
          />
        }
      >
        <Image
          src={EmojiSadErrorPay}
          preview={false}
          className="EmojiSadPay"
          style={{
            margin: "-140px 0px 0px 90px",
            width: "70px",
          }}
        />
        <p
          style={{
            marginTop: "-30px",
          }}
        >
          Hình như đã có lỗi xảy ra khi thanh <br /> toán...
          <br /> Vui lòng kiểm tra lại thông tin liên hệ,
          <br /> thông tin thẻ và thử lại.
        </p>
      </Modal>
    </div>
  );
}

export default PayBook;
