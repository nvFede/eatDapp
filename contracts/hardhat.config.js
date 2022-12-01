require("@nomiclabs/hardhat-ethers");
require('dotenv').config()

const { ALCHEMY_API_KEY, GOERLI_PRIVATE_KEY } = process.env;

console.log("ALCHEMY_API_KEY", ALCHEMY_API_KEY);

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY]
    },
  },
};