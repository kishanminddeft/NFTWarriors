import React from "react";

export const Barbarian = () => {
  return (
    <div>
      <div class="wrapper">
        <div class="clash-card barbarian">
          <div class="clash-card__image clash-card__image--barbarian">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/barbarian.png"
              alt="barbarian"
            />
          </div>
         
          <div class="clash-card__unit-name">The Barbarian</div>
          <div class="clash-card__unit-description">
            He has Killer yellow horseshoe mustache.
          </div>

        </div>
      </div>
    </div>
  );
};
