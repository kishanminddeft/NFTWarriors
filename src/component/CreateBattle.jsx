// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import contract from '../utils/contract';
import styles from "../css/createbattle.module.css"
import logo from "../assets/blacklogo.png"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Loader } from './loader';


const CreateBattle = ({ account }) => {
    const [battlename, setBattlename] = useState();
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const Create_Battle = async () => {
        setLoading(true);
        console.log(account)
        const result = await contract?.methods?.createBattle(battlename).send({ from: account }).then((result) => {
            console.log('Create_Battle result:', result);
            setLoading(false);
            navigate("/battle");
        })
            .catch((error) => {
                console.error('Error calling contract method:', error);
            });
        console.log(result)
    }
    return (
        <>
            <div className={styles.someclass}>
                <div className="container">
                    <div className={styles['homeContainer']}>
                        <Link className="navbar-brand" to="/">
                            <img src={logo} className={styles["logo"]} alt="..." />
                        </Link>
                        <div className={styles['values']}>
                            <h1 className={styles["heading"]} >  Welcome to NFT Warriors
                                a Web3 Card Game</h1>
                            <p className={styles["paragraph"]}> Connect your wallet to start playing
                                the ultimate Web3 Battle Card Game</p>
                            <input
                                className="input input-alt"
                                type="text"
                                placeholder="Enter Battle Name"
                                required=""
                                value={battlename}
                                onChange={(e) => setBattlename(e.target.value)}
                            />
                            <button className={styles['ui-btn']} onClick={Create_Battle}>
                                <span>
                                    Create Battle
                                </span>
                            </button>
                            {loading && (<Loader />)}
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default CreateBattle