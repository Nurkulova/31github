import React from "react";
import Logo from "../assets/images/logo1.svg";
import Avatar from "../assets/images/avatar.svg";
import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo>
        <img src={Logo} alt="stuff" />
      </StyledLogo>
      <StyledInfo>
        <StyledUser>
          <StyledAvatar />
          <StyledUserName>Guest</StyledUserName>
        </StyledUser>
        <StyledForm>
          <div className="inner-icon">
            <svg className="icon">
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`} />
            </svg>
          </div>
          <div className="input">
            <input
              type="search"
              name="search"
              placeholder="Search for anything..."
              autoComplete="off"
              onChange={() => {}}
              value=""
            />
          </div>
          {false && <div className="box"></div>}
        </StyledForm>
        <AcountStyle>
          <div className="favourites">
            <svg className="icon-fav">
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#heart`} />
            </svg>
          </div>

          <StyledCart>
            <svg className="icon-cart">
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#bag`} />
            </svg>
            {/* {!!cart.length && ( */}
            <CountStyle>1</CountStyle>
            {/* )} */}
          </StyledCart>
        </AcountStyle>
      </StyledInfo>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled("header")`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 25px 20px;
`;

const StyledLogo = styled("div")`
  width: 304px;
`;

const StyledInfo = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
`;

const StyledUser = styled("div")`
  display: flex;
  align-items: center;
  column-gap: 10px;
  cursor: pointer;
`;

const StyledAvatar = styled("div")`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--dark);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  backgroundimage: "url(${Avatar})";
`;
const StyledUserName = styled("div")`
  font-size: 10px;
  line-height: 12px;
  color: var(--grey);
`;

const StyledForm = styled("form")`
  display: flex;
  align-items: center;
  background: var(--dark);
  border-radius: 6px;
  height: 27px;
  padding: 7px 10px;
  column-gap: 16px;
  width: 300px;
  position: relative;
  & .inner-icon {
    width: 13px;
    height: 13px;
  }

  & .icon svg {
    width: 100%;
    height: 100%;
    fill: var(--dark-sea);
  }

  & .input {
    flex-grow: 1;
  }

  & .input input {
    font-family: Montserrat, Roboto, sans-serif;
    font-size: 12px;
    line-height: 14px;
    color: var(--grey);
    background: none;
    outline: none;
    width: 100%;
  }

  & .box {
    z-index: 9;
    top: 120%;
    position: absolute;
    width: 100%;
    left: 0;
    max-height: 300px;
    overflow-y: auto;
    padding: 12px;
    display: flex;
    flex-direction: row;
    row-gap: 8px;
    background: var(--dark-sea);
    border-radius: 8px;
  }

  & .box::-webkit-scrollbar {
    display: none;
  }
`;

const AcountStyle = styled("div")`
  display: flex;
  align-items: center;
  column-gap: 20px;
  & svg {
    width: 24px;
    height: 24px;
  }
  & .favourites {
    cursor: pointer;
  }

  & .icon-fav {
    stroke: var(--grey);
    fill: none;
  }

  & .icon-cart {
    fill: var(--grey);
  }

  & .icon-fav:hover {
    stroke: var(--white);
  }

  & .icon-cart:hover {
    fill: var(--white);
  }
`;

const CountStyle = styled("div")`
  position: absolute;
  width: 14px;
  height: 14px;
  background: var(--violet);
  right: -2px;
  bottom: -2px;
  border-radius: 50%;
  font-weight: 700;
  font-size: 10px;
  color: var(--light);
  text-align: center;
  line-height: 16px;
`;

const StyledCart = styled("div")`
  position: relative;
`;
