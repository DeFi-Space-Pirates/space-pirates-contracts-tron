const roles = require("../roles.json");
const ids = require("../ids.json");

module.exports = async function questRedeemContractSetup(
  tokensContract,
  questRedeemContract
) {
  console.log("  quest redeem contract setup");
  await tokensContract
    .grantMultiRole(
      [
        roles.mint.doubloons,
        roles.mint.asteroids,
        roles.mint.items,
        roles.mint.titles,
        roles.mint.decorations,
        roles.mint.battlefield,
      ],
      [
        questRedeemContract.address,
        questRedeemContract.address,
        questRedeemContract.address,
        questRedeemContract.address,
        questRedeemContract.address,
        questRedeemContract.address,
      ]
    )
    .send();
  console.log("    granted all mint roles");

  const NPC_PUBLIC = process.env.NPC_PUBLIC;
  if (NPC_PUBLIC) {
    await questRedeemContract.updateVerifier(NPC_PUBLIC);
    console.log("    setted the NPC verifier");
  }
  console.log("");
};
