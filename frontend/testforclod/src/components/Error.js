import styled from 'styled-components'
const Error = ({children, ...restProps}) => {
    return <StyledError {...restProps} >{children}</StyledError>
}
const StyledError = styled.span`
  display: block;
  font-size: 80%;
  margin-top: 6px;
  color: #eb5a5a;
`
export default Error