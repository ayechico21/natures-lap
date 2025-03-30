import React, { useState } from "react";
import styled from "styled-components";
import { User, Mail, Phone, CheckCircle, XCircle } from "lucide-react";
import Popup from "../components/PopUp";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
  background: linear-gradient(135deg, #f0f0f0, #ffffff);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  transition: 0.3s;

  &:hover {
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 60px 15px;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 60px;

  h1 {
    font-size: 55px;
    color: #2c3e50;
    margin-bottom: 15px;
  }

  p {
    font-size: 22px;
    color: #7f8c8d;
  }
`;

const InfoSection = styled.div`
  background: #f5f5f5;
  padding: 50px;
  border-radius: 16px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 35px;
  }
`;

const Form = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  width: 100%;
  background: white;
  border-radius: 16px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  padding: 70px;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-10px);
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    padding: 40px;
  }
`;

const Label = styled.label`
  font-size: 18px;
  color: #555;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 18px;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 16px;
  transition: 0.3s;

  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 10px rgba(52, 152, 219, 0.3);
  }
`;

const SubtleError = styled.span`
  color: #e74c3c;
  font-size: 14px;
  opacity: 0.8;
  position: absolute;
  top: 100%;
  left: 0;
  white-space: nowrap;
`;

const Summary = styled.div`
  background: #f9f9f9;
  padding: 50px;
  border-radius: 16px;
  margin-top: 70px;
  width: 100%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: 0.3s;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    font-size: 32px;
    color: #2c3e50;
    margin-bottom: 25px;
  }

  p {
    font-size: 20px;
    color: #555;
  }
`;

const BookButton = styled.button`
  background: #27ae60;
  color: white;
  border: none;
  padding: 18px 50px;
  font-size: 22px;
  cursor: pointer;
  border-radius: 12px;
  transition: 0.3s;
  margin-top: 40px;

  &:hover {
    background: #219150;
    box-shadow: 0 10px 25px rgba(39, 174, 96, 0.4);
    transform: translateY(-5px);
  }
`;

const BookingPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [popup, setPopup] = useState(null);


  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const validatePhone = (phone) => /^[6-9]\d{9}$/.test(phone);

  const handleBooking = () => {
    const emailValid = validateEmail(email);
    const phoneValid = validatePhone(phone);
  
    setIsEmailValid(emailValid);
    setIsPhoneValid(phoneValid);
  
    if (emailValid && phoneValid) {
      setPopup({
        title: "Booking",
        content: `Thank you, ${name}! Kindly get in touch with us over phone, whatsapp or email for booking related inquiry.`,
      });
      setEmail("");
      setName("");
      setPhone("");
    } else {
      setPopup({
        title: "Booking Failed",
        content: "Please enter a valid email and phone number.",
      });
    }
  };
  

  return (
    <Container>
      <Header>
        <h1>Book Your Stay at Nature's Lap Resort</h1>
        <p>Escape the ordinary and embrace tranquility!</p>
      </Header>

      <InfoSection>
        <div>
          <p><CheckCircle size={24} color="#27ae60" /> Check-in: 12:00 PM</p>
          <p><CheckCircle size={24} color="#27ae60" /> Check-out: 11:00 AM</p>
          <p><XCircle size={24} color="#e74c3c" /> Free Cancellation: Up to 48 hours before arrival</p>
        </div>
      </InfoSection>

      <Form>
        <Label>
          <User size={24} /> Name:
          <Input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </Label>
        
        <Label>
          <Mail size={24} /> Email:
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          {!isEmailValid && <SubtleError>Invalid email format</SubtleError>}
        </Label>
        
        <Label>
          <Phone size={24} /> Phone: (+91)
          <Input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          {!isPhoneValid && <SubtleError>Invalid Indian phone number (10 digits)</SubtleError>}
        </Label>
      </Form>

      <BookButton onClick={handleBooking}>Book Now</BookButton>
      {popup && (
  <Popup
    title={popup.title}
    content={popup.content}
    onClose={() => setPopup(null)}
  />
)}

    </Container>
  );
};

export default BookingPage;
