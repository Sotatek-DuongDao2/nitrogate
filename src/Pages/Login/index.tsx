import React, { useState } from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";

import { colors } from "@utils";

import { ACCESTOKEN_TEST, ACC_TEST } from "@configs";
import { validationSchemaLogin } from "@utils";
import { StyledInput, StyledButton } from "@styles";

interface IValues {
  shopId: string;
  userName: string;
  password: string;
}

export const Login = () => {
  const navigate = useNavigate();
  const [isLoginFail, setIsLoginFail] = useState<boolean>(false);
  // const [isVisibleLogin, setIsVisibleLogin] = useState<boolean>(true);

  const handleForgotPassword = () => {
    navigate("/reset-password");
  };

  const loginSuccess = () => {
    navigate("/");
    localStorage.setItem("accessToken", ACCESTOKEN_TEST);
  };

  const accessToken = localStorage.getItem("accessToken");

  React.useEffect(() => {
    if (accessToken) {
      navigate("/");
    }
  }, []);
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
      <h1>Welcome to HeliumPay</h1>
      <h3>Please enter your detail.</h3>

      <form className="form_login" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="shopId">Shop ID</label>
          <StyledInput className={clsx(errors.shopId && touched.shopId && "error_input")}>
            <input
              type="input"
              name="shopId"
              id="shopId"
              maxLength={256}
              value={values.shopId}
              placeholder="Enter Shop ID"
              onChange={handleChange}
            />
          </StyledInput>
          {errors.shopId && touched.shopId && <h4 className="error_message">{errors.shopId}</h4>}
        </div>

        <div>
          <label htmlFor="userName">Username</label>
          <StyledInput className={clsx(errors.userName && touched.userName && "error_input")}>
            <input
              type="input"
              name="userName"
              id="userName"
              maxLength={256}
              value={values.userName}
              placeholder="Enter username"
              onChange={handleChange}
            />
          </StyledInput>
          {errors.userName && touched.userName && (
            <h4 className="error_message">{errors.userName}</h4>
          )}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <StyledInput className={clsx(errors.password && touched.password && "error_input")}>
            <input
              type="password"
              name="password"
              id="password"
              maxLength={256}
              value={values.password}
              placeholder="Enter password"
              onChange={handleChange}
            />
          </StyledInput>
          {errors.password && touched.password && (
            <h4 className="error_message">{errors.password}</h4>
          )}
        </div>

        <StyledButton className="login_btn">
          <button type="submit">Login</button>
        </StyledButton>
      </form>
      {isLoginFail ? <p className="login_fail">Incorrect Shop ID, Username or Password</p> : null}

      <h2 className="forgot_password" onClick={handleForgotPassword}>
        Forgot password?
      </h2>
    </StyledLogin>
  );
};

const StyledLogin = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: left;

  h1,
  h2,
  h3 {
    margin: 0;
  }

  h1 {
    color: ${colors.primaryNavy};

    font-weight: 900;
    font-size: 32px;
    line-height: 42px;

    letter-spacing: -0.015em;
  }

  h2 {
    font-size: 14px;
    color: green;

    cursor: pointer;
  }

  h3 {
    font-weight: 400;
    margin-top: 4px;
  }

  h3,
  label {
    font-size: 14px;
    line-height: 22px;

    letter-spacing: -0.2px;

    color: #626674;
  }

  .form_login {
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    gap: 16px;

    label {
      font-weight: 600;
    }

    input {
      margin-top: 5px;
      width: 100%;
    }

    .login_btn {
      margin-top: 16px;
    }

    .error_message {
    }

    .error_input {
      input {
        border: 2px solid #de3210;
      }
    }
  }

  .login_fail,
  .error_message {
    margin-top: 5px;
    font-size: 12px;
    color: red;
  }

  .forgot_password {
    color: #1e87f0;
    margin-top: 10px;
  }
`;
