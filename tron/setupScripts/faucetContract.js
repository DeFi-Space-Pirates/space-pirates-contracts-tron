const roles = require("../roles.json");
const ids = require("../ids.json");

module.exports = async function faucetContractSetup(
  tokensContract,
  faucetContract
) {
  console.log("  faucet contract setup");
  await tokensContract
    .grantMultiRole(
      [
        roles.mint.asteroids,
        roles.mint.doubloons,
        roles.mint.starterGem,
        roles.mint.evocationGem,
        roles.mint.breedingGem,
      ],
      [
        faucetContract.address,
        faucetContract.address,
        faucetContract.address,
        faucetContract.address,
        faucetContract.address,
      ]
    )
    .send();
  console.log("    granted mint and burn role to the faucet contract");
  await faucetContract.setMintLimit(1, "10000000000000000000000").send();
  console.log("    setted mint limit of doubloons to 10000");
  await faucetContract.setMintLimit(2, "10000000000000000000").send();
  console.log("    setted mint limit of asteroids to 10");
  await faucetContract.setMintLimit(1000, 10).send();
  console.log("    setted mint limit of starter gems to 10");
  await faucetContract.setMintLimit(1001, 10).send();
  console.log("    setted mint limit of evocation gems to 10");
  await faucetContract.setMintLimit(1002, 10).send();
  console.log("    setted mint limit of breeding gems to 10\n");
};
