import React from "react";
import { Form, Input, message } from "antd";
import axios from "axios";
import "../styles/RegisterStyle.css";
import { Link, useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();

  //form handler
  const onFinishHandler = async (value) => {
    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/user/Register",
        value
      );
      if (res.data.success) {
        message.success("Register Sucessfuly!");
        navigate("/Login");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error.response.data);
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
          <h3>Register Form</h3>
          <Form.Item label="Name" name="name">
            <Input type="text" required />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" required />
          </Form.Item>
          <Form.Item label="Role" name="role">
            <select>
              <option value="isAdmin" name="isAdmin" required>
                Patient
              </option>
              <option value="isDoctor" name="isDoctor" required>
                Doctor
              </option>
            </select>
          </Form.Item>
          <Link to="/Login">Alrady user login here</Link>
          <button className="btn btn-primary" type="submit">
            Register
          </button>
        </Form>
      </div>
    </>
  );
};

export default Register;
