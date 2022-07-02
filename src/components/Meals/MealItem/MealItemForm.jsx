import { useRef, useState } from "react";
import styled from "styled-components";
import Input from "../../UI/Input.jsx";

const StyledForm = styled.form`
  text-align: right;
`;

const StyledButton = styled.button`
  background-color: #8a2b06;
  border: 1px solid #8a2b06;
  border-radius: 20px;
  color: white;
  cursor: pointer;
  font: inherit;
  font-weight: bold;
  padding: 0.25rem 2rem;
  :active,
  :hover {
    background-color: #641e03;
    border-color: #641e03;
  }
`;

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <StyledForm onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <StyledButton>+ Add</StyledButton>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </StyledForm>
  );
};

export default MealItemForm;
