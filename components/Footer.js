import Link from "next/link";
import React from "react";
import {
  InfoOutlined,
  Facebook,
  Instagram,
  HomeRounded,
} from "@material-ui/icons/";
export default function Footer() {
  return (
    <div>
      <div className="footersection">
      <div className="container">
      <div className="footercontent">
        
        <h1 className="footertitle">Newsletter</h1>
          <p>Sign up to receive our latest updates and unique offers</p>
          <form>
            <input
              type="email"
              className="form-control"
              id="emailinput"
              placeholder="Enter email"
            ></input>
            <button
              id="submitbtn"
              type="submit"
              className="btn btn-secondary btn-gradient btn-glow-hover"
            >
              Submit
            </button>
          </form>
          </div>
        </div>
        <div className="gradient" style={{ height: "0.75vh" }}></div>
        <div className="container">
        <div className="row py-4">
          <div className="col-sm-4 pb-2">
            <Link href="www.instagram.com">
              <Instagram />
            </Link>
            <Link href="www.facebook.com">
              <Facebook />
            </Link>
          </div>
          <div className="col-sm-4 pb-2">
            <Link href="/">
              <HomeRounded />
            </Link>
          </div>
          <div className="col-sm-4">
            <Link href="/legal">
              <InfoOutlined />
            </Link>
          </div>
        </div>
        </div>
      </div>
      <style jsx>{`
        .footersection {
          text-align: center;
          min-height: 50vh;
          background-color: black;
          color: lightgrey;
        }

        .footercontent {
          padding-top: 5em;
          padding-bottom: 5em;
        }
        .footertitle {
          color: white;
        }
        .footersection .footercontent h4 a {
          color: white;
        }
        #submitbtn {
          margin-top: 1em;
        }
        form {
          margin: 0 auto;
          width: 70vw;
          max-width: 400px;
        }
      `}</style>
    </div>
  );
}
