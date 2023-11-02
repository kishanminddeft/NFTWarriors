import React, { useState } from "react";
import { Barbarian } from "./Barbarian";
import { Archer } from "./Archer";
import { Giant } from "./Giant";
import { Wizard } from "./Wizard";
import { Goblin } from "./Goblin";

export const Battle = () => {

  const [isAnimating, setIsAnimating] = useState(false);

  const handleAttack = () => {
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
    }, 2000);
  };

  return (
    <div className="bg-image ">
      <div
        className="card"
        style={{
          height: "250px",
          width: "200px",
          backgroundColor: "white",
          position: "absolute",
          top: 0,
          right: 0,
          margin:"100px"
        }}
      >
        <Barbarian />
      </div>
      <div
        className="card"
        style={{
          height: "250px",
          width: "200px",
          backgroundColor: "white",
          position: "absolute",
          margin:"170px",
          bottom: 0,
          left: 0,
          
        }}
      > <Goblin/></div>
      <div className="button-row">
        <button class="btn" type="button">
          <strong>Attack </strong>
          <div id="container-stars">
            <div id="stars"></div>
          </div>

          <div id="glow">
            <div class="circle"></div>
            <div class="circle"></div>
          </div>
        </button>

        <button class="btn" type="button">
          <strong>Defence</strong>
          <div id="container-stars">
            <div id="stars"></div>
          </div>

          <div id="glow">
            <div class="circle"></div>
            <div class="circle"></div>
          </div>
        </button>
      </div>
    </div>
  );
};
