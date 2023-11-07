import React, { useEffect, useState } from "react";
import contract from "../utils/contract";

export const CreateBattle = ({account}) => {

    const [BattleName,setBattleName]=useState();

    const callcreatebattle=async()=>{
        const gasLimit = 300000; 
        
        const result = await contract?.methods.createBattle(BattleName).send({ from: account,gas:gasLimit }).then((result) => {
            // Handle the result of the method call
            console.log('Method result:', result);
        })
            .catch((error) => {
                // Handle errors
                console.error('Error calling contract method:', error);
            });
            console.log(result)
    }

 

  return (

    <div>
        <input type="text" className="input2" placeholder="Write here..." onChange={(e)=>{setBattleName(e.target.value)}}/>

        
      <button className="btn2" onClick={callcreatebattle}>
        <svg
          height="24"
          width="24"
          fill="#FFFFFF"
          viewBox="0 0 24 24"
          data-name="Layer 1"
          id="Layer_1"
          className="sparkle"
        >
          <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
        </svg>

        <span className="text">Create Battle</span>
      </button>
    </div>
  );
};
