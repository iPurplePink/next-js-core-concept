import React from "react";
import Link from "next/link";

const Error = () => {
  return (
    <div>
      <h1>Page not found.</h1>
      <p>
        Go to <Link href="/">Home</Link>
      </p>
    </div>
  );
};

export default Error;
