import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>
        Go to <Link href="/auth">Auth</Link>
        Go to <Link href="/static/class">Class</Link>
        Go to <Link href="/static/functional">Functional</Link>
      </p>
    </div>
  );
};

export default Home;
