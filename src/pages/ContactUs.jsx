import React from "react";
import styled from "styled-components";

const ContactUs = () => {
  return (
    <Wrapper>
      <InfoCard>
        <Heading>Contact Us</Heading>
        <p>
          We're here to help you plan your perfect getaway. Whether you have questions about our resort, want to make a booking, or simply wish to know more about our services, feel free to reach out to us using the contact information below.
        </p>
        <ContactList>
          <ContactItem>
            <Label>📍 Address:</Label>
            A/C 154, 155 Survey No 293, 295, Vaddu Road, Opp Jindal Township, Vaddu, Ballari, Karnataka, 583123
          </ContactItem>
          <ContactItem>
            <Label>📞 Phone:</Label>
            +91 9008526724, +91 9449229249, +91 9482607000
          </ContactItem>
          <ContactItem>
            <Label>📧 Email:</Label>
            <a href="mailto:info@natureslap.com">info@natureslap.com</a>
          </ContactItem>
        </ContactList>
        <p>
          You can also connect with us on our social media channels for the latest updates and promotions.
        </p>
      </InfoCard>
      <ImageWrapper>
        <img src="./img32.webp" alt="Nature's Lap Resort" />
      </ImageWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;

  @media screen and (min-width: 900px) {
    flex-direction: row;
  }
`;

const InfoCard = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ImageWrapper = styled.div`
  flex: 1;
  overflow: hidden;
  max-height: 500px;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

const Heading = styled.h2`
  font-size: 2.2rem;
  color: #2c3e50;
  position: relative;
  margin-bottom: 16px;

  &::before {
    content: "";
    position: absolute;
    width: 28px;
    height: 5px;
    bottom: -2.5px;
    left: 5%;
    background-color: hsl(0, 100%, 36%);
  }

  &::after {
    content: "";
    position: relative;
    width: 100px;
    height: 1px;
    left: 0;
    background-color: hsl(0, 100%, 36%);
    display: block;
  }
`;

const ContactList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ContactItem = styled.li`
  margin-bottom: 12px;
  font-size: 1rem;
`;

const Label = styled.span`
  font-weight: bold;
  display: block;
  margin-bottom: 4px;
`;

export default ContactUs;
