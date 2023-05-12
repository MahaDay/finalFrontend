const reviewComponent = artifacts.require("reviewComponent");

module.exports = function(deployer) {
  deployer.deploy(reviewComponent);
};

