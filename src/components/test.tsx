import React, { useState } from "react";
import { Button, Input } from "antd";
import dayjs from "dayjs";
import "firebase/firestore";
import { db } from "./firebase";

const Home = () => {
  const [quantity, setQuantity] = useState("");
  const [dateUsed, setDateUsed] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleDateChange = (date: any) => {
    setDateUsed(dayjs(date).format("DD/MM/YYYY"));
  };

  const handleFormSubmit = () => {
    const userData = {
      quantity,
      dateUsed,
      fullName,
      phoneNumber,
      email,
    };

    db.collection("TicketBook")
      .add(userData)
      .then((docRef) => {
        console.log("Đã thêm dữ liệu thành công:", docRef.id);
        // Xử lý thành công, có thể thực hiện các hành động khác ở đây
      })
      .catch((error) => {
        console.error("Lỗi khi thêm dữ liệu:", error);
        // Xử lý lỗi nếu cần
      });
  };

  return (
    <div>
      <Input
        placeholder="Số lượng vé"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />

      <input
        type="date"
        className="mt-3 mb-5 ms-5"
        onChange={handleDateChange}
      />

      <Input
        placeholder="Họ và tên"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />

      <Input
        placeholder="Số điện thoại"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />

      <Input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Button onClick={handleFormSubmit}>Đặt vé</Button>
    </div>
  );
};

export default Home;
