var ConvertLib = artifacts.require("./ConvertLib.sol");
var MetaCoin = artifacts.require("./MetaCoin.sol");
var HelloWorld = artifacts.require("./HelloWorld.sol");
var Product    = artifacts.require("./Product.sol");
var Sale       = artifacts.require("Sale");
var User       = artifacts.require("User");
var UserFactory= artifacts.require("UserFactory");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(MetaCoin);
  deployer.deploy(HelloWorld);
  deployer.deploy(Product);
  deployer.deploy(Sale);
  deployer.deploy(User);
  deployer.deploy(UserFactory);
};
