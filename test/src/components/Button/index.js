import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import {FaHeart } from 'react-icons/fa';
import { IoMdSend } from "react-icons/io";

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled.button`
 {background-color: ${(props) => props.color};
  border-radius: 4px;
  min-width: 64px;
  height: 36px;
  color: white;
  border: none;
  padding: 0px 16px;
  letter-spacing: 1px;

  font-size: 14px;
  font-weight: 530;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 1.5%;
  gap: 8px;
  ${props => props.disabled && css`
    cursor: not-allowed;
  `}
  ${props => props.pressed && css`
    background-color: darkblue;
  `}
  

  &:hover{
    box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.4);
    }

  &.outline {
    background-color: transparent;
    border: 2px solid blue;
    color: blue;
    border-radius: 5px;
    
    
  &:hover{
    background: #e7e7e7;
    box-shadow: none;}
  }

  &.text {
    background-color: transparent;
    color: blue;
    border: none;
    padding: 0px 8px;
    ${props => props.disabled && css`
    color: darkgray;
  `}

    &:hover{
      background: #e7e7e7;
      box-shadow: none;}
  }
`;

const IconButton = styled.button`
  background:  #0F6FFF;
  color: #FFFFFF;
  border: none;
  cursor: pointer;
  padding: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;
  font-size:20px;
  &:hover{
    box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.6);
    background: #034CB9;}
  ${props =>
    props.active &&
    css`
      color: red;
    `}
`;
export const button= (props)=>{

  const {children, color, pressed,...rest} = props;
  return <StyledButton color={color} pressed={pressed} {...rest}>{children}
  </StyledButton>
}


const Button = () => {
  const [isActive, setIsActive] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [pressed, setPressed] = useState(false);
  return (
    <StyledWrapper>
      <StyledButton color="#0F6FFF" pressed={pressed} onClick={() => { setPressed(!pressed)}}>
        SEND
      </StyledButton>
        <br />
      <StyledButton color="#5C1349" >
        <span className="icon">
          <IoMdSend style={{fontSize: '18px'}}/>
        </span>
         SEND
      </StyledButton>
        <br />
      <StyledButton className="outline">
         SEND
      </StyledButton>
        <br />
      <StyledButton className="outline">
        <span className="icon">
          <IoMdSend style={{fontSize: '18px'}}/>
        </span>
         SEND
      </StyledButton>
      <br />
      <StyledButton className="text" disabled={disabled} onClick={() => setDisabled(!disabled)}>
         SEND
      </StyledButton>
       <br />
      <StyledButton className="text">
        <span className="icon">
          <IoMdSend style={{fontSize: '18px'}}/>
        </span>
         SEND
      </StyledButton>
       <br />
      <IconButton active={isActive} onClick={() => setIsActive(!isActive)}>
  <FaHeart/>
</IconButton>
    </StyledWrapper>
  );
};

export default Button;