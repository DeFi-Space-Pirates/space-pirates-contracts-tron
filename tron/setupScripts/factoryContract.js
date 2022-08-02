const roles = require("../roles.json");
const ids = require("../ids.json");
const feeLimit = 1000000000;

module.exports = async function factoryContractSetup(factoryContract) {
  console.log("  factory contract setup");
  await factoryContract.createPair(1, 2).send({ feeLimit: feeLimit });
  console.log("    created DBL/AST pool");
  await factoryContract.createPair(1, 100).send({ feeLimit: feeLimit });
  console.log("    created DBL/SP-TRX pool");
  await factoryContract.createPair(1, 101).send({ feeLimit: feeLimit });
  console.log("    created DBL/SP-USDT pool");
  await factoryContract.createPair(1, 102).send({ feeLimit: feeLimit });
  console.log("    created DBL/SP-USDD pool");
  await factoryContract.createPair(2, 100).send({ feeLimit: feeLimit });
  console.log("    created AST/SP-TRX pool");
  await factoryContract.createPair(2, 101).send({ feeLimit: feeLimit });
  console.log("    created AST/SP-USDT pool");
  await factoryContract.createPair(2, 102).send({ feeLimit: feeLimit });
  console.log("    created AST/SP-USDD pool\n");
};
