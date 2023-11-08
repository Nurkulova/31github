import React from "react";
import styled from "styled-components";

const Sidebar = () => {
  return (
    <StyledSidebar>
      <div className='title'>CATEGORIES</div>
      <nav>
        <ul className='menu'>
          <li>name</li>
        </ul>
      </nav>

      <div className='footer'>
        <a href="/help" target="_blank" className='link'>
          Help
        </a>
        <a
          href="/terms"
          target="_blank"
          className='link'
          style={{ textDecoration: "underline" }}
        >
          Terms & Conditions
        </a>
      </div>
    </StyledSidebar>
  );
};

export default Sidebar;

const StyledSidebar = styled("section")`
  width: 304px;
  padding: 24px;
  height: 423px;
  display: flex;
  flex-direction: column;
  & .menu {
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    row-gap: 12px;
  }
  
  & .link {
    color: var(--dark-sea);
    font-size: 14px;
    line-height: 17px;
    text-transform: capitalize;
  }
  
  & .link:hover {
    color: var(--white);
  }
  
  & .link.active {
    color: var(--violet);
  }
  
  & .footer {
    margin-top: auto;
    display: flex;
    justify-content: space-between;
  }
`;
