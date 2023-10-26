# Crosschain NFT Project

This project allows you to mint NFTs on the Matic Mumbai testnet and transfer them to the Binance Smart Chain (BNB) testnet using Foundry for Ethereum smart contract deployment.

### Prerequisites

- Node.js and npm installed.
- Foundry for Ethereum smart contract deployment (installation instructions provided below).
- Owner's private key and address set in the `.env.example` file.

### Installation

1. **Install Foundry on Linux:**

   ```shell
    curl -L https://foundry.paradigm.xyz | bash

2. **Compile the smart contract:**

   ```shell
    forge build
    
## Deployment
#### Deploy on Matic Mumbai:

    forge create --rpc-url "https://rpc-mumbai.maticvigil.com/" --private-key "<your_private_key>" src/MaiLabs.sol:MaiLabs

#### Deploy on BNB Testnet:

    forge create --rpc-url "https://data-seed-prebsc-1-s1.binance.org:8545/" --private-key "<your_private_key>" src/MaiLabs.sol:MaiLabs

# Running the Project
#### Install project dependencies:

    npm install

#### Start the development server:
    npm run dev

## .env.example
Ensure you set your owner's private key and address in the .env.example file.
OWNER_PK=your_private_key
OWNER_ADDRESS=your_owner_address


## Usage
### Step 1: Mint on Matic Mumbai
    Endpoint: localhost:3000/nft/mint

#### Request Body:
    {
       "to": "0xAddress",
       "tokenId": "1"
    }

### Step 2: Transfer to BNB Testnet
    Endpoint: localhost:3000/nft/transfer

## Request Body:
    {
       "tokenId": "1"
    }
##### Information: This will burn the minted NFT on Matic Mumbai and mint it on BNB testnet.

