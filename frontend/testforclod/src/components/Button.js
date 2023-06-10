import styled from 'styled-components'
const Button = ({children, ...restProps}) => {
    return <StyledButton {...restProps} >{children}</StyledButton>
}
const StyledButton = styled.button`
  cursor: pointer;
  padding: 12px 16px 12px 16px;
  background: ${p => p.outline ? 'transparent' : "#5558FA"};
  border-radius: 4px;
  border: 2px solid ${p => p.outline ? "#5558FA" : 'transparent'};
  color: ${p => p.outline ? "#5558FA" : 'white'};
  margin-top: 24px;
  
  &:active {
    background: ${p => p.outline ? '#DDD' : "#4144fc"}
  }
`
export default Button