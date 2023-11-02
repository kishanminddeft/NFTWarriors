import React from "react";
import { Barbarian } from "./Barbarian";

export const Battle = () => {
  return (
    <div className="bg-image ">
        <div style={{height: '200px', width: '200px', backgroundColor: "white", marginBottom:'60px'}}><Barbarian/></div>
        <div style={{height: '200px', width: '200px', backgroundColor: "white", marginBottom: '20px'}}></div>
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
