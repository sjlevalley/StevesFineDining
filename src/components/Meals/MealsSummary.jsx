import styled from 'styled-components'

const StyledSection = styled.section`
  background-color: #383838;
  border-radius: 14px;
  box-shadow: 0 1px 18px 10px rgba(0, 0, 0, 0.25);
  color: white;
  margin: auto;
  margin-top: -10rem;
  max-width: 45rem;
  padding: 1rem;
  position: relative;
  text-align: left;
  width: 90%;
  h2 {
    font-size: 2rem;
    margin-top: 0;
  }
`

const MealsSummary = () => {
  return (
    <StyledSection>
      <h2>Delicious Food, Fresh out of the Oven!</h2>
      <p>
        Choose your favorite meal from our selection of tasty meals and enjoy a
        delicious lunch or dinner with friends.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </StyledSection>
  )
}

export default MealsSummary
