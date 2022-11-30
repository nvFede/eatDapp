import "../styles/globals.css";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import Image from "next/image";

function MyApp({ Component, pageProps }) {
  const [walletAccount, setWalletAccount] = useState("");

  const checkIfMetaMaskIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Check if Metamask is installed.");
    } else {
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
      {/* {!walletAccount && (
        <div className="">
         
        </div>
      )} */}
      <div>
        <main>
          <nav className="border-b p-6 flex justify-between">
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
              <div className="mt-4 flex gap-5">
                <Link href="/">Home</Link>
                <Link href="/add-dish">Add Dishes</Link>
                <Link href="/my-dishes">My Dishes</Link>
              </div>
            )}
          </nav>
          <Component {...pageProps} />
        </main>
      </div>
    </div>
  );
}

export default MyApp;
