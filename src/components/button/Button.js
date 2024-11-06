import React from "react";
import "./Button.scss";

export default function Button({text, className, href, newTab, onClick}) {
  return (
    <div className={className} onClick={onClick}>
      <a
        className="main-button"
        href={href}
        target={newTab ? "_blank" : "_self"}
      >
        {text}
      </a>
    </div>
  );
}
