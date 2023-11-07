// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import Web3 from 'web3';
import contract from '../utils/contract';
import { useNavigate } from "react-router-dom";


export const Home = ({setPlayerName}) => {
    const [name, setName] = useState();
    const [battlename, setBattlename] = useState();
    const [web3, setWeb3] = useState(null);
    const [account,setAccount]=useState();
    const navigate= useNavigate()

    useEffect(() => {
        const loadWeb3 = async () => {
            if (window.ethereum) {
                const web3 = new Web3(window.ethereum);
                try {
                    await window.ethereum.enable(); // Request user permission to access their Ethereum accounts
                    const ac = (await web3.eth.getAccounts())[0]
                    setAccount(ac)
                    setWeb3(web3);
                } catch (error) {
                    console.error('User denied access to their Ethereum account');
                }
            } else if (window.web3) {
                const web3 = new Web3(window.web3.currentProvider);
                setWeb3(web3);
            } else {
                console.error('No Ethereum wallet detected. You should consider using MetaMask.');
            }
        };

        loadWeb3();
    }, []);

    const CreateBattle = async () => {
        console.log(account)

        const result = await contract?.methods?.registerPlayer("kishan", "gametoken").send({ from: account }).then((result) => {
            // Handle the result of the method call
            console.log('Method result:', result);
        })
            .catch((error) => {
                // Handle errors
                console.error('Error calling contract method:', error);
            });
        console.log(result)
    }

    const RegisterPlayer = async () => {
        const gasLimit = 3000000; 
        const name="kishan"

        console.log(account)
        const result = await contract?.methods.registerPlayer(name,"game").send({ from: account,gas:gasLimit }).then((result) => {
            // Handle the result of the method call
            setPlayerName(name)
            console.log('Method result:', result);
        })
            .catch((error) => {
                // Handle errors
                console.error('Error calling contract method:', error);
            });
        console.log(result)
    }

    return (
        <div>Home
            <input
                className="input input-alt"
                type="text"
                placeholder="Register Player"
                required=""
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                className="input input-alt"
                type="text"
                placeholder="Create Battle"
                required=""
                value={name}
                onChange={(e) => setBattlename(e.target.value)}
            />
            <button onClick={RegisterPlayer}> reg Function</button>
            <button onClick={CreateBattle}> Call Function</button>
        </div>
    )
}
