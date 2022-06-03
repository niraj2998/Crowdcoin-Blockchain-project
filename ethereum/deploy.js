const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/CampaignFactory.json");

provider = new HDWalletProvider(
  "uncle sea float sauce age arrange play kangaroo swamp cargo pelican wave",
  "https://rinkeby.infura.io/v3/f92829e3711d43c193eab3f97d86b92b"
);

const web3 = new Web3(provider);

const deploy = async () => {
  try {
    const accounts = await web3.eth.getAccounts();
  console.log("Attempting to deploy from account", accounts[0]);
  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: "1000000", from: accounts[0] });
  console.log("Contract deployed to", result.options.address);
  // provider.engine.stop();
  } catch (error) {
    console.log(error);
  }
};

deploy();

// 0xD4Cd58A4570Ed2057446D09c6F424A762D293d45
