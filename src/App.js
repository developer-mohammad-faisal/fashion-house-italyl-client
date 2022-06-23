import { useEffect } from "react";
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
import NotFoundError from "./pages/NotFoundError/NotFoundError";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
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
