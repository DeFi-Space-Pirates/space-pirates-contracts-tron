const roles = require("../roles.json");
const ids = require("../ids.json");

const maxUint120 = "1329227995784915872903807060280344575";

module.exports = async function itemsMarketPlaceSetup(
  tokensContract,
  itemsMarketPlace
) {
  console.log("  market place contract setup");
  await tokensContract
    .grantMultiRole(
      [
        roles.burn.doubloons,
        roles.burn.asteroids,
        roles.burn.items,
        roles.mint.doubloons,
        roles.mint.asteroids,
        roles.mint.items,
        roles.mint.decorations,
        roles.mint.battlefield,
      ],
      [
        itemsMarketPlace.address,
        itemsMarketPlace.address,
        itemsMarketPlace.address,
        itemsMarketPlace.address,
        itemsMarketPlace.address,
        itemsMarketPlace.address,
        itemsMarketPlace.address,
        itemsMarketPlace.address,
      ]
    )
    .send();
  console.log("    granted all mint and burn roles");
  await itemsMarketPlace
    .createSale([1000], [3], 1, "10000000000000000000", 0, maxUint120, 3)
    .send();
  console.log("    created starter gems sale");
  await itemsMarketPlace
    .createSale([1001], [3], 1, "10000000000000000000", 0, maxUint120, 3)
    .send();
  console.log("    created evocation gems sale");
  await itemsMarketPlace
    .createSale([1002], [3], 1, "10000000000000000000", 0, maxUint120, 3)
    .send();
  console.log("    created breeding gems sale");
  await itemsMarketPlace
    .createSale(
      [1000, 1001, 1002],
      [3, 3, 3],
      1,
      "25000000000000000000",
      0,
      maxUint120,
      3
    )
    .send();
  console.log("    created gems bundle sale\n");
};
