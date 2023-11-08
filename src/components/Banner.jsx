import React from "react";
import bannerImg from "../assets/images/bannerimage.png";
import styled from "styled-components";

const Banner = () => (
  <StyledBanner>
    <div className="left">
      <p className="content">
        NEW YEAR
        <span>SALE</span>
      </p>
      <button className="more">See more</button>
    </div>

    <div className="right" style={{ backgroundImage: `url(${bannerImg})` }}>
      <p className="discount">
        save up to <span>50%</span> off
      </p>
    </div>
  </StyledBanner>
);

export default Banner;

const StyledBanner = styled("section")`
  display: flex;
  width: 100%;
  height: 570px;
  & .left {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    z-index: 2;
  }

  & .left:before,
  .left:after {
    content: "";
    display: block;
    position: absolute;
  }

  & .left:before {
    width: 204px;
    height: 170px;
    left: -25px;
    bottom: 74px;
    background: url(../images/shoe.png) no-repeat center/contain;
  }

  &.left:after {
    width: 269px;
    height: 151px;
    right: -25px;
    bottom: -25px;
    background: url(../images/devices.png) no-repeat center/contain;
  }

  & .content {
    color: var(--violet);
    font-weight: 300;
    font-size: 70px;
    line-height: 85px;
    text-align: center;
  }

  & .content span {
    line-height: 183px;
    font-size: 150px;
    display: block;
  }

  & .more {
    margin-top: 27px;
  }

  & .right {
    width: 50%;
    position: relative;
  }

  & .discount {
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: var(--bg);
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 24px;
  }

  & .discount span {
    color: var(--violet);
    font-weight: 700;
  }
`;
