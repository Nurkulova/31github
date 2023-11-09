import React from "react";
import styled from "styled-components";

const Products = ({ title, style = {}, products = [], amount }) => {
  const list = products.filter((_, i) => i < amount);

  return (
    <StyledProducts style={style}>
      {title && <h2>{title}</h2>}

      <div className="list">
        {list.map(({ images, title, category: { name: cat }, price }) => (
          <div className="product">
            <div
              className="image"
              style={{ backgroundImage: `url(${images[0]})` }}
            />

            <StyledWrapper>
              <h3 className="title">{title}</h3>
              <div className="cat">{cat}</div>
              <div className="info">
                <div className="prices">
                  <div className="price">{price}$</div>
                  <div className="oldPrice">{Math.floor(price * 0.8)}$</div>
                </div>

                <div className="purchases">
                  {Math.floor(Math.random() * 20 + 1)} purchased
                </div>
              </div>
            </StyledWrapper>
          </div>
        ))}
      </div>
    </StyledProducts>
  );
};

export default Products;

const StyledProducts = styled("section")`
  width: 100%;
  padding: 25px 22px;

  & .list {
    margin-top: 24px;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }

  & .product {
    background: var(--bg);
    border-radius: 8px;
    overflow: hidden;
    width: calc(100% / 5 - 20px);
  }

  & .product:nth-child(5n) {
    width: calc(100% / 5);
  }

  & .image {
    width: 100%;
    height: 410px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`
  const StyledWrapper = styled("div")`
    padding: 12px;
    display: flex;
    flex-direction: column;
    height: calc(100% - 410px);
  }

  & .title {
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
  }

  & .cat {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: var(--grey);
    text-transform: uppercase;
    margin-top: 5px;
    margin-bottom: 28px;
  }

  & .info {
    margin-top: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & .prices {
    display: flex;
    align-items: center;
    column-gap: 5px;
  }

  & .price {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: var(--violet-dark);
  }

  & .oldPrice {
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    text-decoration-line: line-through;
    color: var(--dark-sea);
  }

  & .purchases {
    color: var(--dark-sea);
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
  }

  & .button {
    margin-top: 24px;
    text-align: center;
  }
`;
