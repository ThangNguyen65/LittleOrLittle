import { Button, Image, Input, Modal, Typography } from "antd";
import imageHome from "../../img/bg.png";
import "../../front/index.css";
import ImageContact from "../../img/contact/ImageContact.svg";
import TextArea from "antd/es/input/TextArea";
import addressContact from "../../img/contact/adressContact.svg";
import mailContact from "../../img/contact/mailContact.svg";
import PhoneContact from "../../img/contact/phonecontact.svg";
import { useState } from "react";
import { addData } from "../../api/contact";
import { useDispatch } from "react-redux";
function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const handleAddData = () => {
    if (name && email && phone && address && description) {
      const newData = {
        name,
        phone: parseInt(phone),
        email,
        address,
        description,
      };
      dispatch(addData(newData as any) as any);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
    setDescription("");
  };
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
        <Typography.Text className="contactTitle bold-park">
          Liên hệ
        </Typography.Text>
      </div>
      <div>
        <Image
          src={ImageContact}
          width={"220px"}
          height={"320px"}
          className="ImageContact"
          preview={false}
        />
      </div>
      {/* bg_1 */}
      <div className="bg_baoboc">
        <div className="bgLevel3">
          <div className="bgLevel2">
            <Typography className="BackGroundInText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse ac mollis justo. Etiam volutpat tellus quis risus
              volutpat, ut posuere ex facilisis.
            </Typography>
            <div className="NameEmailContact">
              <Input
                className="NameContact"
                placeholder="Tên"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <Input
                className="EmailContact"
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="PhoneAddressContact">
              <Input
                className="PhoneContact"
                placeholder="Số điện thoại"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <Input
                className="AddressContact"
                placeholder="Địa chỉ"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div>
              <TextArea
                className="Message"
                rows={4}
                placeholder="Lời nhắn"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div>
              <Button className="bold-park btn_Contact" onClick={handleAddData}>
                Gửi liên hệ
              </Button>
              <div className="bg_btnContactBottom"></div>
              <Modal
                style={{
                  margin: "160px 0px 0px 340px",
                  padding: "0px 100px 0px",
                }}
                onCancel={handleCloseModal}
                open={isModalOpen}
                footer={null}
                closeIcon={
                  <span
                    style={{
                      color: "orange",
                      fontSize: "30px",
                      marginTop: "-8px",
                    }}
                  >
                    ×
                  </span>
                }
              >
                <div style={{ backgroundColor: "#fff", marginTop: "10px" }}>
                  <p>
                    Gửi liên hệ thành công.
                    <br /> Vui lòng kiên nhẫn đợi phản hồi từ <br /> chúng tôi,
                    bạn nhé!
                  </p>
                </div>
              </Modal>
            </div>
          </div>
        </div>
      </div>
      <div className="bgLevel4"></div>
      <div className="bg_bao_boc_phu_1">
        <div className="bgLevel3Phu1">
          <div className="bgLevel2Phu1">
            <div
              style={{
                display: "flex",
              }}
            >
              <Image
                src={addressContact}
                preview={false}
                className="imageAddressContact"
                width={"14%"}
              />
              <div className="TextAddressName">
                <Typography.Text className="TextAddressTitle">
                  Địa chỉ:
                </Typography.Text>
                <br />
                <Typography className="NameAddress">
                  86/33 Âu Cơ, Phường 9, Quận Tân Bình, TP. Hồ Chí Minh
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bgLevel4Phu1"></div>
      <div className="bg_bao_boc_phu_2">
        <div className="bgLevel3Phu2">
          <div className="bgLevel2Phu2">
            <div
              style={{
                display: "flex",
              }}
            >
              <Image
                src={mailContact}
                preview={false}
                className="imageAddressContact"
                width={"12%"}
              />
              <div className="TextEmailName">
                <Typography.Text className="TextEmailTitle">
                  Email:
                </Typography.Text>
                <br />
                <Typography className="NameEmail">
                  investigate@your-site.com
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bgLevel4Phu2"></div>
      <div className="bg_bao_boc_phu_3">
        <div className="bgLevel3Phu3">
          <div className="bgLevel2Phu3">
            <Image
              src={PhoneContact}
              className="imageAddressContact"
              preview={false}
              width={"12%"}
            />
            <div className="TextPhoneName">
              <Typography.Text className="TextPhoneTitle">
                Điện thoại
              </Typography.Text>
              <br />
              <Typography className="NamePhone">+84 145 689 798</Typography>
            </div>
          </div>
        </div>
      </div>
      <div className="bgLevel4Phu3"></div>
    </div>
  );
}

export default Contact;
