// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
// const { futimesSync, accessSync } = require("fs");
const hre = require("hardhat");

async function getBalance(address){
  const balanceBigInt = await hre.ethers.provider.getBalance(address);
  return hre.ethers.utils.formatEther(balanceBigInt);
}

async function cosoleBalance(addresses){
  let countrer = 0;
  for(const address of addresses){
    console.log(`Address ${countrer} balance` , await getBalancee(address));
  }
}

async function consoleMemos(memos){
  for(const memo of memos){
    const timestamp = memos.timestamp;
    const name = memos.name;
    const from = memos.address;
    const message = memos.message;

    console.log(`At ${timestamp} , name ${name} , from ${from} , message ${message}`)
  }
}

async function main() {
 const [ownwer , from1 , from2 , from3] = await hre.ethers.getSigners();
 const chai = await hre.ethers.getContractFactory("chai");
 const contract = await chai.deploy();
  await contract.deployed();

  cosoleBalance.log("Address of contracts : " , contract.address);
  const addresses = [ownwer.address , from1.address , contract.address];
  console.log("Bfore buying chai");
  cosoleBalance(addresses);

  const amount = {value:hre.ethers.utils.parseEther("1")}; 
  await contract.connect(from1).buyChai("from1" , "Very nice chai" , amount);
  await contract.connect(from2).buyChai("from2" , "Very nice chai2" , amount);
  await contract.connect(from3).buyChai("from3" , "Very nice chai3" , amount);
  console.log("After buying chai");
  cosoleBalance(addresses);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
