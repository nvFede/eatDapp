import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { ethers } from "ethers";

export default function Home() {
  const checkWallet = () => {
    if (!window.ethereum) {
      console.log("please install Metamask");
    } else {
      console.log("Metamask already installed");
    }
  };

  useEffect(() => {
    checkWallet();
  });

    const dishes = [
      {
        url:
          "https://eatyourworld.com/images/content_images/images/gallo-pinto.jpg",
        name: "Gallo Pinto",
        country: "Comida típica de Costa Rica",
      },
    ];
  
    return (
      <div className="flex justify-center bg-slate-50 h-screen">
        <div className="px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
            {dishes.map((food, i) => (
              <div key={i} className="border shadow rounded-xl overflow-hidden">
                <img style={{ height: "20rem" }} src={food.url} />
                <div className="p-4">
                  <p
                    style={{ height: "64px" }}
                    className="text-2xl font-semibold"
                  >
                    {food.name}
                  </p>
                  <div style={{ height: "70px", overflow: "hidden" }}>
                    <p>{dishes.name}</p>
                    <p className="text-gray-400">{food.country}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
}
