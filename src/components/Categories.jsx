import React from "react";
import styled from "styled-components";

const Categories = ({ title, products = [], amount }) => {
  const list = products.filter((_, i) => i < amount);

  return (
    <StyledCategoriesContainer>
      <h2>{title}</h2>
      <div className="list">
        {list.map(({ id, name}) => (
          <div key={id} className="item">
            <div className="image" />
            <h3 className="title">{name}</h3>
          </div>
        ))}
      </div>
    </StyledCategoriesContainer>
  );
};

export default Categories;

const StyledCategoriesContainer = styled("section")`
  width: 100%;
  padding: 22px;
  & .list {
    margin-top: 24px;
    display: flex;
    column-gap: 20px;
  }

  & .item {
    width: calc(100% / 5);
    overflow: hidden;
    text-align: center;
  }

  & .image {
    width: 100%;
    height: 230px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  & .title {
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    margin-top: 20px;
  }
`;
