// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import Web3 from 'web3';
import contract from '../utils/contract';
import styles from "../css/home.module.css"
import { useNavigate } from 'react-router-dom';


export const Home = () => {
    const [name, setName] = useState();
    const [web3, setWeb3] = useState(null);
    const [account, setAccount] = useState();

    const navigate = useNavigate();

    useEffect(() => {
        const loadWeb3 = async () => {
            if (window.ethereum) {
                const web3 = new Web3(window.ethereum);
                try {
                    await window.ethereum.enable();
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

    const RegisterPlayer = async () => {
        console.log(account)

        const result = await contract?.methods?.registerPlayer(name, "gametoken").send({ from: account })
            .then((result) => {
                console.log('Method result:', result);
                navigate("/createbattle");
            })
            .catch((error) => {
                console.error('Error calling contract method:', error);
            });
        console.log(result)
    }

    // const RegisterPlayer = async () => {
    //     console.log(account);
    //     try {
    //         const gasLimit = await contract?.methods?.registerPlayer(name, "gametoken").estimateGas({ from: account });
    //         // const gasPrice = web3.utils.toWei('20', 'gwei'); 

    //         const result = await contract?.methods?.registerPlayer(name, "gametoken").send({
    //             from: account,
    //             gas: gasLimit,
    //             // gasPrice: gasPrice,
    //         });

    //         console.log('RegisterPlayer result:', result);
    //     } catch (error) {
    //         console.error('Error calling contract method:', error);
    //     }
    // };



    // const get_AllBattles = async () => {
    //     console.log(account)
    //     const result = await contract?.methods.getAllBattles().call().then((result) => {

    //         console.log('get_AllBattles result:', result);
    //     })
    //         .catch((error) => {
    //             console.error('Error calling contract method:', error);
    //         });
    //     console.log(result);
    // }

    return (
        <>
            <div className={styles.someclass}>
                <div className="container">
                    <div className={styles['homeContainer']}>
                        <div className={styles['values']}>
                            <h1 className={styles["heading"]} >  Welcome to NFT Warriors
                                a Web3 NFT Card Game</h1>
                            <p className={styles["paragraph"]}> Connect your wallet to start playing
                                the ultimate Web3 Battle Card Game</p>
                            <input
                                className="input"
                                type="text"
                                placeholder="Enter Player Name"
                                required=""
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <button className={styles['ui-btn']} onClick={RegisterPlayer}>
                                <span>
                                    Register Player
                                </span>
                            </button>
                        </div>
                        {/* <button onClick={get_AllBattles}> getAllBattles</button> */}
                    </div>
                </div>
            </div>

        </>

    )
}
