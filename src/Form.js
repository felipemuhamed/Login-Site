import React from "react";

const Form = () => (
  <div className="container">
    <img src="https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100" />
    <form>
      <div className="form-input">
        <input type="text" name="username" placeholder="Usuário" />
      </div>
      <div className="form-input">
        <input type="password" name="password" placeholder="Password" />
      </div>
    </form>
  </div>
);

export default Form;
