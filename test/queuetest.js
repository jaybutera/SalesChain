/*
var UserFactory = artifacts.require('UserFactory');
var User = artifacts.require('User');
var Product = artifacts.require('Product');
*/
var Register = artifacts.require('Register');

contract('UserFactory', accounts => {
   // Create user
   /*
   it('should create a user', () => {
      return UserFactory.deployed()
      .then( instance => {
         user_addr = web3.eth.accounts[0];
         referrer = web3.eth.accounts[1];
         null_addr = address(0);

         var referrer = web3.eth.Contract(referrer, null_addr);//.then( user => { return user; });
         var referee = instance.createUser(user_addr, referrer);//.then( user => { return user; });
         console.log('\n'+user);
         return user;
      })
      .then( user => {
         var product = Product.deployed().then( instance => { return instance; });

         console.log(user);
         user.createSale(product, Date.now());
      });
   });
   */
   //it('should do shit', () => {
   Register.deployed().then( reg => {

      var e = reg.Post().watch( (err, res) => {
         console.log(res);
      });

      var t = reg.register("sup pup").then( t => {
         console.log(t);
      });

      return 0;
   });
   //});
});
