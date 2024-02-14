Development Environment. Set-C
1) Write tests for your smart contract and demonstrate
the process of testing using Hardhat Development
Environment.
Token.sol 

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Token {
    string public name =" my hardhat token";
    string public symbol="MHT";
    uint256 public totalSupply=1000000;
    address public owner;

    mapping(address=>uint256) balances;

    event Transfer(address indexed _from, address indexed _to, uint256 _value);
    constructor(){
        balances[msg.sender]=totalSupply;
        owner =msg.sender;
    }
    function transfer(address to, uint256 amount) external {
        require(balances[msg.sender]>=amount,"not enough token");
        balances[msg.sender]-=amount;
        balances[to]+=amount;

        emit Transfer(msg.sender, to, amount);
    }

    function balanceOf(address account) external view returns (uint256) {
        return balances[account];
    }
}


token.js

const { expect }=reuqire("chai");

describe("token contract", function() {
    it("deploymet should assign the totalSupply of the token to the owner", async function() {
        const [owner]= await ethers.getSigners();
        console.log("Signer object: ",owner);

        const hardhatToken= await ethers.deployContract("Token");

        const ownerBalance = await hardhatToken.balanceOf(owner.address);

        console.log("owner address :",owner.address);

        console.log("owner balance :",ownerBalance);

        expect(await hardhatToken.totalSupply().to.equal(ownerBalance));

    });
});

test smart contract using below command :
npx hardhart test
test output :

PS C:\Users\UnboxIt\Desktop\Hardhat_development_practical> npx hardhat test       


  Lock
    Deployment
      ✔ Should set the right unlockTime (2699ms)
      ✔ Should set the right owner
      ✔ Should receive and store the funds to lock
      ✔ Should fail if the unlockTime is not in the future (121ms)
    Withdrawals
      Validations
        ✔ Should revert with the right error if called too soon (47ms)
        ✔ Should revert with the right error if called from another account (82ms)
        ✔ Shouldn't fail if the unlockTime has arrived and the owner calls it (93ms)
      Events
        ✔ Should emit an event on withdrawals
      Transfers
        ✔ Should transfer the funds to the owner (117ms)


  9 passing (3s)


2) Demonstrate the steps involved in the process of
deploying your smart contract to a live network.

1. first need right smart contract in Contract dir make file using .sol extension
2. comiple contract using command :
npx hardhart compile 
3.test smart contract using command:
npx hardhat test

 


