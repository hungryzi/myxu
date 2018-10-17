const MyXu = artifacts.require("./contracts/MyXu.sol");

module.exports = async function(deployer) {
  await deployer.deploy(MyXu, "MyXu", "MyXu")
  const myxu = await MyXu.deployed()
};
