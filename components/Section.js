import React from "react";

export default function Section(props) {
  return (
    <div className="container">
      <div id={props.id} className="section">
        <div className="sectioncontent">
          <h1 className="sectiontitle">{props.title}</h1>
          {props.children}
        </div>
      </div>
      <style jsx>{`
        .section {
          text-align: ${props.textAlign};
          min-height: ${props.height}vh;
        }

        .sectioncontent {
          padding: 5em;
        }
        .sectiontitle{
          margin-bottom: 1em;
        }
      `}</style>
    </div>
  );
}
