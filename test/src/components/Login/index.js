import React, { useState } from "react";
import styled from "styled-components"; 
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import show from "./assets/show.svg";
import hide from "./assets/hide.svg";
import login from "./assets/login.svg";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().required("Email is required").email("Not a valid email"),
  password: yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
});

const StyledOuterWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background: #bec2f9;
`;

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  width: 400px;
  height: 400px;
  margin-right: 18%;
  
`;

const Styledtext = styled.div`
  text-align: left;
  font-size: 24px;
  margin-left: -43%;

`;

const Styledlog = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
`;

const StyledInput = styled.input`
  background: #ffffff;
  border: 2px solid #0d1b2a;
  height: 48px;
  width: 350px;
  border-radius: 10px;
  padding-left: 10px;
  font-size: 16px;
  font-family: Helvetica;
  color: #0d1b2a;
  margin-bottom: 0px;
`;

const StyledIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-left: -40px;
  margin-bottom: -7px;
`;

const StyledErrorText = styled.p`
  color: #ff0000;
  font-size:16px;
  font-weight:600;
  letter-spacing: 0.7px;
`;


const StyledButton = styled.button`
  border-radius: 10px;
  height:54px;
  width:365px;
  border: 0;
  background-color: #434dd6;
  box-shadow: rgb(0 0 0 / 5%) 0 0 8px;
  letter-spacing: 1.5px;
  font-weight:bold;
  color:#ffff;

  text-transform: uppercase;
  font-size: 18px;
  transition: all .5s ease;

  &:hover {
  letter-spacing: 4px;
  background-color: #211c4f;
  color: hsl(0, 0%, 100%);
  }


  
`;
const SuccessPageContainer = styled.div`
  margin-left: 42%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
`;
const Styledtexth5= styled.div`
  font-size: 16px;
  margin-top: -12%;
  margin-bottom:7%;
`;

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showSuccessPage, setSuccessPage] = useState(false);
  
  const {
  register,
  handleSubmit,
  formState: { errors },
  watch,
  } = useForm({
  resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
  if (!errors.email && !errors.password) {
  setSubmitted(true);
  setSuccessPage(true);
  }
  console.log(data);
  };
  
  const handleClick = (e) => {
  setShowPassword(!showPassword);
  };
  
  return (
  <StyledOuterWrapper>
  {!showSuccessPage ? (
  <>
  <Styledlog><img src = {login}/></Styledlog>
  <StyledWrapper>
  <Styledtext>
  <h2>LogIn</h2>
  <Styledtexth5>Welcome back<br/> Please entre your details here
  </Styledtexth5>
  </Styledtext>
  <LoginForm
    register={register}
    handleSubmit={handleSubmit}
    onSubmit={onSubmit}
    errors={errors}
    showPassword={showPassword}
    setShowPassword={setShowPassword}
    handleClick={handleClick}
    />
  </StyledWrapper>
  </>
  ) : (
  <SuccessPage />
  )}
  </StyledOuterWrapper>
  );
  };
  
  const LoginForm = ({
  register,
  handleSubmit,
  onSubmit,
  errors,
  showPassword,
  setShowPassword,
  handleClick,
  }) => {
  return (
  <form onSubmit={handleSubmit(onSubmit)}>
  <p>
  <StyledInput
  type="text"
  placeholder="Email"
  {...register("email")}
  />
  </p>
  <StyledErrorText>{errors.email?.message}</StyledErrorText>
  <p>
  <StyledInput
  type={showPassword ? "text" : "password"}
  placeholder="Password"
  {...register("password")}
  />
  <StyledIcon
  src={showPassword ? hide : show}
  onClick={handleClick}
  ></StyledIcon>
  <StyledErrorText>{errors.password?.message}</StyledErrorText>
  </p>
  <p>
  <StyledButton>Login</StyledButton>
  </p>
  </form>
  );
  };
  
  const SuccessPage = () => {
    return (
      <SuccessPageContainer>
        <h1>Login Success!</h1>
      </SuccessPageContainer>
    );
  };
  
  export default Login
  ;