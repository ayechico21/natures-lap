import React from "react";
import styled from "styled-components";

function Header() {
  const url = new URL("/mainBg.png", import.meta.url).href;
  console.log(url);
  return (
    <Wrapper>
      <img src={url} alt="" />
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
  border: 2px dotted green;
  width: 100%;
`;

const List = styled.ul`
  border: 2px dotted blue;
  max-width: 1200px;

  list-style: none;
  display: flex;
  gap: 24px;
  padding: 8px 24px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  backdrop-filter: blur(1px);
`;

const ListItem = styled.li`
  font-weight: 600;
`;

const LogoListItem = styled(ListItem)`
  border: 2px dotted brown;
  margin: 0 auto;
`;

export default Header;
