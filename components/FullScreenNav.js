import React from "react";
import Link from "next/link";
import {Menu, HomeRounded, Close} from '@material-ui/icons/';

function openNav() {
  document.getElementById("myNav").style.left = "0";
}

function closeNav() {
  document.getElementById("myNav").style.left = "100%";
}

export default function FullScreenNav() {
  return (
    <div>
      <div id="myNav" className="overlay">
        <a className="closebtn" onClick={closeNav}>
          <Close fontSize="large"/>
        </a>
        <div className="overlay-content">
        <a href="/" onClick={closeNav}><HomeRounded fontSize="large"/> </a>
          <a href="/#whoweare" onClick={closeNav}>About</a>
          <a href="/#whatwedo" onClick={closeNav}>Services</a>
          <a href="/#contact" onClick={closeNav}>Contact</a>
        </div>
      </div>

      <nav className="navbar navbar-expand navbar-light bg-light fixed-top p-3">
        <div className="container">
          <a className="navbar-brand" href="/">
            Wolkenstein
          </a>
          <br></br>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                  <Menu onClick={openNav} fontSize="large" className="grow"/>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <style jsx>{`
        .overlay {
            height: 100%;
            width: 100%;
            position: fixed;
            z-index: 100000000;
            top: 0;
            left: 100%;
            background-color: rgb(0,0,0);
            background-color: rgba(0,0,0, 0.9);
            overflow-x: hidden;
            transition: 0.5s;
          }
          
          .overlay-content {
            position: relative;
            top: 25%;
            width: 100%;
            text-align: center;
            margin-top: 30px;
          }
          
          .overlay a {
            padding: 8px;
            text-decoration: none;
            font-size: 36px;
            color: #818181;
            display: block;
            transition: 0.3s;
          }
          
          .overlay a:hover, .overlay a:focus {
            color: #f1f1f1;
          }
          
          .overlay .closebtn {
            position: absolute;
            top: -20px;
            right: calc(50vw - 25px);
          }
          
          @media screen and (max-width: 580px) {
            .overlay .closebtn {
            font-size: 40px;
            top: -5px;
            right: 40px;
            }
          }
          @media screen and (min-width: 581px) {
            .overlay .closebtn {
            font-size: 40px;
            top: -5px;
            right: calc(50% - 245px);;
            }
          }
          @media screen and (min-width: 768px) {
            .overlay .closebtn {
            font-size: 40px;
            top: -5px;
            right: calc(50% - 335px);
            }
          }
          @media screen and (min-width: 993px) {
            .overlay .closebtn {
            font-size: 40px;
            top: -5px;
            right: calc(50% - 455px);
            }
          }
          @media screen and (min-width: 1200px) {
            .overlay .closebtn {
            font-size: 40px;
            top: -5px;
            right: calc(50% - 545px);
            }
          }
      `}</style>

      

    </div>
  );
}
