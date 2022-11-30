// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const fs = require("fs");
const path = require("path");

async function main() {
 
 
  const Food = await hre.ethers.getContractFactory("Food");
  const food = await Food.deploy();

  await food.deployed();

  console.log(
    `Food Contract deployed to ${food.address}`
  );

  let config = `
  export const abiFoodAddress = "${food.address}"
  `;

  let data = JSON.stringify(config);
  fs.writeFileSync("../config.js", JSON.parse(data));

  // fs.readdirSync( './artifacts/contracts/Food.sol').forEach(file => {
  //   console.log(file);
  // });

  // console.log(
  //   __dirname
  // );

  fs.copyFile(
    './artifacts/contracts/Food.sol/Food.json',
    "../web/utils/abi/Food.json",
    (err) => {
      if (err) {
        console.log("Error Occurred:", err);
      }
    }
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
