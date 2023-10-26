const bnb_nft_address = "0xfe48b92C08df712acdE871afeBFD87474B2AAe83"
const matic_nft_address = "0xb87FD0e390f103f00612f402e2Acb3422CD4d9d7"
const abi = require("../out/MaiLabs.sol/MaiLabs.json").abi
const {Web3} = require("web3")
const bnb_web3 = new Web3("https://data-seed-prebsc-1-s1.binance.org:8545")
const matic_web3 = new Web3("https://rpc-mumbai.maticvigil.com")
const matic_instance = new matic_web3.eth.Contract(abi, matic_nft_address)
const bnb_instance = new bnb_web3.eth.Contract(abi, bnb_nft_address)

module.exports = {matic_instance, bnb_instance, matic_web3, bnb_web3,
     bnb_nft_address, matic_nft_address}