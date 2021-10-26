import React from "react";

import "./style.css";

interface IMenuProps {
  children: React.ReactNodeArray;
  checked?: boolean;
  onCkeck: (newValue:boolean) => void;
}

export function Menu(props: IMenuProps) {
  return (
    <div className="menu-wrap">
      <input
        type="checkbox"
        className="toggler"
        onClick={() => props.onCkeck(!props.checked)}
        checked={props.checked}
      />
      <div className="hamburger">
        <div></div>
      </div>
      <div className="menu">
        <div>
          <div>
            <ul>
              {props.children.map((pr) => (
                <li>{pr}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
