import { Fragment } from "react";
import styled from "styled-components";
import HeaderCartButton from "./HeaderCartButton.jsx";
import mealsImage2 from "../../assets/mealsImage2.jpg";

const StyledHeader = styled.header`
  align-items: center;
  background-color: #8a2b06;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  color: white;
  display: flex;
  font-size: 14px;
  height: fit-content;
  justify-content: space-between;
  left: 0;
  padding: 0 10%;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
`;

const StyledMainImage = styled.div`
  height: 35rem;
  overflow: hidden;
  width: 100%;
  z-index: 0;
  img {
    height: 100%;
    object-fit: cover;
    transform: rotateZ(-5deg) translateY(-4rem) translateX(-1rem);
    width: 110%;
  }
`;

const Header = (props) => {
  return (
    <Fragment>
      <StyledHeader>
        <h1>Steve's Fine Dining</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </StyledHeader>
      <StyledMainImage>
        <img src={mealsImage2} alt="A table full of delicious food!" />
      </StyledMainImage>
    </Fragment>
  );
};

export default Header;
