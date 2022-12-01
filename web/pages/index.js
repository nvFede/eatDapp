import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { abiFoodAddress } from "../config";
import Food from "../utils/Food.json";


export default function Home() {
  const [dishes, setDishes] = useState([]);

  const getAllDishes = async () => {
    const provider = new ethers.providers.JsonRpcProvider(
      `https://eth-goerli.alchemyapi.io/v2/bS8uc0_Q0s1mMZTtzBGcXnet_JhgGXfW`
    );
    // console.log(process.env.ALCHEMY_API_KEY)
    const contract = new ethers.Contract(
      abiFoodAddress,
      Food.abi,
      provider
    );
    


    const dishes = await contract.getFoodItems();
    console.log(dishes)
    setDishes(dishes);
  };

  useEffect(() => {
    getAllDishes();
  }, []);

  return (
    <div className="flex justify-center bg-slate-50 h-screen">
      <div className="px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-4">
          {dishes.map((food, i) => (
            <div key={i} className="border shadow rounded-xl overflow-hidden">
              <img style={{ height: "20rem" }} src={food.name} />
              <div className="p-4">
                <p
                  style={{ height: "64px" }}
                  className="text-2xl font-semibold"
                >
                  {food.url}
                </p>
                <div style={{ height: "70px", overflow: "hidden" }}>
                  <p>{dishes.name}</p>
                  <p className="text-gray-400">{food.originCountry}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
