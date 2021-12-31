/* eslint-disable prettier/prettier */
import styled from "styled-components"

const StyledButton = styled.button`
 background-color: #ffa100;
  border: .5rem solid #ffffff;
  color: #ffffff;
  text-align: center;
  padding: 1rem 2rem;
  font-family: 'roboto';
  font-size: 1.4rem;
  font-weight: bold;
  display: inline-block;
  transition: 0.5s;
  border-radius: .75rem;
  transition: 0.5 all ease-out;
  background-image: linear-gradient(to right, #494949, #999999);
  :hover{

    background-image: linear-gradient(to right, #ffa100, #999999);
    border: .2rem solid #ef9207;
  }
  `
  export { StyledButton }