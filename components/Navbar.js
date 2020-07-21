import React, { Component } from "react";
import Link from "next/link";
export default class Navbar extends Component {
  render() {
    return (
      <div>
      <nav className="navbar navbar-expand navbar-light bg-light p-3">
        <div className="container">
          <a className="navbar-brand" href="/">
            Wolkenstein
          </a>
          <br></br>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link">Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about">
                  <a className="nav-link">About</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
    );
  }
}
