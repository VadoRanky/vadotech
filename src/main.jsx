import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
// import Contact from "./Contact.jsx";
import About from "./About.jsx";
import Product from "./Product.jsx";
import Service from "./Service.jsx";
import Contact from "./Contact.jsx";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="About" element={<About />} />
      <Route path="Product" element={<Product />} />
      <Route path="Service" element={<Service />} />
      <Route path="Contact" element={<Contact />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
);
