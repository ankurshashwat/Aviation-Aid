const main = async () => {
  const AviationAid = await hre.ethers.getContractFactory("AviationAid");
  const aviationaid = await AviationAid.deploy();

  await aviationaid.deployed();

  console.log("AviationAid deployed to:", aviationaid.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();