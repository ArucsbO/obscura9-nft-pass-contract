require("@nomiclabs/hardhat-waffle");
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

 const { RPC_ROPSTEN, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.3",
  defaultNetwork: 'ropsten',
  networks: {
    hardhat: {},
    ropsten: {
      url: RPC_ROPSTEN,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  }
};
