const roles = require("../roles.json");
const ids = require("../ids.json");

module.exports = async function masterChefContractSetup(
  tokensContract,
  masterChefContract,
  factoryContract
) {
  console.log("  master chef contract setup");
  await tokensContract
    .grantRole(roles.mint.doubloons, masterChefContract.address)
    .send();
  console.log("    granted doubloons mint role");
  const astDblLp = await factoryContract.getPair(1, 2).call();
  await masterChefContract.add(1000, astDblLp, 0, false).send();
  console.log("    created DBL/AST liquidity pool");
  const dblTrxLp = await factoryContract.getPair(1, 100).call();
  await masterChefContract.add(1000, dblTrxLp, 0, false).send();
  console.log("    created DBL/AST liquidity pool");
  const dblUsdtLp = await factoryContract.getPair(1, 101).call();
  await masterChefContract.add(1000, dblUsdtLp, 0, false).send();
  console.log("    created DBL/AST liquidity pool");
  const dblUsddLp = await factoryContract.getPair(1, 102).call();
  await masterChefContract.add(500, dblUsddLp, 0, false).send();
  console.log("    created DBL/AST liquidity pool");
  const astTrxLp = await factoryContract.getPair(2, 100).call();
  await masterChefContract.add(1000, astTrxLp, 0, false).send();
  console.log("    created DBL/AST liquidity pool");
  const astUsdtLp = await factoryContract.getPair(2, 101).call();
  await masterChefContract.add(1000, astUsdtLp, 0, false).send();
  console.log("    created DBL/AST liquidity pool");
  const astUsddLp = await factoryContract.getPair(2, 102).call();
  await masterChefContract.add(500, astUsddLp, 0, false).send();
  console.log("    created DBL/AST liquidity pool\n");
};
