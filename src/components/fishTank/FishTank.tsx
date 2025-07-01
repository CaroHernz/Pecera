import React from "react";

import "./FishTank.css";

import Algae from "../algae/Algae";
import Fish from "../fish/Fish";

export default function FishTank() {
  const fishes = [
    { key: "0", posX: 10, posY: 20 },
    { key: "0", posX: 40, posY: 100 },
    { key: "0", posX: 270, posY: 80 },
    { key: "0", posX: 50, posY: 150 },
  ];
  return (
    <div className="fish-tank">
      <Algae />
      {fishes.map((fish) => (
        <Fish key={fish.key} posX={fish.posX} posY={fish.posY} />
      ))}
    </div>
  );
}
