import React from "react";
import styled from "styled-components";
import { X } from "lucide-react";

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const PopupContainer = styled.div`
  background: white;
  padding: 50px;
  border-radius: 16px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  width: 90%;
  max-width: 500px;
  text-align: center;
  position: relative;
`;

const PopupHeader = styled.h2`
  font-size: 28px;
  color: #2c3e50;
  margin-bottom: 15px;
`;

const PopupContent = styled.p`
  font-size: 18px;
  color: #555;
  margin-bottom: 30px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: transparent;
  border: none;
  cursor: pointer;
`;

const ConfirmButton = styled.button`
  background: #27ae60;
  color: white;
  border: none;
  padding: 15px 40px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 12px;
  transition: 0.3s;

  &:hover {
    background: #219150;
    box-shadow: 0 10px 25px rgba(39, 174, 96, 0.4);
    transform: translateY(-5px);
  }
`;

const Popup = ({ title, content, onClose }) => (
  <PopupOverlay>
    <PopupContainer>
      <CloseButton onClick={onClose}>
        <X size={28} color="#e74c3c" />
      </CloseButton>
      <PopupHeader>{title}</PopupHeader>
      <PopupContent>{content}</PopupContent>
      <ConfirmButton onClick={onClose}>OK</ConfirmButton>
    </PopupContainer>
  </PopupOverlay>
);

export default Popup;
