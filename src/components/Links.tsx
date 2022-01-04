import React from "react";

export function Links(props: { className: string }) {
  return (
    <div className={props.className}>
      <a href="https://www.instagram.com/nicolamunz/">
        <i className="fa fa-instagram"></i>
      </a>
      <a href="https://www.linkedin.com/in/nicola-munz-466b46204/">
        <i className="fa fa-linkedin"></i>
      </a>
      <a href="https://www.facebook.com/nicola.munz.5">
        <i className="fa fa-facebook"></i>
      </a>
    </div>
  );
}
