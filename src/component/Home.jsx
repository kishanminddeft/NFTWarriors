// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import Web3 from 'web3';
import contract from '../utils/contract';
export const Home = () => {
    const [name, setName] = useState();
    const [battlename, setBattlename] = useState();
    const [web3, setWeb3] = useState(null);
    const [account, setAccount] = useState();

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

    const RegisterPlayer = async () => {
        console.log(account)

        // const contractABI = [
        //     {
        //         "inputs": [
        //             {
        //                 "internalType": "string",
        //                 "name": "_metadataURI",
        //                 "type": "string"
        //             },
        //             {
        //                 "internalType": "address",
        //                 "name": "owner",
        //                 "type": "address"
        //             }
        //         ],
        //         "stateMutability": "nonpayable",
        //         "type": "constructor"
        //     },
        //     {
        //         "inputs": [
        //             {
        //                 "internalType": "address",
        //                 "name": "sender",
        //                 "type": "address"
        //             },
        //             {
        //                 "internalType": "uint256",
        //                 "name": "balance",
        //                 "type": "uint256"
        //             },
        //             {
        //                 "internalType": "uint256",
        //                 "name": "needed",
        //                 "type": "uint256"
        //             },
        //             {
        //                 "internalType": "uint256",
        //                 "name": "tokenId",
        //                 "type": "uint256"
        //             }
        //         ],
        //         "name": "ERC1155InsufficientBalance",
        //         "type": "error"
        //     },
        //     {
        //         "inputs": [
        //             {
        //                 "internalType": "address",
        //                 "name": "approver",
        //                 "type": "address"
        //             }
        //         ],
        //         "name": "ERC1155InvalidApprover",
        //         "type": "error"
        //     },
        //     {
        //         "inputs": [
        //             {
        //                 "internalType": "uint256",
        //                 "name": "idsLength",
        //                 "type": "uint256"
        //             },
        //             {
        //                 "internalType": "uint256",
        //                 "name": "valuesLength",
        //                 "type": "uint256"
        //             }
        //         ],
        //         "name": "ERC1155InvalidArrayLength",
        //         "type": "error"
        //     },
        //     {
        //         "inputs": [
        //             {
        //                 "internalType": "address",
        //                 "name": "operator",
        //                 "type": "address"
        //             }
        //         ],
        //         "name": "ERC1155InvalidOperator",
        //         "type": "error"
        //     },
        //     {
        //         "inputs": [
        //             {
        //                 "internalType": "address",
        //                 "name": "receiver",
        //                 "type": "address"
        //             }
        //         ],
        //         "name": "ERC1155InvalidReceiver",
        //         "type": "error"
        //     },
        //     {
        //         "inputs": [
        //             {
        //                 "internalType": "address",
        //                 "name": "sender",
        //                 "type": "address"
        //             }
        //         ],
        //         "name": "ERC1155InvalidSender",
        //         "type": "error"
        //     },
        //     {
        //         "inputs": [
        //             {
        //                 "internalType": "address",
        //                 "name": "operator",
        //                 "type": "address"
        //             },
        //             {
        //                 "internalType": "address",
        //                 "name": "owner",
        //                 "type": "address"
        //             }
        //         ],
        //         "name": "ERC1155MissingApprovalForAll",
        //         "type": "error"
        //     },
        //     {
        //         "inputs": [
        //             {
        //                 "internalType": "address",
        //                 "name": "owner",
        //                 "type": "address"
        //             }
        //         ],
        //         "name": "OwnableInvalidOwner",
        //         "type": "error"
        //     },
        //     {
        //         "inputs": [
        //             {
        //                 "internalType": "address",
        //                 "name": "account",
        //                 "type": "address"
        //             }
        //         ],
        //         "name": "OwnableUnauthorizedAccount",
        //         "type": "error"
        //     },
        //     {
        //         "anonymous": false,
        //         "inputs": [
        //             {
        //                 "indexed": true,
        //                 "internalType": "address",
        //                 "name": "account",
        //                 "type": "address"
        //             },
        //             {
        //                 "indexed": true,
        //                 "internalType": "address",
        //                 "name": "operator",
        //                 "type": "address"
        //             },
        //             {
        //                 "indexed": false,
        //                 "internalType": "bool",
        //                 "name": "approved",
        //                 "type": "bool"
        //             }
        //         ],
        //         "name": "ApprovalForAll",
        //         "type": "event"
        //     },
        //     {
        //         "anonymous": false,
        //         "inputs": [
        //             {
        //                 "indexed": false,
        //                 "internalType": "string",
        //                 "name": "battleName",
        //                 "type": "string"
        //             },
        //             {
        //                 "indexed": true,
        //                 "internalType": "address",
        //                 "name": "winner",
        //                 "type": "address"
        //             },
        //             {
        //                 "indexed": true,
        //                 "internalType": "address",
        //                 "name": "loser",
        //                 "type": "address"
        //             }
        //         ],
        //         "name": "BattleEnded",
        //         "type": "event"
        //     },
        //     {
        //         "anonymous": false,
        //         "inputs": [
        //             {
        //                 "indexed": true,
        //                 "internalType": "string",
        //                 "name": "battleName",
        //                 "type": "string"
        //             },
        //             {
        //                 "indexed": true,
        //                 "internalType": "bool",
        //                 "name": "isFirstMove",
        //                 "type": "bool"
        //             }
        //         ],
        //         "name": "BattleMove",
        //         "type": "event"
        //     },
        //     {
        //         "anonymous": false,
        //         "inputs": [
        //             {
        //                 "indexed": false,
        //                 "internalType": "string",
        //                 "name": "battleName",
        //                 "type": "string"
        //             },
        //             {
        //                 "indexed": true,
        //                 "internalType": "address",
        //                 "name": "player1",
        //                 "type": "address"
        //             },
        //             {
        //                 "indexed": true,
        //                 "internalType": "address",
        //                 "name": "player2",
        //                 "type": "address"
        //             }
        //         ],
        //         "name": "NewBattle",
        //         "type": "event"
        //     },
        //     {
        //         "anonymous": false,
        //         "inputs": [
        //             {
        //                 "indexed": true,
        //                 "internalType": "address",
        //                 "name": "owner",
        //                 "type": "address"
        //             },
        //             {
        //                 "indexed": false,
        //                 "internalType": "uint256",
        //                 "name": "id",
        //                 "type": "uint256"
        //             },
        //             {
        //                 "indexed": false,
        //                 "internalType": "uint256",
        //                 "name": "attackStrength",
        //                 "type": "uint256"
        //             },
        //             {
        //                 "indexed": false,
        //                 "internalType": "uint256",
        //                 "name": "defenseStrength",
        //                 "type": "uint256"
        //             }
        //         ],
        //         "name": "NewGameToken",
        //         "type": "event"
        //     },
        //     {
        //         "anonymous": false,
        //         "inputs": [
        //             {
        //                 "indexed": true,
        //                 "internalType": "address",
        //                 "name": "owner",
        //                 "type": "address"
        //             },
        //             {
        //                 "indexed": false,
        //                 "internalType": "string",
        //                 "name": "name",
        //                 "type": "string"
        //             }
        //         ],
        //         "name": "NewPlayer",
        //         "type": "event"
        //     },
        //     {
        //         "anonymous": false,
        //         "inputs": [
        //             {
        //                 "indexed": true,
        //                 "internalType": "address",
        //                 "name": "previousOwner",
        //                 "type": "address"
        //             },
        //             {
        //                 "indexed": true,
        //                 "internalType": "address",
        //                 "name": "newOwner",
        //                 "type": "address"
        //             }
        //         ],
        //         "name": "OwnershipTransferred",
        //         "type": "event"
        //     },
        //     {
        //         "anonymous": false,
        //         "inputs": [
        //             {
        //                 "indexed": false,
        //                 "internalType": "address[2]",
        //                 "name": "damagedPlayers",
        //                 "type": "address[2]"
        //             }
        //         ],
        //         "name": "RoundEnded",
        //         "type": "event"
        //     },
        //     {
        //         "anonymous": false,
        //         "inputs": [
        //             {
        //                 "indexed": true,
        //                 "internalType": "address",
        //                 "name": "operator",
        //                 "type": "address"
        //             },
        //             {
        //                 "indexed": true,
        //                 "internalType": "address",
        //                 "name": "from",
        //                 "type": "address"
        //             },
        //             {
        //                 "indexed": true,
        //                 "internalType": "address",
        //                 "name": "to",
        //                 "type": "address"
        //             },
        //             {
        //                 "indexed": false,
        //                 "internalType": "uint256[]",
        //                 "name": "ids",
        //                 "type": "uint256[]"
        //             },
        //             {
        //                 "indexed": false,
        //                 "internalType": "uint256[]",
        //                 "name": "values",
        //                 "type": "uint256[]"
        //             }
        //         ],
        //         "name": "TransferBatch",
        //         "type": "event"
        //     },
        //     {
        //         "anonymous": false,
        //         "inputs": [
        //             {
        //                 "indexed": true,
        //                 "internalType": "address",
        //                 "name": "operator",
        //                 "type": "address"
        //             },
        //             {
        //                 "indexed": true,
        //                 "internalType": "address",
        //                 "name": "from",
        //                 "type": "address"
        //             },
        //             {
        //                 "indexed": true,
        //                 "internalType": "address",
        //                 "name": "to",
        //                 "type": "address"
        //             },
        //             {
        //                 "indexed": false,
        //                 "internalType": "uint256",
        //                 "name": "id",
        //                 "type": "uint256"
        //             },
        //             {
        //                 "indexed": false,
        //                 "internalType": "uint256",
        //                 "name": "value",
        //                 "type": "uint256"
        //             }
        //         ],
        //         "name": "TransferSingle",
        //         "type": "event"
        //     },
        //     {
        //         "anonymous": false,
        //         "inputs": [
        //             {
        //                 "indexed": false,
        //                 "internalType": "string",
        //                 "name": "value",
        //                 "type": "string"
        //             },
        //             {
        //                 "indexed": true,
        //                 "internalType": "uint256",
        //                 "name": "id",
        //                 "type": "uint256"
        //             }
        //         ],
        //         "name": "URI",
        //         "type": "event"
        //     },
        //     {
        //         "inputs": [],
        //         "name": "CELESTION",
        //         "outputs": [
        //             {
        //                 "internalType": "uint256",
        //                 "name": "",
        //                 "type": "uint256"
        //             }
        //         ],
        //         "stateMutability": "view",
        //         "type": "function"
        //     },
        //     {
        //         "inputs": [],
        //         "name": "DEVIL",
        //         "outputs": [
        //             {
        //                 "internalType": "uint256",
        //                 "name": "",
        //                 "type": "uint256"
        //             }
        //         ],
        //         "stateMutability": "view",
        //         "type": "function"
        //     },
        //     {
        //         "inputs": [],
        //         "name": "FIREBIRD",
        //         "outputs": [
        //             {
        //                 "internalType": "uint256",
        //                 "name": "",
        //                 "type": "uint256"
        //             }
        //         ],
        //         "stateMutability": "view",
        //         "type": "function"
        //     },
        //     {
        //         "inputs": [],
        //         "name": "GRIFFIN",
        //         "outputs": [
        //             {
        //                 "internalType": "uint256",
        //                 "name": "",
        //                 "type": "uint256"
        //             }
        //         ],
        //         "stateMutability": "view",
        //         "type": "function"
        //     },
        //     {
        //         "inputs": [],
        //         "name": "KAMO",
        //         "outputs": [
        //             {
        //                 "internalType": "uint256",
        //                 "name": "",
        //                 "type": "uint256"
        //             }
        //         ],
        //         "stateMutability": "view",
        //         "type": "function"
        //     },
        //     {
        //         "inputs": [],
        //         "name": "KUKULKAN",
        //         "outputs": [
        //             {
        //                 "internalType": "uint256",
        //                 "name": "",
        //                 "type": "uint256"
        //             }
        //         ],
        //         "stateMutability": "view",
        //         "type": "function"
        //     },
        //     {
        //         "inputs": [],
        //         "name": "MAX_ATTACK_DEFEND_STRENGTH",
        //         "outputs": [
        //             {
        //                 "internalType": "uint256",
        //                 "name": "",
        //                 "type": "uint256"
        //             }
        //         ],
        //         "stateMutability": "view",
        //         "type": "function"
        //     },
        //     {
        //         "inputs": [
        //             {
        //                 "internalType": "uint8",
        //                 "name": "_choice",
        //                 "type": "uint8"
        //             },
        //             {
        //                 "internalType": "string",
        //                 "name": "_battleName",
        //                 "type": "string"
        //             }
        //         ],
        //         "name": "attackOrDefendChoice",
        //         "outputs": [],
        //         "stateMutability": "nonpayable",
        //         "type": "function"
        //     },
        //     {
        //         "inputs": [
        //             {
        //                 "internalType": "address",
        //                 "name": "account",
        //                 "type": "address"
        //             },
        //             {
        //                 "internalType": "uint256",
        //                 "name": "id",
        //                 "type": "uint256"
        //             }
        //         ],
        //         "name": "balanceOf",
        //         "outputs": [
        //             {
        //                 "internalType": "uint256",
        //                 "name": "",
        //                 "type": "uint256"
        //             }
        //         ],
        //         "stateMutability": "view",
        //         "type": "function"
        //     },
        //     {
        //         "inputs": [
        //             {
        //                 "internalType": "address[]",
        //                 "name": "accounts",
        //                 "type": "address[]"
        //             },
        //             {
        //                 "internalType": "uint256[]",
        //                 "name": "ids",
        //                 "type": "uint256[]"
        //             }
        //         ],
        //         "name": "balanceOfBatch",
        //         "outputs": [
        //             {
        //                 "internalType": "uint256[]",
        //                 "name": "",
        //                 "type": "uint256[]"
        //             }
        //         ],
        //         "stateMutability": "view",
        //         "type": "function"
        //     },
        //     {
        //         "inputs": [],
        //         "name": "baseURI",
        //         "outputs": [
        //             {
        //                 "internalType": "string",
        //                 "name": "",
        //                 "type": "string"
        //             }
        //         ],
        //         "stateMutability": "view",
        //         "type": "function"
        //     },
        //     {
        //         "inputs": [
        //             {
        //                 "internalType": "string",
        //                 "name": "",
        //                 "type": "string"
        //             }
        //         ],
        //         "name": "battleInfo",
        //         "outputs": [
        //             {
        //                 "internalType": "uint256",
        //                 "name": "",
        //                 "type": "uint256"
        //             }
        //         ],
        //         "stateMutability": "view",
        //         "type": "function"
        //     },
        //     {
        //         "inputs": [
        //             {
        //                 "internalType": "uint256",
        //                 "name": "",
        //                 "type": "uint256"
        //             }
        //         ],
        //         "name": "battles",
        //         "outputs": [
        //             {
        //                 "internalType": "enum AVAXGods.BattleStatus",
        //                 "name": "battleStatus",
        //                 "type": "uint8"
        //             },
        //             {
        //                 "internalType": "bytes32",
        //                 "name": "battleHash",
        //                 "type": "bytes32"
        //             },
        //             {
        //                 "internalType": "string",
        //                 "name": "name",
        //                 "type": "string"
        //             },
        //             {
        //                 "internalType": "address",
        //                 "name": "winner",
        //                 "type": "address"
        //             }
        //         ],
        //         "stateMutability": "view",
        //         "type": "function"
        //     },
        //     {
        //         "inputs": [
        //             {
        //                 "internalType": "string",
        //                 "name": "_name",
        //                 "type": "string"
        //             }
        //         ],
        //         "name": "createBattle",
        //         "outputs": [
        //             {
        //                 "components": [
        //                     {
        //                         "internalType": "enum AVAXGods.BattleStatus",
        //                         "name": "battleStatus",
        //                         "type": "uint8"
        //                     },
        //                     {
        //                         "internalType": "bytes32",
        //                         "name": "battleHash",
        //                         "type": "bytes32"
        //                     },
        //                     {
        //                         "internalType": "string",
        //                         "name": "name",
        //                         "type": "string"
        //                     },
        //                     {
        //                         "internalType": "address[2]",
        //                         "name": "players",
        //                         "type": "address[2]"
        //                     },
        //                     {
        //                         "internalType": "uint8[2]",
        //                         "name": "moves",
        //                         "type": "uint8[2]"
        //                     },
        //                     {
        //                         "internalType": "address",
        //                         "name": "winner",
        //                         "type": "address"
        //                     }
        //                 ],
        //                 "internalType": "struct AVAXGods.Battle",
        //                 "name": "",
        //                 "type": "tuple"
        //             }
        //         ],
        //         "stateMutability": "nonpayable",
        //         "type": "function"
        //     },
        //     {
        //         "inputs": [
        //             {
        //                 "internalType": "string",
        //                 "name": "_name",
        //                 "type": "string"
        //             }
        //         ],
        //         "name": "createRandomGameToken",
        //         "outputs": [],
        //         "stateMutability": "nonpayable",
        //         "type": "function"
        //     },
        //     {
        //         "inputs": [
        //             {
        //                 "internalType": "uint256",
        //                 "name": "",
        //                 "type": "uint256"
        //             }
        //         ],
        //         "name": "gameTokens",
        //         "outputs": [
        //             {
        //                 "internalType": "string",
        //                 "name": "name",
        //                 "type": "string"
        //             },
        //             {
        //                 "internalType": "uint256",
        //                 "name": "id",
        //                 "type": "uint256"
        //             },
        //             {
        //                 "internalType": "uint256",
        //                 "name": "attackStrength",
        //                 "type": "uint256"
        //             },
        //             {
        //                 "internalType": "uint256",
        //                 "name": "defenseStrength",
        //                 "type": "uint256"
        //             }
        //         ],
        //         "stateMutability": "view",
        //         "type": "function"
        //     },
        //     {
        //         "inputs": [],
        //         "name": "getAllBattles",
        //         "outputs": [
        //             {
        //                 "components": [
        //                     {
        //                         "internalType": "enum AVAXGods.BattleStatus",
        //                         "name": "battleStatus",
        //                         "type": "uint8"
        //                     },
        //                     {
        //                         "internalType": "bytes32",
        //                         "name": "battleHash",
        //                         "type": "bytes32"
        //                     },
        //                     {
        //                         "internalType": "string",
        //                         "name": "name",
        //                         "type": "string"
        //                     },
        //                     {
        //                         "internalType": "address[2]",
        //                         "name": "players",
        //                         "type": "address[2]"
        //                     },
        //                     {
        //                         "internalType": "uint8[2]",
        //                         "name": "moves",
        //                         "type": "uint8[2]"
        //                     },
        //                     {
        //                         "internalType": "address",
        //                         "name": "winner",
        //                         "type": "address"
        //                     }
        //                 ],
        //                 "internalType": "struct AVAXGods.Battle[]",
        //                 "name": "",
        //                 "type": "tuple[]"
        //             }
        //         ],
        //         "stateMutability": "view",
        //         "type": "function"
        //     },
        //     {
        //         "inputs": [],
        //         "name": "getAllPlayerTokens",
        //         "outputs": [
        //             {
        //                 "components": [
        //                     {
        //                         "internalType": "string",
        //                         "name": "name",
        //                         "type": "string"
        //                     },
        //                     {
        //                         "internalType": "uint256",
        //                         "name": "id",
        //                         "type": "uint256"
        //                     },
        //                     {
        //                         "internalType": "uint256",
        //                         "name": "attackStrength",
        //                         "type": "uint256"
        //                     },
        //                     {
        //                         "internalType": "uint256",
        //                         "name": "defenseStrength",
        //                         "type": "uint256"
        //                     }
        //                 ],
        //                 "internalType": "struct AVAXGods.GameToken[]",
        //                 "name": "",
        //                 "type": "tuple[]"
        //             }
        //         ],
        //         "stateMutability": "view",
        //         "type": "function"
        //     },
        //     {
        //         "inputs": [],
        //         "name": "getAllPlayers",
        //         "outputs": [
        //             {
        //                 "components": [
        //                     {
        //                         "internalType": "address",
        //                         "name": "playerAddress",
        //                         "type": "address"
        //                     },
        //                     {
        //                         "internalType": "string",
        //                         "name": "playerName",
        //                         "type": "string"
        //                     },
        //                     {
        //                         "internalType": "uint256",
        //                         "name": "playerMana",
        //                         "type": "uint256"
        //                     },
        //                     {
        //                         "internalType": "uint256",
        //                         "name": "playerHealth",
        //                         "type": "uint256"
        //                     },
        //                     {
        //                         "internalType": "bool",
        //                         "name": "inBattle",
        //                         "type": "bool"
        //                     }
        //                 ],
        //                 "internalType": "struct AVAXGods.Player[]",
        //                 "name": "",
        //                 "type": "tuple[]"
        //             }
        //         ],
        //         "stateMutability": "view",
        //         "type": "function"
        //     },
        //     {
        //         "inputs": [
        //             {
        //                 "internalType": "string",
        //                 "name": "_name",
        //                 "type": "string"
        //             }
        //         ],
        //         "name": "getBattle",
        //         "outputs": [
        //             {
        //                 "components": [
        //                     {
        //                         "internalType": "enum AVAXGods.BattleStatus",
        //                         "name": "battleStatus",
        //                         "type": "uint8"
        //                     },
        //                     {
        //                         "internalType": "bytes32",
        //                         "name": "battleHash",
        //                         "type": "bytes32"
        //                     },
        //                     {
        //                         "internalType": "string",
        //                         "name": "name",
        //                         "type": "string"
        //                     },
        //                     {
        //                         "internalType": "address[2]",
        //                         "name": "players",
        //                         "type": "address[2]"
        //                     },
        //                     {
        //                         "internalType": "uint8[2]",
        //                         "name": "moves",
        //                         "type": "uint8[2]"
        //                     },
        //                     {
        //                         "internalType": "address",
        //                         "name": "winner",
        //                         "type": "address"
        //                     }
        //                 ],
        //                 "internalType": "struct AVAXGods.Battle",
        //                 "name": "",
        //                 "type": "tuple"
        //             }
        //         ],
        //         "stateMutability": "view",
        //         "type": "function"
        //     },
        //     {
        //         "inputs": [
        //             {
        //                 "internalType": "string",
        //                 "name": "_battleName",
        //                 "type": "string"
        //             }
        //         ],
        //         "name": "getBattleMoves",
        //         "outputs": [
        //             {
        //                 "internalType": "uint256",
        //                 "name": "P1Move",
        //                 "type": "uint256"
        //             },
        //             {
        //                 "internalType": "uint256",
        //                 "name": "P2Move",
        //                 "type": "uint256"
        //             }
        //         ],
        //         "stateMutability": "view",
        //         "type": "function"
        //     },
        //     {
        //         "inputs": [
        //             {
        //                 "internalType": "address",
        //                 "name": "addr",
        //                 "type": "address"
        //             }
        //         ],
        //         "name": "getPlayer",
        //         "outputs": [
        //             {
        //                 "components": [
        //                     {
        //                         "internalType": "address",
        //                         "name": "playerAddress",
        //                         "type": "address"
        //                     },
        //                     {
        //                         "internalType": "string",
        //                         "name": "playerName",
        //                         "type": "string"
        //                     },
        //                     {
        //                         "internalType": "uint256",
        //                         "name": "playerMana",
        //                         "type": "uint256"
        //                     },
        //                     {
        //                         "internalType": "uint256",
        //                         "name": "playerHealth",
        //                         "type": "uint256"
        //                     },
        //                     {
        //                         "internalType": "bool",
        //                         "name": "inBattle",
        //                         "type": "bool"
        //                     }
        //                 ],
        //                 "internalType": "struct AVAXGods.Player",
        //                 "name": "",
        //                 "type": "tuple"
        //             }
        //         ],
        //         "stateMutability": "view",
        //         "type": "function"
        //     },
        //     {
        //         "inputs": [
        //             {
        //                 "internalType": "address",
        //                 "name": "addr",
        //                 "type": "address"
        //             }
        //         ],
        //         "name": "getPlayerToken",
        //         "outputs": [
        //             {
        //                 "components": [
        //                     {
        //                         "internalType": "string",
        //                         "name": "name",
        //                         "type": "string"
        //                     },
        //                     {
        //                         "internalType": "uint256",
        //                         "name": "id",
        //                         "type": "uint256"
        //                     },
        //                     {
        //                         "internalType": "uint256",
        //                         "name": "attackStrength",
        //                         "type": "uint256"
        //                     },
        //                     {
        //                         "internalType": "uint256",
        //                         "name": "defenseStrength",
        //                         "type": "uint256"
        //                     }
        //                 ],
        //                 "internalType": "struct AVAXGods.GameToken",
        //                 "name": "",
        //                 "type": "tuple"
        //             }
        //         ],
        //         "stateMutability": "view",
        //         "type": "function"
        //     },
        //     {
        //         "inputs": [],
        //         "name": "gettotalSupply",
        //         "outputs": [
        //             {
        //                 "internalType": "uint256",
        //                 "name": "",
        //                 "type": "uint256"
        //             }
        //         ],
        //         "stateMutability": "view",
        //         "type": "function"
        //     },
        //     {
        //         "inputs": [
        //             {
        //                 "internalType": "address",
        //                 "name": "account",
        //                 "type": "address"
        //             },
        //             {
        //                 "internalType": "address",
        //                 "name": "operator",
        //                 "type": "address"
        //             }
        //         ],
        //         "name": "isApprovedForAll",
        //         "outputs": [
        //             {
        //                 "internalType": "bool",
        //                 "name": "",
        //                 "type": "bool"
        //             }
        //         ],
        //         "stateMutability": "view",
        //         "type": "function"
        //     },
        //     {
        //         "inputs": [
        //             {
        //                 "internalType": "string",
        //                 "name": "_name",
        //                 "type": "string"
        //             }
        //         ],
        //         "name": "isBattle",
        //         "outputs": [
        //             {
        //                 "internalType": "bool",
        //                 "name": "",
        //                 "type": "bool"
        //             }
        //         ],
        //         "stateMutability": "view",
        //         "type": "function"
        //     },
        //     {
        //         "inputs": [
        //             {
        //                 "internalType": "address",
        //                 "name": "addr",
        //                 "type": "address"
        //             }
        //         ],
        //         "name": "isPlayer",
        //         "outputs": [
        //             {
        //                 "internalType": "bool",
        //                 "name": "",
        //                 "type": "bool"
        //             }
        //         ],
        //         "stateMutability": "view",
        //         "type": "function"
        //     },
        //     {
        //         "inputs": [
        //             {
        //                 "internalType": "address",
        //                 "name": "addr",
        //                 "type": "address"
        //             }
        //         ],
        //         "name": "isPlayerToken",
        //         "outputs": [
        //             {
        //                 "internalType": "bool",
        //                 "name": "",
        //                 "type": "bool"
        //             }
        //         ],
        //         "stateMutability": "view",
        //         "type": "function"
        //     },
        //     {
        //         "inputs": [
        //             {
        //                 "internalType": "string",
        //                 "name": "_name",
        //                 "type": "string"
        //             }
        //         ],
        //         "name": "joinBattle",
        //         "outputs": [
        //             {
        //                 "components": [
        //                     {
        //                         "internalType": "enum AVAXGods.BattleStatus",
        //                         "name": "battleStatus",
        //                         "type": "uint8"
        //                     },
        //                     {
        //                         "internalType": "bytes32",
        //                         "name": "battleHash",
        //                         "type": "bytes32"
        //                     },
        //                     {
        //                         "internalType": "string",
        //                         "name": "name",
        //                         "type": "string"
        //                     },
        //                     {
        //                         "internalType": "address[2]",
        //                         "name": "players",
        //                         "type": "address[2]"
        //                     },
        //                     {
        //                         "internalType": "uint8[2]",
        //                         "name": "moves",
        //                         "type": "uint8[2]"
        //                     },
        //                     {
        //                         "internalType": "address",
        //                         "name": "winner",
        //                         "type": "address"
        //                     }
        //                 ],
        //                 "internalType": "struct AVAXGods.Battle",
        //                 "name": "",
        //                 "type": "tuple"
        //             }
        //         ],
        //         "stateMutability": "nonpayable",
        //         "type": "function"
        //     },
        //     {
        //         "inputs": [],
        //         "name": "owner",
        //         "outputs": [
        //             {
        //                 "internalType": "address",
        //                 "name": "",
        //                 "type": "address"
        //             }
        //         ],
        //         "stateMutability": "view",
        //         "type": "function"
        //     },
        //     {
        //         "inputs": [
        //             {
        //                 "internalType": "address",
        //                 "name": "",
        //                 "type": "address"
        //             }
        //         ],
        //         "name": "playerInfo",
        //         "outputs": [
        //             {
        //                 "internalType": "uint256",
        //                 "name": "",
        //                 "type": "uint256"
        //             }
        //         ],
        //         "stateMutability": "view",
        //         "type": "function"
        //     },
        //     {
        //         "inputs": [
        //             {
        //                 "internalType": "address",
        //                 "name": "",
        //                 "type": "address"
        //             }
        //         ],
        //         "name": "playerTokenInfo",
        //         "outputs": [
        //             {
        //                 "internalType": "uint256",
        //                 "name": "",
        //                 "type": "uint256"
        //             }
        //         ],
        //         "stateMutability": "view",
        //         "type": "function"
        //     },
        //     {
        //         "inputs": [
        //             {
        //                 "internalType": "uint256",
        //                 "name": "",
        //                 "type": "uint256"
        //             }
        //         ],
        //         "name": "players",
        //         "outputs": [
        //             {
        //                 "internalType": "address",
        //                 "name": "playerAddress",
        //                 "type": "address"
        //             },
        //             {
        //                 "internalType": "string",
        //                 "name": "playerName",
        //                 "type": "string"
        //             },
        //             {
        //                 "internalType": "uint256",
        //                 "name": "playerMana",
        //                 "type": "uint256"
        //             },
        //             {
        //                 "internalType": "uint256",
        //                 "name": "playerHealth",
        //                 "type": "uint256"
        //             },
        //             {
        //                 "internalType": "bool",
        //                 "name": "inBattle",
        //                 "type": "bool"
        //             }
        //         ],
        //         "stateMutability": "view",
        //         "type": "function"
        //     },
        //     {
        //         "inputs": [
        //             {
        //                 "internalType": "string",
        //                 "name": "_battleName",
        //                 "type": "string"
        //             }
        //         ],
        //         "name": "quitBattle",
        //         "outputs": [],
        //         "stateMutability": "nonpayable",
        //         "type": "function"
        //     },
        //     {
        //         "inputs": [
        //             {
        //                 "internalType": "string",
        //                 "name": "_name",
        //                 "type": "string"
        //             },
        //             {
        //                 "internalType": "string",
        //                 "name": "_gameTokenName",
        //                 "type": "string"
        //             }
        //         ],
        //         "name": "registerPlayer",
        //         "outputs": [],
        //         "stateMutability": "nonpayable",
        //         "type": "function"
        //     },
        //     {
        //         "inputs": [],
        //         "name": "renounceOwnership",
        //         "outputs": [],
        //         "stateMutability": "nonpayable",
        //         "type": "function"
        //     },
        //     {
        //         "inputs": [
        //             {
        //                 "internalType": "address",
        //                 "name": "from",
        //                 "type": "address"
        //             },
        //             {
        //                 "internalType": "address",
        //                 "name": "to",
        //                 "type": "address"
        //             },
        //             {
        //                 "internalType": "uint256[]",
        //                 "name": "ids",
        //                 "type": "uint256[]"
        //             },
        //             {
        //                 "internalType": "uint256[]",
        //                 "name": "values",
        //                 "type": "uint256[]"
        //             },
        //             {
        //                 "internalType": "bytes",
        //                 "name": "data",
        //                 "type": "bytes"
        //             }
        //         ],
        //         "name": "safeBatchTransferFrom",
        //         "outputs": [],
        //         "stateMutability": "nonpayable",
        //         "type": "function"
        //     },
        //     {
        //         "inputs": [
        //             {
        //                 "internalType": "address",
        //                 "name": "from",
        //                 "type": "address"
        //             },
        //             {
        //                 "internalType": "address",
        //                 "name": "to",
        //                 "type": "address"
        //             },
        //             {
        //                 "internalType": "uint256",
        //                 "name": "id",
        //                 "type": "uint256"
        //             },
        //             {
        //                 "internalType": "uint256",
        //                 "name": "value",
        //                 "type": "uint256"
        //             },
        //             {
        //                 "internalType": "bytes",
        //                 "name": "data",
        //                 "type": "bytes"
        //             }
        //         ],
        //         "name": "safeTransferFrom",
        //         "outputs": [],
        //         "stateMutability": "nonpayable",
        //         "type": "function"
        //     },
        //     {
        //         "inputs": [
        //             {
        //                 "internalType": "address",
        //                 "name": "operator",
        //                 "type": "address"
        //             },
        //             {
        //                 "internalType": "bool",
        //                 "name": "approved",
        //                 "type": "bool"
        //             }
        //         ],
        //         "name": "setApprovalForAll",
        //         "outputs": [],
        //         "stateMutability": "nonpayable",
        //         "type": "function"
        //     },
        //     {
        //         "inputs": [
        //             {
        //                 "internalType": "string",
        //                 "name": "newuri",
        //                 "type": "string"
        //             }
        //         ],
        //         "name": "setURI",
        //         "outputs": [],
        //         "stateMutability": "nonpayable",
        //         "type": "function"
        //     },
        //     {
        //         "inputs": [
        //             {
        //                 "internalType": "bytes4",
        //                 "name": "interfaceId",
        //                 "type": "bytes4"
        //             }
        //         ],
        //         "name": "supportsInterface",
        //         "outputs": [
        //             {
        //                 "internalType": "bool",
        //                 "name": "",
        //                 "type": "bool"
        //             }
        //         ],
        //         "stateMutability": "view",
        //         "type": "function"
        //     },
        //     {
        //         "inputs": [
        //             {
        //                 "internalType": "uint256",
        //                 "name": "tokenId",
        //                 "type": "uint256"
        //             }
        //         ],
        //         "name": "tokenURI",
        //         "outputs": [
        //             {
        //                 "internalType": "string",
        //                 "name": "",
        //                 "type": "string"
        //             }
        //         ],
        //         "stateMutability": "view",
        //         "type": "function"
        //     },
        //     {
        //         "inputs": [
        //             {
        //                 "internalType": "address",
        //                 "name": "newOwner",
        //                 "type": "address"
        //             }
        //         ],
        //         "name": "transferOwnership",
        //         "outputs": [],
        //         "stateMutability": "nonpayable",
        //         "type": "function"
        //     },
        //     {
        //         "inputs": [
        //             {
        //                 "internalType": "uint256",
        //                 "name": "",
        //                 "type": "uint256"
        //             }
        //         ],
        //         "name": "uri",
        //         "outputs": [
        //             {
        //                 "internalType": "string",
        //                 "name": "",
        //                 "type": "string"
        //             }
        //         ],
        //         "stateMutability": "view",
        //         "type": "function"
        //     }
        // ]
        // const contractAddress = '0x9EB94Ce7deF27ba7540286d2758D23444fB6e33e';
        // const contract = new web3.eth.Contract(contractABI, contractAddress);
        const result = await contract?.methods?.registerPlayer(name, "gametoken").send({ from: account }).then((result) => {
            // Handle the result of the method call
            console.log('Method result:', result);
        })
            .catch((error) => {
                // Handle errors
                console.error('Error calling contract method:', error);
            });
        console.log(result)
    }

    const CreateBattle = async () => {
        console.log(account)
        const result = await contract?.methods.createBattle(battlename).send({ from: account }).then((result) => {
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
            <button onClick={RegisterPlayer}> Call Function</button>
            <button onClick={CreateBattle}> Call Function</button>
        </div>
    )
}
