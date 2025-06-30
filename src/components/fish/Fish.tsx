import React from "react";

import "./Fish.css";

type Props = {
  posX: number;
  posY: number;
};

export default function Fish({ posX, posY }: Props) {
  return (
    <div className="fish" style={{ left: posX, top: posY }}>
      <div className="fish-body">
        <div className="fish-eye"></div>
      </div>
      <div className="fish-tail">
        <div className="fish-tail-inner"></div>
      </div>
    </div>
  );
}
