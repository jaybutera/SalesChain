//var Product    = artifacts.require("./Product.sol");
//var Sale       = artifacts.require("Sale");
//var User       = artifacts.require("User");
//var UserFactory= artifacts.require("UserFactory");
//var Conference = artifacts.require("Conference");
var Register = artifacts.require("Register");
var Owned = artifacts.require("owned");
var Priced = artifacts.require("priced");

module.exports = function(deployer) {
  //deployer.link(ConvertLib, MetaCoin);
  //deployer.deploy(Product);
  //deployer.deploy(Sale);
  //deployer.deploy(User);
  //deployer.deploy(UserFactory);
  deployer.deploy(Register);
};
