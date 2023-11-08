import React from "react";
import Logo from "../assets/images/logo1.svg";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <div className='logo'>
        <img src={Logo} alt="Stuff" />
      </div>

      <div className='rights'>Developed by CHOLPON</div>

      <StyledSocials>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <svg className="icon">
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`} />
          </svg>
        </a>

        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <svg className="icon">
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`} />
          </svg>
        </a>

        <a href="https://youtube.com" target="_blank" rel="noreferrer">
          <svg className="icon">
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`} />
          </svg>
        </a>
      </StyledSocials>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled("footer")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  padding: 24px;
  & .logo {
    width: 61px;
  }

  & .logo a {
    height: 100%;
  }
  
  & .rights {
    color: var(--dark-sea);
    font-size: 12px;
    line-height: 15px;
  }
  
  & .rights a {
    color: var(--violet);
  }
  
`;
const StyledSocials = styled('div')`
  display: flex;
  gap: 15px;
& .socials svg {
  width: 24px;
  height: 24px;
  fill: var(--dark-sea);
}

& .socials svg:hover {
  fill: var(--violet);
}`
