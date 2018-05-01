const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/cocoContractFactory.json');

const provider = new HDWalletProvider(
  'usage saddle chunk detect nephew predict essay caution turkey hope spare define',
  'https://rinkeby.infura.io/ip4HwWHBjZmslcVOaWzx'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: '3000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
};
deploy();

/*
const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'usage saddle chunk detect nephew predict essay caution turkey hope spare define',
  'https://rinkeby.infura.io/ip4HwWHBjZmslcVOaWzx'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode })
    .send({ gas: '1000000', from: accounts[0] });

  console.log(interface);
  console.log('Contract deployed to', result.options.address);
};
deploy();
*/