import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./components/navbar.jsx";
import HomePage from "./components/homepage.jsx";
import Footer from "./components/footer.jsx";
import Wallet from "./components/walletsection.jsx";
import AboutUs from "./components/aboutus.jsx";
import FindJob from "./components/findjob.jsx";
import HireSomeone from "./components/hiresomeone.jsx";

function MainRouter() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/find-job" element={<FindJob />} />
        <Route path="/hire-someone" element={<HireSomeone />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/wallet" element={<Wallet />} />
      </Routes>
      <Footer />
    </Router>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainRouter />
  </StrictMode>
);