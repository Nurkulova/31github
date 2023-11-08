import React from "react";
import BG from '../assets/images/laptopimage.png';
import styled from "styled-components";

const Poster = () => (
  <StyledPoster>
    <div className="title">BIG SALE 20%</div>
    <div className="product">
      <StyledText>
        <div className="subtitle">the bestseller of 2022</div>
        <h1 className="head">LENNON r2d2 with NVIDIA 5090 TI</h1>
        <button className="button">Shop Now</button>
      </StyledText>
      <div className="image">
        <img src={BG} alt="" />
      </div>
    </div>
  </StyledPoster>
);

export default Poster;

const StyledPoster = styled("div")`
  position: relative;
  flex-grow: 1;
  & .title {
    font-weight: 900;
    font-size: 119px;
    line-height: 145px;
    text-transform: uppercase;
    color: var(--bg);
    text-align: center;
  }
  & .product {
    position: relative;
    padding-left: 42px;
    display: flex;
    align-items: stretch;
    margin-top: 9px;
  }
  & .image {
    position: relative;
    flex-grow: 1;
    height: 250px;
  }

  & .image img {
    position: absolute;
    bottom: -15%;
    right: 10%;
    max-width: unset;
  }
`;
const StyledText = styled("div")`
  & .subtitle {
    line-height: 20px;
    text-transform: uppercase;
    color: var(--sea);
  }

  & .head {
    font-weight: 700;
    font-size: 42px;
    line-height: 51px;
    text-transform: uppercase;
    color: var(--light);
    max-width: 500px;
    margin: 10px 0 24px 0;
  }
`;
