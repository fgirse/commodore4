/* eslint-disable prettier/prettier */
import styled from "styled-components"

const StyledButton = styled.button`
 background-color: #ffa100;
  border: .1rem solid #ffffff;
  color: #ffffff;
  text-align: center;
  padding: 1rem 2rem;
  font-family: Segoe UI;
  font-size: 1.4rem;
  font-weight: bold;
  display: inline-block;
  transition: 0.5s;
  border-radius: .75rem;
  transition: 0.5 all ease-out;
  background-image: linear-gradient(to right, #494949, #797979);
  :hover{

    background-image: linear-gradient(to right, #292929, #696969);
    border: .2rem solid #ffa100;
    color: #ffa100
  }
  `
  export { StyledButton }