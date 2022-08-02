# Tron deploy

In order to deploy to the tron network some changes has to be done.

1. install tronbox with: `npm install -g tronbox`

2. Delete the function isContract that can be found at `node_modules/@openzeppelin/contracts/utils/Address.sol`

3. replace in `node_modules/@openzeppelin/contracts/utils/Address.sol` all occurrences of isContract(target) with target.isContract

4. replace in `node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol` all occurrences of isContract(target) with target.isContract

5. replace to.isContract() with to.isContract in ERC1155Custom.sol

6. replace in libraries/SpacePiratesDexLibrary.sol the hex"ff" to hex"41" and the init code to the commented one

7. run `tronbox compile` in order to create the artifacts of the contract

8. put in the file .env the TRON_PRIVATE_KEY and the TRON_FULL_HOST

9. run `npx hardhat run .\tron\deploy.js`
