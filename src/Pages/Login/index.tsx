import React, { useState } from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

import { ACCESTOKEN_TEST, ACC_TEST } from "@configs";
import { validationSchemaLogin } from "@utils";

interface IValues {
  shopId: string;
  userName: string;
  password: string;
}

export const Login = () => {
  const navigate = useNavigate();
  const [isLoginFail, setIsLoginFail] = useState<boolean>(false);

  const handleForgotPassword = () => {
    navigate("/reset-password");
  };

  const loginSuccess = () => {
    navigate("/");
    localStorage.setItem("accessToken", ACCESTOKEN_TEST);
  };
  const { handleChange, values, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      shopId: "",
      userName: "",
      password: "",
    },
    onSubmit: (values: IValues) => {
      //call api
      //if success
      if (
        values.shopId === ACC_TEST.shopID &&
        values.userName === ACC_TEST.userName &&
        values.password === ACC_TEST.password
      ) {
        setIsLoginFail(false);
        loginSuccess();
      } else {
        //login failed
        setIsLoginFail(true);
      }
    },
    validationSchema: validationSchemaLogin,
  });
  return (
    <StyledLogin>
      {/* <button onClick={handleLogout}>logout</button> */}
      <h1>Welcome to NitroGate!</h1>
      <h3>Please enter your detail.</h3>

      <form className="form_login" onSubmit={handleSubmit}>
        <label htmlFor="shopId">Shop ID</label>
        <input
          type="input"
          name="shopId"
          id="shopId"
          maxLength={256}
          value={values.shopId}
          placeholder="Enter Shop ID"
          onChange={handleChange}
        />
        {errors.shopId && touched.shopId && <h4 className="error_message">{errors.shopId}</h4>}

        <label htmlFor="userName">User Name</label>
        <input
          type="input"
          name="userName"
          id="userName"
          maxLength={256}
          value={values.userName}
          placeholder="Enter username"
          onChange={handleChange}
        />
        {errors.userName && touched.userName && (
          <h4 className="error_message">{errors.userName}</h4>
        )}

        <label htmlFor="password">Password</label>
        <input
          type="input"
          name="password"
          id="password"
          maxLength={256}
          value={values.password}
          placeholder="Enter password"
          onChange={handleChange}
        />
        {errors.password && touched.password && (
          <h4 className="error_message">{errors.password}</h4>
        )}

        <button type="submit">Login</button>
      </form>
      {isLoginFail ? <p className="login_fail">Login fail</p> : null}

      <h2 onClick={handleForgotPassword}>Forgot password</h2>
    </StyledLogin>
  );
};

const StyledLogin = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 14px;
    color: green;

    cursor: pointer;
  }

  .form_login {
    display: flex;
    flex-direction: column;

    .error_message {
      font-size: 12px;
      color: red;
    }
  }

  .login_fail {
    font-size: 12px;
    color: red;
  }
`;
