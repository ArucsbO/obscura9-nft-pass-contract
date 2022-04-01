const { ethers } = require("hardhat");

async function main() {
  const ObscuraFinalPassNFT = await ethers.getContractFactory("ObscurAFinalPass");

  const obscuraFinalPass = await ObscuraFinalPassNFT.deploy();
  await obscuraFinalPass.deployed();
  console.log('Contract deployed to address: ', obscuraFinalPass.address);
}

main().then(()=> process.exit(0))
.catch(error => {
  console.error(error);
  process.exit(1);
})