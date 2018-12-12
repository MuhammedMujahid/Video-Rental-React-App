import React from "react";
import Joi from "joi-browser";
import Form from "./form";
import { login } from "../../services/authService";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = async () => {
    const { data } = this.state;
    await login(data.username, data.password);
  };

  // validateProperty = ({ name, value }) => {
  //   if (name === "username") {
  //     if (value.trim() === "") return "Username is required.";
  //   }
  //   if (name === "password") {
  //     if (value.trim() === "") return "Password is required.";
  //   }
  // };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}

          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
