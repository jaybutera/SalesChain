pragma solidity ^0.4.15;

contract Product {
   address public owner;
   uint public take;
   string public productId;

   function Product (
      address _owner,
      uint _take,
      string _productId)
   {
      owner = _owner;
      take = _take;
      productId = _productId;
   }
}
