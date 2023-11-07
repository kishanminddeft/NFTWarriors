// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import Web3 from 'web3';
import contract from '../utils/contract';

const CreateBattle = () => {
    const [battlename, setBattlename] = useState();
    const [web3, setWeb3] = useState(null);
    const [account, setAccount] = useState();

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


    const Create_Battle = async () => {
        console.log(account)
        const result = await contract?.methods?.createBattle(battlename).send({ from: account }).then((result) => {
            console.log('Create_Battle result:', result);
        })
            .catch((error) => {
                console.error('Error calling contract method:', error);
            });
        console.log(result)
    }
    return (
        <>
            <input
                className="input input-alt"
                type="text"
                placeholder="Create Battle"
                required=""
                value={battlename}
                onChange={(e) => setBattlename(e.target.value)}
            />
            <button onClick={Create_Battle}> CreateBattle</button>
        </>
    )
}

export default CreateBattle