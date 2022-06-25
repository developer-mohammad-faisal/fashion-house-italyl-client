import { useEffect, useState } from "react";
import "./styles/main.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import Footer from "./components/shared/Footer";
import Home from "./pages/Home/Home";
import Login from "./pages/shared/Login/Login";
import Navbar from "./pages/shared/Navbar/Navbar";
import Register from "./pages/shared/Register/Register";
import BrandInfo from "./components/shared/BrandInfo";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import RefundPolicy from "./components/Home/RefundPolicy/RefundPolicy";
import Terms from "./components/Home/Terms/Terms";
import Privacy from "./components/Home/Privacy/Privacy";
import NotFoundError from "./pages/NotFoundError/NotFoundError";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Faq from "./components/Home/Faq/Faq";
import PopUp from "./components/shared/PopUp";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  const [showPopUp, setShowPopUp] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowPopUp(true);
    }, 1000);
  }, []);
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <PopUp showPopUp={showPopUp} setShowPopUp={setShowPopUp} />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/refund" element={<RefundPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="*" element={<NotFoundError />} />
          </Routes>
          <BrandInfo />
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
