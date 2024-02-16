import React from "react";
import { Form, Input, message } from "antd";
import "../styles/RegisterStyle.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  //form handeler
  const onFinishHandler = async (value) => {
    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/user/Login",
        value
      );
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        message.success("Login Sucessfuly");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      message.error("Something Went Wrong");
    }
  };
  return (
    <>
      <div className="form-container">
        <Form
          layout="vertical"
          onFinish={onFinishHandler}
          className="register-form"
        >
          <h3>Login Form</h3>
          <Form.Item label="Email" name="email">
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" required />
          </Form.Item>
          <Link to="/Register">Not a user Register here</Link>
          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </Form>
      </div>
    </>
  );
};

export default Login;
