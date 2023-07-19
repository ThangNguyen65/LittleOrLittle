import { Routes, Route } from "react-router-dom";
import Even from "../pages/even";
import Contact from "../pages/contact";
import Home from "../pages/home";
import PayBook from "../pages/pay/pay";
import MotaSuKien from "../pages/detailEvent";
import PSuccess from "../pages/paySucces";
function Routess() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sukien" element={<Even />} />
      <Route path="/lienhe" element={<Contact />} />
      <Route path="/pay" element={<PayBook />} />
      <Route path="/paySuccess" element={<PSuccess />} />
      <Route path="/event/:eventId" element={<MotaSuKien />} />
    </Routes>
  );
}

export default Routess;
