import React, { useState } from "react";
import { Barbarian } from "./Barbarian";
import { Archer } from "./Archer";
import { Giant } from "./Giant";
import { Wizard } from "./Wizard";
import { Goblin } from "./Goblin";
import contract from "../utils/contract";

export const Battle = ({account,PlayerName,battle}) => {

  const [isAnimating, setIsAnimating] = useState(false);

  const handleAttack = () => {
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
    }, 2000);
  };

  const attack=async()=>{
    

    const gasLimit = 300000; 
    const result = await contract?.methods.attackOrDefendChoice('1',battle).send({ from:account,gas:gasLimit }).then((result) => {
        // Handle the result of the method call
        console.log('Method result:', result);
    })
        .catch((error) => {
            // Handle errors
            console.error('Error calling contract method:', error);
        });

  }

  const defence=async()=>{
    const gasLimit = 300000; 
        
    const result = await contract?.methods.attackOrDefendChoice(2,battle).send({ from: account,gas:gasLimit }).then((result) => {
        // Handle the result of the method call
        console.log('Method result:', result);
    })
        .catch((error) => {
            // Handle errors
            console.error('Error calling contract method:', error);
        });
    
  }

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
      {battle ? <h2 style={{color:"white"}}>{battle}</h2> :<h2 style={{color:"white"}}>Battle Name</h2>}
      
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
      > <Goblin/>{PlayerName ? <h3 style={{color:'white'}}>{PlayerName}</h3>:<h3 style={{color:'white'}}> PlayerName</h3>}</div>
      <div className="button-row">
        <button className="btn" type="button" onClick={attack}>
          <strong>Attack </strong>
          <div id="container-stars">
            <div id="stars"></div>
          </div>

          <div id="glow">
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </button>

        <button className="btn" type="button" onClick={defence}>
          <strong>Defence</strong>
          <div id="container-stars">
            <div id="stars"></div>
          </div>

          <div id="glow">
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </button>
      </div>
    </div>
  );
};
