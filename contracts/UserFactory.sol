pragma solidity ^0.4.15;

contract UserFactory {
   address[] public users;

   function createUser (address userId, address refr) {
      address newUser = new User(userId, refr);
      users.push(newUser);

      return newUser;
   }
}

contract User {
   address public userId;   // User pub key
   address public referrer;
   address[] sales;         // User sales history

   function User (
      address _userId,
      address _referrer)
   {
      userId   = _userId;
      referrer = _referrer;
   }

   function createSale(address product, uint256 time) {
      address newSale = new Sale(product, time);
      sales.push(newSale);
   }
}

contract Sale {
   address public product; // Reference to product cntrct
   uint256 time;           // Timestamp of sale

   function Sale (address _product, uint256 _time) {
      product = _product;
      time = _time;
   }
}
