import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const userApi = "https://api-for-missions-and-railways.herokuapp.com/signin";
  const handleSubmit = (data: any) => {
    console.log(data);
    axios
      .post(userApi, {
        email: data.email,
        password: data.password,
      })
      .then(function (response) {
        // signin(response.data.token);
        console.log(response);
        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
        // if (error.response.status === 403) {
        //   setAlert(error);
        // }
      });
  };

  return (
    <>
      <h1>ログイン</h1>
      <form onSubmit={handleSubmit}>
        <label>メールアドレス</label>
        <input name="email" type="email" />
        <label>パスワード</label>
        <input name="password" type="password" />
        <button type="submit">ログイン</button>
      </form>
    </>
  );
};

export default SignIn;
