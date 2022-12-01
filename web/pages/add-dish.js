import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useRouter } from "next/router";
import { abiFoodAddress } from "../config";

import Food from "../utils/Food.json";

export default function AddDish() {
  const router = useRouter();
  const [formInput, updateFormInput] = useState({
    fileUrl: "",
    name: "",
    originCountry: "",
  });

  const addDish = async () => {
    const { ethereum } = window;
    if(ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);    
        const signer = provider.getSigner();
        const contract = new ethers.Contract(abiFoodAddress, Food.abi, signer);
        const transaction = await contract.addFoodItem(formInput.fileUrl, formInput.name, formInput.originCountry);
        transaction.wait();
        router.push('/');
    }

    // Goerli network ID = 5

}


  return (
    <div className="flex justify-center">
      <div className="w-1/2 flex flex-col pb-12">
        <input
          placeholder="URL Food"
          className="mt-8 border rounded p-4"
          onChange={(e) =>
            updateFormInput({ ...formInput, fileUrl: e.target.value })
          }
        />
        <input
          placeholder="Food name"
          className="mt-2 border rounded p-4"
          onChange={(e) =>
            updateFormInput({ ...formInput, name: e.target.value })
          }
        />
        <input
          placeholder="Origin Country"
          className="mt-2 border rounded p-4"
          onChange={(e) =>
            updateFormInput({ ...formInput, originCountry: e.target.value })
          }
        />
        <button
          onClick={addDish}
          className="font-bold mt-4 bg-red-700 text-white rounded p-4 shadow-lg"
        >
          Add food
        </button>
      </div>
    </div>
  );
}