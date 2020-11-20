import React from "react";
import Router from "next/router";
import User from "../../components/User";

const Auth = () => {
  const handleHomeClick = () => {
    Router.push("/");
  };
  return (
    <div>
      <h1>Auth</h1>
      <button onClick={handleHomeClick}>Go to Home</button>
      <User name="Maridin" email="maridinsanmiguel@gmail.com"></User>
    </div>
  );
};

export default Auth;
