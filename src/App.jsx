import React from "react";
import styled from "styled-components";
import "./app.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Dining from "./pages/Dining";
import Gallery from "./pages/Gallery";
import Privacy from "./pages/Privacy";
import BookingPage from "./pages/BookingPage";
import RefundPolicy from "./pages/Refund";
import Risks from "./pages/Risks";
import Terms from "./pages/Terms";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import StatusPage from "./pages/PaymentStatus";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <Wrapper>

      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/dining" element={<Dining />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/refund" element={<RefundPolicy />} />
          <Route path="/risks" element={<Risks />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Route>
        <Route path="/status" element={<StatusPage />} />
      </Routes>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  -webkit-transition: all 0.4s ease 0s;
  -o-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
  min-height: 100dvh;
`;


export default App;
