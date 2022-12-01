import "../styles/globals.css";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import Image from "next/image";

function MyApp({ Component, pageProps }) {
  const [walletAccount, setWalletAccount] = useState("");
  const [isConnectedToGoerli, setConnectedToGoerli] = useState(true);
  const [alertAccount, setAlertAccount] = useState(false);

  const checkIfMetaMaskIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Check if Metamask is installed.");
    } else {
      ethereum.on("chainChanged", (networkId) => {
        console.log(`Chain changed to ${networkId}`);
        parseInt(networkId) === 5
          ? setConnectedToGoerli(true)
          : setConnectedToGoerli(false);
      });

      ethereum.on("accountsChanged", (accounts) => {
        console.log(`Accounts changed: ${accounts}`);
        setWalletAccount(accounts[0]);
        displayAlertAccount(true);
      });

      const accounts = await ethereum.request({ method: "eth_accounts" });

      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();

      if (accounts.length != 0) {
        setWalletAccount(accounts[0]);
      } else {
        console.log("No authorized account");
      }
    }
  };

  const displayAlertAccount = (value) => {
    if (value) {
      setAlertAccount(true);
      setTimeout(() => {
        setAlertAccount(false);
      }, 3000);
    }
  };
  useEffect(() => {
    checkIfMetaMaskIsConnected();
  }, []);

  const connectMetamask = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        alert("Get MetaMask");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log(accounts[0]);
      setWalletAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {!isConnectedToGoerli && (
        <div className="h-screen w-screen flex flex-col justify-center items-center">
          <img src="./images/logodapp.png" width={180} />
          <div className="flex flex-col w-96 p-5 bg-red-900 rounded-lg mt-5">
            <h1 className="text-4xl text-white py-2">
              You are using the wrong network
            </h1>
            <h2 className="text-2xl text-white py-2">
              Please connect metamask with the Goerli Test Network
            </h2>
          </div>
        </div>
      )}

      {isConnectedToGoerli && (
        <main>
          <nav className="border-b p-6 flex justify-between items-center">
            <Link href="/">
              <img src="./images/logodapp.png" width={180} />
            </Link>
            {!walletAccount && (
              <button
                className="bg-red-500 hover:bg-red-600 active:bg-red-700 text-white p-0 px-5 rounded"
                onClick={connectMetamask}
              >
                Connect Walltet
              </button>
            )}
            {walletAccount && (
              <div className="mt-4 flex gap-5 items-center">
                <Link href="/">Home</Link>
                <Link href="/add-dish">Add Dishes</Link>
                <Link href="/my-dishes">My Dishes</Link>

                <div className="flex items-center">
                  <div className="h-2 w-2 bg-green-400 rounded-full mr-1 mt-1"></div>
                  <p className="font-bold">{`connected: ${walletAccount.substring(
                    0,
                    6
                  )}...${walletAccount.substring(
                    walletAccount.length - 4
                  )}`}</p>
                </div>
              </div>
            )}
          </nav>

          {alertAccount && (
            <div className="bg-green-600 rounded text-white m-2 px-2">
              <p className="font-bold">
                You are now connected to: {walletAccount}
              </p>
            </div>
          )}

          <Component {...pageProps} />
        </main>
      )}
    </div>
  );
}

export default MyApp;
