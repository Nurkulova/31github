import React from "react";
import styled from "styled-components";

const Product = (item) => {
  const { title, price, description } = item;

  return (
    <StyledProduct>
      <div className="images">
        <div className="current" />
        <div className="images-list">
          <div className="image" />
        </div>
      </div>
      <StyledInfo>
        <h1 className="title">{title}</h1>
        <div className="price">{price}$</div>
        <div className="color">
          <span>Color:</span> Green
        </div>
        <div className="sizes">
          <span>Sizes:</span>

          <div className="list"></div>
        </div>

        <p className="description">{description}</p>

        <div className="actions">
          <button className="add">Add to cart</button>
          <button className="favourite">Add to favourites</button>
        </div>

        <div className="bottom">
          <div className="purchase">19 people purchased</div>
        </div>
      </StyledInfo>
    </StyledProduct>
  );
};

export default Product;

const StyledProduct = styled("section")`
  display: flex;
  flex-grow: 1;
  max-width: calc(100% - 324px);
  padding: 24px;
  column-gap: 32px;
  color: var(--light);
  & .images {
    display: flex;
    gap: 20px;
  }

  & .current {
    width: 375px;
    height: 375px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 6px;
  }

  & .images-list {
    display: flex;
    flex-direction: column;
    row-gap: 5px;
  }

  & .image {
    width: 90px;
    height: 90px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 6px;
    cursor: pointer;
  }
`;
const StyledInfo = styled("div")`
  display: flex;
  flex-direction: column;
  & .title {
    font-size: 18px;
    line-height: 22px;
    font-weight: 500;
  }

  & .price {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    margin: 10px 0 20px 0;
  }

  & .color,
  .sizes {
    font-size: 14px;
    line-height: 17px;
    text-transform: capitalize;
    display: flex;
    column-gap: 16px;
    align-items: center;
  }

  & .sizes {
    margin: 16px 0;
  }

  & .color span,
  .sizes span {
    font-size: 14px;
    line-height: 17px;
    color: var(--dark-sea);
  }

  & .list {
    display: flex;
    align-items: center;
    column-gap: 5px;
  }

  & .size {
    padding: 4px 8px;
    border-radius: 8px;
    background: var(--bg);
    cursor: pointer;
  }

  & .size:hover,
  .size.active {
    background: var(--violet);
  }

  & .description {
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: var(--grey);
  }

  & .actions {
    margin-top: 20px;
    display: flex;
    column-gap: 10px;
  }

  & .favourite {
    background: var(--dark-sea);
    border-radius: 6px;
  }

  & .favourite:hover {
    background: #7a8690;
  }

  & .bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 10px;
    line-height: 12px;
    color: var(--dark-sea);
    margin-top: auto;
  }

  & .add:disabled {
    cursor: not-allowed;
    background: var(--bg);
  }
`;
