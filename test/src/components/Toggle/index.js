import React, { useState } from "react";
import styled from "styled-components";
import Profile from "./assets/profile.png";


const OuterWrapper = styled.div`

  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #FC1F61;

  
`;
const StyleWrapper = styled.div`
  background: #FFEDED;
  width: 400px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  
`;

const StyleImage = styled.div`
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  width: 150px;
  height: 150px;
`;

const StyledHeader = styled.h1`
  position: absolute;
  top: 300px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
`;


const CheckBoxWrapper = styled.div`
  position: relative;
  top: 140px;
`;
const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 52px;
  height: 32px;
  border-radius: 20px;
  background: #bebebe;
  cursor: pointer;
  
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    margin: 8px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;}
    &:hover::after{
      background: #787474;
    
  }
`;

const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 52px;
  height: 32px;
  &:checked + ${CheckBoxLabel} {
    background: #980DC9;
    ;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 24px;
      height: 24px;
      margin-top: 4px;
      margin-bottom: 4px;
      margin-left: 24px;
      transition: 0.2s;
    }
    &:hover::after{
      background: #ffffff;
    
  }
  }
`;

const Toggle = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = (e) => {
    setIsChecked(e.target.checked);
  };
  return (
    <OuterWrapper>
      <StyleWrapper style={{background: isChecked ? 'black': '#FFFFFF'}}>
      <StyleImage>
    <img src={Profile} alt="profile" />
  </StyleImage>
  <StyledHeader style={{ color: isChecked ? 'white' : 'black' }}>
    {isChecked ? "Dark Mode" : "Normal Mode"}
  </StyledHeader>
  <CheckBoxWrapper>
    <CheckBox id="checkbox" type="checkbox" onChange={handleCheck} />
    <CheckBoxLabel htmlFor="checkbox" />
  </CheckBoxWrapper>
</StyleWrapper>
    </OuterWrapper>
  );
};


export default Toggle;
