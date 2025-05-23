import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CheckCircle, XCircle, Mail, UserCircle, IndianRupee } from "lucide-react";

const StatusPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);

  const status = query.get("status");
  const firstName = query.get("firstName");
  const lastName = query.get("lastName");
  const email = query.get("email");
  const amount = query.get("amount");

  const goHome = () => navigate("/", { replace: true });

  if (status === "success") {
    return (
      <Wrapper>
        <IconWrapper>
          <CheckCircle size={64} color="green" />
        </IconWrapper>
        <Title>Payment Successful</Title>
        <Info><UserCircle size={18} /> {firstName} {lastName}</Info>
        <Info><Mail size={18} /> {email}</Info>
        <Info><IndianRupee size={18} /> ₹{amount}</Info>
        <Button onClick={goHome}>Back to Home</Button>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <IconWrapper>
        <XCircle size={64} color="red" />
      </IconWrapper>
      <Title>Payment Failed</Title>
      <Description>
        Unfortunately, your payment could not be processed. Please try again or contact us for assistance.
      </Description>
      <Button onClick={goHome}>Back to Home</Button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  max-width: 600px;
  margin: 80px auto;
  padding: 32px;
  text-align: center;
  background-color: #fff5f5;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
`;

const IconWrapper = styled.div`
  margin-bottom: 24px;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 16px;
  color: #222;
`;

const Info = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 1rem;
  margin: 8px 0;
`;

const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 24px;
  color: #444;
`;

const Button = styled.button`
  background-color: hsl(0, 100%, 36%);
  color: white;
  padding: 10px 20px;
  border-radius: 12px;
  border: none;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: hsl(0, 100%, 30%);
  }
`;

export default StatusPage;
