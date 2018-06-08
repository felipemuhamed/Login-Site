import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { user: "", password: "" };
  }

  componentDidMount() {
    setInterval(function() {
      document.getElementById("image").style.visibility = "visible";
    }, 1200);
  }

  handleButtonClick = e => {
    e.preventDefault();

    if (this.state.user.length !== 0) {
      console.log(this.state.user);
    } else {
      document.getElementById("userNameInput").style.animation =
        "shake-horizontal 0.8s cubic-bezier(0.455, 0.03, 0.515, 0.955) both";

      setTimeout(function() {
        document.getElementById("userNameInput").style.animation = "";
      }, 800);

      console.log("Please, insert your username");
    }

    if (this.state.password.length !== 0) {
      console.log(this.state.password);
    } else {
      document.getElementById("PasswordInput").style.animation =
        "shake-horizontal 0.8s cubic-bezier(0.455, 0.03, 0.515, 0.955) both";

      setTimeout(function() {
        document.getElementById("PasswordInput").style.animation = "";
      }, 800);

      console.log("Please, insert your Password");
    }
  };

  updateUser = e => {
    this.setState({ user: e.target.value });
  };

  updatePassword = e => {
    this.setState({ password: e.target.value });
  };

  render() {
    return (
      <div className="container">
        <img
          id="image"
          alt=""
          src="https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100"
        />
        <form>
          <div className="form-input" id="userNameInput">
            <input
              type="text"
              name="username"
              placeholder="Usuário"
              onChange={this.updateUser}
            />
          </div>
          <div className="form-input" id="PasswordInput">
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.updatePassword}
            />
          </div>
          <input
            type="submit"
            name="submit"
            value="LOGIN"
            className="btn-login"
            onClick={this.handleButtonClick}
          />
          <br />
          <a>Esqueceu a senha?</a>
        </form>
      </div>
    );
  }
}
