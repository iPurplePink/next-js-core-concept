import React, { Component } from "react";
import Link from "next/link";

class Static extends Component {
  static getInitialProps(context) {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ appName: "Super App" });
      });
    }, 1000);
    return promise;
  }

  render() {
    return (
      <div>
        <h1>Static</h1>
        <h2>{this.props.appName}</h2>
        <p>
          Go to <Link href="/">Home</Link>
        </p>
      </div>
    );
  }
}

export default Static;
