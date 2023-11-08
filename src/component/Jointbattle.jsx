/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
import contract from "../utils/contract";
import styles from "../css/joinbattle.module.css"
import logo from "../assets/logo.png"
import { Link } from "react-router-dom";
import { Loader } from './loader';


export const Jointbattle = ({ account, setBattlegame }) => {
  const [Battle, setBattle] = useState();
  const [loading, setLoading] = useState(false);

  const getbattles = async () => {
    setLoading(true);

    const result = await contract?.methods
      .getAllBattles()
      .call()
      .then((result) => {
        console.log("Method result:", result);

        setBattle(result);
        setLoading(false);

      })
      .catch((error) => {
        console.error("Error calling contract method:", error);
      });
  };

  const join = async (name) => {
    setLoading(true);

    console.log("Button CLick : ", name)

    const result = await contract?.methods
      .joinBattle(name)
      .send({ from: account })
      .then((result) => {
        setBattlegame(name)
        console.log("Method result:", result);
        setLoading(false);

      })
      .catch((error) => {
        console.error("Error calling contract method:", error);
      });

  }

  useEffect(() => {
    getbattles();
  }, []);

  return (
    <>
      <div className={styles.someclass}>
        <div className={styles['homeContainer']}>
          <Link className="navbar-brand" to="/">
            <img src={logo} className={styles["logo"]} alt="..." />
          </Link>
          <div className={styles['values']}>
            <h1 className={styles["heading"]}>Join Live Battles</h1>
            <table>
              <thead>
                <tr>

                  <th>Index</th>
                  <th>Battle Name</th>
                  <th>Join Action</th>
                </tr>
              </thead>
              <tbody>
                {Battle?.map((record, index) => (
                  <tr key={index}>
                    <td>{index}</td>
                    <td>{record.name}</td>
                    <td>
                      <a href="#" onClick={() => join(record.name)}>Join</a>
                    </td>
                  </tr>
                ))}
                {loading && (<Loader />)}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </>
  );
};
