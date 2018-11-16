import React, { Component } from "react";
import Input from "./input";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" }
  };
  username = React.createRef();
  handleSubmit = e => {
    e.preventDefault();
    const username = this.username.current.value;
    console.log("yoyoyo");
  };
  handlChange = e => {
    const account = { ...this.state.account };
    account.username = e.currentTarget.value;
    this.setState({ account });
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={account.username}
            label="Username"
            onChange={this.handlChange}
          />
          <Input
            name="password"
            value={account.password}
            label="Password"
            onChange={this.handlChange}
          />
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
