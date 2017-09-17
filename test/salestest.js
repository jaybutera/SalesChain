var UserFactory = artifacts.require('UserFactory');
var Product = artifacts.require('Product');

contract('UserFactory', accounts => {
   // Create user
   it('should create a user', () => {
      return UserFactory.deployed()
      .then( instance => {
         user_addr = web3.eth.accounts[0];
         referrer = web3.eth.accounts[1];

         return instance.createUser(user_addr, referrer);
      })
      .then( user => {
         var product = Product.deployed().then( instance => { return instance; });

         console.log(user);
         user.createSale(product, Date.now());
      });
   });
});
