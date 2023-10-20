const hre = require("hardhat");

async function main() {
  const Maintenance = await hre.ethers.getContractFactory("Maintenance");
  const maintenance = await Maintenance.deploy();

  await maintenance.deployed();

  console.log(`maintenance deployed to ${maintenance.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
