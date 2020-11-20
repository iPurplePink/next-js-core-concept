import React from "react";

const User = ({ name, email }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
      <style jsx>{`
        div {
          border: 1px solid #eee;
          box-shadow: 0 2px 3px #ccc;
          padding: 20px;
          text-align: center;
          width: 50%;
          margin: auto;
        }
      `}</style>
    </div>
  );
};

export default User;
