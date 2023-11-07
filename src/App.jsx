import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Battle } from "./component/Battle";
import { Home } from "./component/Home";
import { CreateBattle } from "./component/createBattle";
import { useEffect, useState } from "react";
import { Jointbattle } from "./component/Jointbattle";
import Web3 from 'web3';

function App() {
  const [account, setAccount] = useState();
  const [PlayerName,setPlayerName]=useState();
  const [battle,setBattlegame]=useState();

  useEffect(() => {
    const loadWeb3 = async () => {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
          await window.ethereum.enable(); // Request user permission to access their Ethereum accounts
          const ac = (await web3.eth.getAccounts())[0];
          setAccount(ac);
        } catch (error) {
          console.error("User denied access to their Ethereum account");
        }
      } else {
        console.error(
          "No Ethereum wallet detected. You should consider using MetaMask."
        );
      }
    };

    loadWeb3();
  }, []);

  return (
    <>
      <>
        <BrowserRouter>
          <Routes>
            <Route
              exact
              path="/"
              element={
                // eslint-disable-next-line react/jsx-pascal-case
                <Home setPlayerName={setPlayerName}/>
              }
            />

            <Route
              exact
              path="/battle"
              element={
                // eslint-disable-next-line react/jsx-pascal-case
                <Battle account={account} PlayerName={PlayerName} battle={battle}/>
              }
            />

            <Route
              exact
              path="/createbattle"
              element={
                // eslint-disable-next-line react/jsx-pascal-case
                <CreateBattle account={account}/>
              }
            />

            <Route
              exact
              path="/joinbattle"
              element={
                // eslint-disable-next-line react/jsx-pascal-case
                <Jointbattle account={account} setBattlegame={setBattlegame}/>
              }
            />
          </Routes>
        </BrowserRouter>
      </>
    </>
  );
}

export default App;
