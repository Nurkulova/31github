import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <header>
      <div>
        <StyledLogo>House Stuff</StyledLogo>
        <StyledNav>
          <StyledNavList>О нас</StyledNavList>
          <StyledNavList>Контакты</StyledNavList>
          <StyledNavList>Кабинет</StyledNavList>
        </StyledNav>
      </div>
      <div className="presentation"></div>
    </header>
  );
};

export default Header;

const StyledLogo = styled("span")`
  font-weight: 600;
  font-size: 20px;
`;
const StyledNav = styled("ul")`
  float: right;
  list-style: none;
`;
const StyledNavList = styled("li")`
  display: inline;
  margin-left: 25px;
  cursor: pointer;
  transition: opacity 1m easy;
  &:hover {
    opasity: 0.5;
  }
`;
