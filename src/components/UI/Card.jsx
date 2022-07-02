import styled from 'styled-components'

const StyledCard = styled.div`
  background-color: white;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  padding: 1rem;
`

const Card = props => {
  return <StyledCard>{props.children}</StyledCard>
}

export default Card
