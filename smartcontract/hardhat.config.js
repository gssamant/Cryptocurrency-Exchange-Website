require('@nomiclabs/hardhat-waffle');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/WJ0X1JrfRnfKvqHbgfUSov9rZbHvPoo7',
      accounts: ['f6e4f3135d6ac46ee09d4deca96de9903d8430a2070bfbe31237c2cd07359afe']
    }
  }

};
