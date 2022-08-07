import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

type signUp = {
  name: string;
  email: string;
  password: string;
};

const SignUp = () => {
  const navigate = useNavigate();
  const userApi = "https://api-for-missions-and-railways.herokuapp.com/users";
  const handleSubmit = (data: any) => {
    console.log(data);
    axios
      .post(userApi, {
        name: data.name,
        email: data.email,
        password: data.password,
      })
      .then(function (response) {
        console.log(response);
        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <h1>ユーザ登録</h1>
      <form onSubmit={handleSubmit}>
        <label>名前</label>
        <input name="name" type="name" />
        <label>メールアドレス</label>
        <input name="email" type="email" />
        <label>パスワード</label>
        <input name="password" type="password" />
        <button type="submit">登録</button>
      </form>
    </>
  );
};

export default SignUp;
