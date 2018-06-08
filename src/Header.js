import React, { Component } from "react";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { scroll_s: false };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = e => {
    if (window.scrollY === 0 && this.state.scroll_s === true) {
      this.setState({ scroll_s: false });
    } else if (window.scrollY !== 0 && this.state.scroll_s === false) {
      this.setState({ scroll_s: true });
    }
  };
  render() {
    return (
      <div className="wrapper">
        <nav className={this.state.scroll_s ? "black" : "nav"}>
          <div className="logo">LOGO</div>
          <ul>
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">CONTACT</a>
            </li>
            <li>
              <a href="#" className="active">
                LOGIN
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
