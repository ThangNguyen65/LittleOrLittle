import { Routes, Route } from "react-router-dom";
import Even from "../pages/even";
import Contact from "../pages/contact";
import Home from "../pages/home";
import PayBook from "../pages/pay/pay";

function Routess() {
  return (
    <Routes>
      <Route path="/trangchu" element={<Home />} />
      <Route path="/sukien" element={<Even />} />
      <Route path="/lienhe" element={<Contact />} />
      <Route path="/pay" element={<PayBook />} />
    </Routes>
  );
}

export default Routess;
