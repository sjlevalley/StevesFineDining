import { useContext } from "react";
import styled from "styled-components";
import MealItemForm from "./MealItemForm.jsx";
import CartContext from "../../../store/cart-context";

const StyledListItem = styled.li`
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  padding-bottom: 1rem;
  h3 {
    margin: 0 0 0.25rem 0;
  }
`;
const StyledDescriptionDiv = styled.div`
  font-style: italic;
`;
const StyledPrice = styled.div`
  color: #ad5502;
  font-size: 1.25rem;
  font-weight: bold;
  margin-top: 0.25rem;
`;

const MealItem = (props) => {
  const cartContext = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartContext.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <StyledListItem>
      <div>
        <h3>{props.name}</h3>
        <StyledDescriptionDiv>{props.description}</StyledDescriptionDiv>
        <StyledPrice>{price}</StyledPrice>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </StyledListItem>
  );
};

export default MealItem;
