import React from "react";
import styled from "styled-components";

function Header() {
  const url = new URL("/mainBg.png", import.meta.url).href;
  console.log(url);
  return (
    <Wrapper>
      <MainImage src={url} />
      <List>
        <ListItem>Home</ListItem>
        <ListItem>Rooms</ListItem>
        <LogoListItem>LOGO</LogoListItem>
        <ListItem>Restaurant</ListItem>
        <ListItem>Contact Us</ListItem>
      </List>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  width: 100%;
`;

const MainImage = styled.img``;

const List = styled.ul`
  width: 100%;
  max-width: 1200px;
  overflow: hidden;
  list-style: none;
  display: flex;
  gap: 48px;
  padding: 8px 24px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  color: white;
 /*  backdrop-filter: blur(1px); */
 background-color: hsla(0, 0%, 0%, .3);
`;

const ListItem = styled.li`
  font-weight: 600;
  font-size: 1.2rem;
`;

const LogoListItem = styled(ListItem)`
  margin: 0 auto;
`;

export default Header;
