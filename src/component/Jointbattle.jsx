import React, { useEffect, useState } from "react";
import contract from "../utils/contract";

export const Jointbattle = ({ account,setBattlegame}) => {
  const [Battle, setBattle] = useState();

  const getbattles = async () => {
    const result = await contract?.methods
      .getAllBattles()
      .call()
      .then((result) => {
        // Handle the result of the method call
        console.log("Method result:", result);

        setBattle(result);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error calling contract method:", error);
      });
  };
  
  const join=async(name)=>{
    console.log("Button CLick : ",name)

    const result = await contract?.methods
    .joinBattle(name)
    .send({from:account})
    .then((result) => {
        setBattlegame(name)
      // Handle the result of the method call
      console.log("Method result:", result);

    })
    .catch((error) => {
      // Handle errors
      console.error("Error calling contract method:", error);
    });

  }

  useEffect(() => {
    getbattles();
  }, []);

  return (
    <>
        <div className="joinbattle">
          <h1>Join Battle</h1>
          <ol>
            {Battle?.map((record, index) => (
              <li key={index} style={{ display: "flex" }}>
               <div style={{ flex: 1 }}>
                  <p>{index}</p>
                </div>
                <div style={{ flex: 1 }}>
                  <p>{record.name}</p>
                </div>
                <div style={{ flex: 1 }}>
                  <p>{record.div}</p>
                </div>
                <div style={{ flex: 1 }}>
                <p> <a href='#'  onClick={() => join(record.name)}>Join</a></p>
                </div>
              </li>
            ))}
          </ol>
        </div>

      
    </>
  );
};
