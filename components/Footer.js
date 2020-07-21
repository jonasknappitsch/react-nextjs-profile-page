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
      
        <div className="gradient" style={{ height: "0.75vh" }}></div>
        <div className="container">
        <div className="row py-4">
          <div className="col-sm-4 pb-2">
          <Link href="/legal">
              <InfoOutlined />
            </Link>
          </div>
          <div className="col-sm-4 pb-2">
            <p>&copy; Jonas Knappitsch 2020 </p>
          </div>
          <div className="col-sm-4">
            
            <Link href="/">
              <HomeRounded />
            </Link>
          </div>
        </div>
        </div>
      </div>
      <style jsx>{`
        .footersection {
          text-align: center;
          min-height: 10vh;
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
