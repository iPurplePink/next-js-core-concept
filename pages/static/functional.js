import React from "react";
import Link from "next/link";

const Functional = (props) => {
  return (
    <div>
      <h1>Functional</h1>
      <h2>{props.appName}</h2>
      <p>
        Go to <Link href="/">Home</Link>
      </p>
    </div>
  );
};

Functional.getInitialProps = (context) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ appName: "Super App" });
    });
  }, 1000);
  return promise;
};
export default Functional;
