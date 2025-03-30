import React, { useState } from "react";
import styled from "styled-components";
import {
  Bed,
  Bath,
  Wifi,
  CheckCircle,
  Leaf,
  Snowflake,
  Utensils,
  ParkingSquare,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  max-width: 1400px;
  margin: 0 auto;
  background: #f9f9f9;

  @media (max-width: 768px) {
    padding: 40px 15px;
  }
`;

const RoomCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 100%;

  @media (max-width: 768px) {
    gap: 15px;
  }
`;

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1100px;
  height: 500px;
  overflow: hidden;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f0f0f0;

  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 480px) {
    height: 200px;
  }
`;

const ImageGallery = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  flex-shrink: 0;
  background: white;
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 1;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }

  @media (max-width: 480px) {
    padding: 6px;
  }
`;

const PrevButton = styled(NavButton)`
  left: 10px;
`;

const NextButton = styled(NavButton)`
  right: 10px;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;

const Section = styled.div`
  flex: 1;
  min-width: 300px;

  @media (max-width: 768px) {
    min-width: 100%;
  }
`;

const Amenities = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 15px;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const Amenity = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  color: #444;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const Price = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: #27ae60;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 28px;
  }
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #f39c12;
`;

const BookButton = styled.button`
  background: #3498db;
  color: white;
  border: none;
  padding: 12px 30px;
  font-size: 20px;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s;
  margin-top: 20px;

  &:hover {
    background: #2980b9;
  }

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    text-align: center;
    padding: 12px;
  }
`;

const Description = styled.p`
  font-size: 20px;
  line-height: 1.6;
  color: #555;
  text-align: center;
  max-width: 1100px;
  margin: 40px 0;

  @media (max-width: 768px) {
    font-size: 18px;
    margin: 30px 0;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    margin: 20px 0;
  }
`;

const Rooms = () => {
  const navigate = useNavigate();
  const images = [
    "./img6.webp",
    "./img7.webp",
    "./img8.webp",
    "./img9.webp",
    "./img10.webp",
    "./img1.webp",
    "./img2.webp",
    "./img5.webp",
    "./img22.webp",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleBookNow = () => {
    navigate("/booking");
  };

  return (
    <Container>
      <Description>
        Welcome to Nature's Lap Heritage Home and Resort. Escape the city's
        chaos and immerse yourself in nature's tranquility. Our resort offers
        breathtaking views, comfortable accommodations, and modern amenities to
        make your stay unforgettable.
      </Description>

      <SliderContainer>
        <PrevButton onClick={prevSlide}>
          <ChevronLeft size={32} />
        </PrevButton>
        <ImageGallery
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <Image key={index} src={src} alt={`Room view ${index + 1}`} />
          ))}
        </ImageGallery>
        <NextButton onClick={nextSlide}>
          <ChevronRight size={32} />
        </NextButton>
      </SliderContainer>

      <Description>
        Our spacious rooms are designed to offer ultimate comfort with elegant
        interiors and scenic views. Whether you're seeking a weekend getaway or
        an extended stay, our resort provides a peaceful retreat.
      </Description>

      <Info>
        <Section>
          <Amenities>
            <Amenity>
              <Bed size={22} /> King Size Bed
            </Amenity>
            <Amenity>
              <Bath size={22} /> Private Bathroom
            </Amenity>
            <Amenity>
              <Wifi size={22} /> Free Wi-Fi
            </Amenity>
            <Amenity>
              <CheckCircle size={22} /> Daily Housekeeping
            </Amenity>
            <Amenity>
              <Leaf size={22} /> Scenic Nature Views
            </Amenity>
            <Amenity>
              <Snowflake size={22} /> Air Conditioning
            </Amenity>
            <Amenity>
              <Utensils size={22} /> On-site Restaurant
            </Amenity>
            <Amenity>
              <ParkingSquare size={22} /> Free Parking
            </Amenity>
          </Amenities>
        </Section>
        <Section>
          <Price>₹3,200 + tax / night</Price>
          <BookButton onClick={handleBookNow}>Book Now</BookButton>
        </Section>
      </Info>
    </Container>
  );
};

export default Rooms;
