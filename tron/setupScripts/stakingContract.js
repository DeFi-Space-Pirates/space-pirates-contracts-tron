const roles = require("../roles.json");
const ids = require("../ids.json");

module.exports = async function stakingContractSetup(
  tokensContract,
  stakingContract
) {
  console.log("  staking contract setup");
  await tokensContract
    .grantRole(roles.mint.doubloons, stakingContract.address)
    .send();
  console.log("    granted doubloons mint role");
  await stakingContract
    .createStakingPool(ids.doubloons, ids.doubloons, "3000000000000000000", 0)
    .send();
  console.log("    created doubloons staking pool");
  await stakingContract
    .createStakingPool(
      ids.stkAsteroids,
      ids.doubloons,
      "3000000000000000000",
      0
    )
    .send();
  console.log("    created stk-asteroids staking pool\n");
};
