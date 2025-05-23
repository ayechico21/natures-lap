import { useState, useEffect } from "react";
import styled from "styled-components";
import Popup from "../components/PopUp";
import {
  User,
  Mail,
  Phone,
  CheckCircle,
  XCircle,
  Calendar,
} from "lucide-react";

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
  overflow-x: hidden;

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

const Select = styled.select`
  width: 100%;
  padding: 18px;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 16px;
  background-color: white;
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
  &:disabled {
    background: grey;
    cursor: initial;
    transform: none;
    box-shadow: none;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const BookingPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [amount, setAmount] = useState(3200);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [popup, setPopup] = useState(null);
  const [specialRequest, setSpecialRequest] = useState("");

  useEffect(() => {
    if (checkIn && checkOut) {
      const days =
        (new Date(checkOut).getTime() - new Date(checkIn).getTime()) /
        (1000 * 60 * 60 * 24);
      if (days >= 1) {
        setAmount(rooms * 3200 * days);
      } else {
        setAmount(0); // Invalid date range
      }
    } else {
      setAmount(0);
    }
  }, [checkIn, checkOut, rooms]);

  useEffect(() => {
    const requiredRoomsForAdults = Math.ceil(adults / 2);
    const requiredRoomsForChildren = Math.ceil(children / 1);
    const minRoomsNeeded = Math.max(
      requiredRoomsForAdults,
      requiredRoomsForChildren
    );
    setRooms(minRoomsNeeded || 1);
  }, [adults, children]);

  useEffect(() => {
    if (checkIn) {
      const nextDay = new Date(checkIn);
      nextDay.setDate(nextDay.getDate() + 1);
      setCheckOut(nextDay.toISOString().split("T")[0]);
    } else {
      setCheckOut("");
    }
  }, [checkIn]);

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const validatePhone = (phone) => /^[6-9]\d{9}$/.test(phone);

  const handleBooking = async () => {
    const emailValid = validateEmail(email);
    const phoneValid = validatePhone(phone);

    setIsEmailValid(emailValid);
    setIsPhoneValid(phoneValid);

    if (!emailValid || !phoneValid || !name || !checkIn || !checkOut) {
      setPopup({
        title: "Booking Failed",
        content: "Please enter all required fields with valid details.",
      });
      return;
    }

    const requiredRoomsForAdults = Math.ceil(adults / 2);
    const requiredRoomsForChildren = Math.ceil(children / 1);
    const minRoomsNeeded = Math.max(
      requiredRoomsForAdults,
      requiredRoomsForChildren
    );

    if (rooms < minRoomsNeeded) {
      setPopup({
        title: "Booking Failed",
        content: `You need at least ${minRoomsNeeded} room(s) for ${adults} adult(s) and ${children} child(ren).`,
      });
      return;
    }

    const daysBetween =
      (new Date(checkOut).getTime() - new Date(checkIn).getTime()) /
      (1000 * 60 * 60 * 24);
    if (daysBetween < 1) {
      setPopup({
        title: "Booking Failed",
        content: "Check-out must be at least one day after check-in.",
      });
      return;
    }

    const totalAmount = amount + (amount * 12) / 100;

    try {
      const checkinDate = new Date(checkIn).toISOString().split("T")[0];
      const checkoutDate = new Date(checkOut).toISOString().split("T")[0];
      const payload = {
        amount: totalAmount,
        email: email,
        firstName: name.split(" ")[0] || name,
        lastName: name.split(" ")[1] || "",
        street: "Nature's Lap Resort",
        city: "Ballari",
        state: "Karnataka",
        zip: "583101",
        phone,
        checkIn: checkinDate,
        checkOut: checkoutDate,
        adults,
        children,
        rooms,
        specialRequest,
        UDF01: "",
        UDF02: "",
        UDF03: "",
        UDF04: "",
        UDF05: "",
        UDF06: "",
        UDF07: "",
        UDF08: "",
        UDF09: "",
        UDF10: "",
      };
      console.log("payload", payload);

      const res = await fetch(
        "https://natureslap-60024597013.development.catalystserverless.in/server/natureslap_function/initiate_payment",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify(payload),
        }
      );
       /* const res = await fetch(
        " http://localhost:3000/server/natureslap_function/initiate_payment",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
         
          body: JSON.stringify(payload),
        }
      );  */

      const result = await res.json();
      console.log("result: ", result);
      // Safely snapshot the JSON result:
      const resultSnapshot = JSON.parse(JSON.stringify(result));
      console.log("Result snapshot:", resultSnapshot);

      if (result.success && result.gatewayURL) {
        const form = document.createElement("form");
        form.method = "POST";
        form.action = result.gatewayURL;
        form.target = "_blank";

        const merchantId = document.createElement("input");
        merchantId.type = "hidden";
        merchantId.name = "MerchantId";
        merchantId.value = result.data.MerchantId;
        form.appendChild(merchantId);

        const terminalId = document.createElement("input");
        terminalId.type = "hidden";
        terminalId.name = "TerminalId";
        terminalId.value = result.data.TerminalId;
        form.appendChild(terminalId);

        const bankId = document.createElement("input");
        bankId.type = "hidden";
        bankId.name = "BankId";
        bankId.value = result.data.BankId;
        form.appendChild(bankId);

        const encData = document.createElement("input");
        encData.type = "hidden";
        encData.name = "EncData";
        encData.value = result.EncData;
        form.appendChild(encData);

        document.body.appendChild(form);
        form.submit();
      } else {
        setPopup({
          title: "Payment Failed",
          content: result.error || "Unable to initiate payment.",
        });
      }
    } catch (err) {
      console.error(err);
      setPopup({
        title: "Server Error",
        content: "Something went wrong while connecting to payment gateway.",
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
          <p>
            <CheckCircle size={24} color="#27ae60" /> Check-in: 12:00 PM
          </p>
          <p>
            <CheckCircle size={24} color="#27ae60" /> Check-out: 11:00 AM
          </p>
          <p>
            <XCircle size={24} color="#e74c3c" /> Free Cancellation: Up to 48
            hours before arrival
          </p>
        </div>
      </InfoSection>

      <Form>
        <Label>
          <User size={24} /> Name:
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Label>

        <Label>
          <Mail size={24} /> Email:
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {!isEmailValid && <SubtleError>Invalid email format</SubtleError>}
        </Label>

        <Label>
          <Phone size={24} /> Phone: (+91)
          <Input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          {!isPhoneValid && (
            <SubtleError>Invalid Indian phone number (10 digits)</SubtleError>
          )}
          ̦
        </Label>

        <Label>
          <Calendar size={24} /> Check-in:
          <Input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            min={new Date(Date.now() + 86400000).toISOString().split("T")[0]} // Tomorrow
            required
          />
        </Label>

        <Label>
          <Calendar size={24} /> Check-out:
          <Input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            min={
              checkIn
                ? new Date(new Date(checkIn).getTime() + 86400000)
                    .toISOString()
                    .split("T")[0]
                : ""
            }
            disabled={!checkIn}
            required
          />
        </Label>

        <Label>
          Adults (Max 2 per room):
          <Select
            value={adults}
            onChange={(e) => setAdults(Number(e.target.value))}
          >
            {[...Array(9).keys()].slice(1).map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </Select>
        </Label>

        <Label>
          Children (Max 1 per room):
          <Select
            value={children}
            onChange={(e) => setChildren(Number(e.target.value))}
          >
            {[...Array(5).keys()].slice(1).map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </Select>
        </Label>

        <Label>
          Rooms:
          <Select
            value={rooms}
            onChange={(e) => setRooms(Number(e.target.value))}
          >
            {[...Array(5).keys()].slice(1).map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </Select>
        </Label>
        <Label style={{ gridColumn: "1 / -1" }}>
          <span>
            <Mail size={24} /> Special Requests:
          </span>
          <textarea
            style={{
              width: "100%",
              padding: "18px",
              borderRadius: "10px",
              fontSize: "16px",
              border: "1px solid #ccc",
              resize: "vertical",
            }}
            rows="4"
            value={specialRequest}
            onChange={(e) => setSpecialRequest(e.target.value)}
            placeholder="Optional..."
          />
        </Label>
      </Form>
      <Summary>
        <h3>Booking Summary</h3>
        <p>
          <User size={20} /> {rooms} Room{rooms > 1 ? "s" : ""} · {adults} Adult
          {adults !== 1 ? "s" : ""} · {children} Child
          {children !== 1 ? "ren" : ""}
        </p>
        <p>
          <Calendar size={20} /> Check-in: {checkIn || "--"} | Check-out:{" "}
          {checkOut || "--"}
        </p>
        <p>💰 Total Amount: ₹{amount + (amount * 12) / 100 || 0}</p>
      </Summary>

      <BookButton
        onClick={handleBooking}
        disabled={
          checkIn == "" ||
          checkOut == "" ||
          name == "" ||
          phone == null ||
          email == ""
        }
      >
        Pay & Book Now
      </BookButton>

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
