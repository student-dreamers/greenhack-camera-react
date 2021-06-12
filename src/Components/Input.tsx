import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Button = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: max-content;
  min-width: 250px;
  margin: 20px auto;
  padding: 15px 25px;
  background: #FFDA1A;
  color: inherit;
  text-decoration: none;
`

export const ButtonText = styled.span`
  font-weight: 400;
  padding: 0 5px;
`

const InputBox = styled.span`
  position: relative;
  display: block;
  
  &:after {
    content: "";
    position: absolute;
    display: block;
    width: calc(100% - 30px);
    height: 2px;
    margin: 0 auto;
    background: #FFDA1A;
    bottom: 4px;
    left: 0;
    right: 0;
  }
`

const InputControl = styled.input`
  width: 100%;
  padding: 15px 30px;
  margin: 0;
  border: none;
  background: #eee;
  font-size: 1.2rem;
`

export const Input = (props: any) => (
    <InputBox>
        <InputControl type="text" {...props} />
    </InputBox>
)
