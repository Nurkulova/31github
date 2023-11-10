import React from "react";
import styled from "styled-components";

const Profile = () => {

  return (
    <StyledProfile>
        <span>You need to log in</span>
        <form className='form'>
          <div className='group'>
            <input
              type="email"
              placeholder="Your email"
              name="email"
              autoComplete="off"
              required
            />
          </div>

          <div className='group'>
            <input
              type="name"
              placeholder="Your name"
              name="name"
              autoComplete="off"
              required
            />
          </div>

          <div className='group'>
            <input
              type="password"
              placeholder="Your password"
              name="password"
              autoComplete="off"
              required
            />
          </div>

          <div className='group'>
            <input
              type="avatar"
              placeholder="Your avatar"
              name="avatar"
              autoComplete="off"
              required
            />
          </div>

          <button type="submit" className='submit'>
            Update
          </button>
        </form>
    </StyledProfile>
  );
};

export default Profile;

const StyledProfile = styled("section")`
  flex-grow: 1;
  padding: 25px;
  & .form {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    width: 25rem;
  }
  
  & .group {
    width: 100%;
    background: #212123;
    border-radius: 8px;
    color: var(--light);
    padding: 10px 24px;
    margin-top: 10px;
  }
  
  & .group input {
    width: 100%;
  }
`;
