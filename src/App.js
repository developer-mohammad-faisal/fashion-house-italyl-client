import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/shared/Footer";
import Home from "./pages/Home/Home";
import Navbar from "./pages/shared/Navbar/Navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
