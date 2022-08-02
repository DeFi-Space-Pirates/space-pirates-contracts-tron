const roles = require("../roles.json");
const ids = require("../ids.json");

//const USDT = "TUXYeqLUibq7m9MCMtyzLKptu296xrdoXq"; // shasta
const USDT = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"; // mainnet

//const USDD = "TV6StXz41Z1zmHtjzBQ93Y9jNEAvHSDoQ7"; // shasta
const USDD = "TPYmHEhy5n8TCEfYGqW2rPxsghSfzghPDn"; // mainnet

module.exports = async function wrapperContractSetup(
  tokensContract,
  wrapperContract
) {
  console.log("  wrapper contract setup");
  await tokensContract
    .grantRole(roles.mint.wrapped, wrapperContract.address)
    .send();
  console.log("    granted mint role for the wrapped tokens");
  await tokensContract
    .grantRole(roles.burn.wrapped, wrapperContract.address)
    .send();
  console.log("    granted burn role for the wrapped tokens");
  await wrapperContract.addERC20(USDT).send();
  console.log("    created the USDT wrap");
  await wrapperContract.addERC20(USDD).send();
  console.log("    created the USDD wrap\n");
};
